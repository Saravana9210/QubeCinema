package com.qube.test;

import static io.restassured.RestAssured.given;

import com.jayway.jsonpath.JsonPath;
import com.jayway.jsonpath.ReadContext;
import com.qube.core.HelperUtils;
import com.qube.core.Rest;

import io.restassured.response.Response;

public class APIUtils {
	
	private final static String BASE_URI = HelperUtils.readProperty("data.props->BASE_URI");
	private final static String UPLOAD_API = HelperUtils.readProperty("data.props->UPLOAD_API");
	private final static String FILES_API = HelperUtils.readProperty("data.props->FILES_API");
	
	public static String uploadFile(String token, String jsonPayload) {
		String queryParam = "?token=" + token;
		String url = BASE_URI + UPLOAD_API + queryParam; 
		Response response = Rest.postResponse(url, jsonPayload);
		ReadContext resJsonContext = JsonPath.parse(response.getBody().asString());
		return resJsonContext.read("$.fileId").toString();
	}
	
	public static Response getListOfFiles(String token) {
		String queryParam = "?token=" + token;
		String url = BASE_URI + FILES_API + queryParam;
		System.out.println("URL: " + url);
		return Rest.getResponse(url);		
	}
	
	public static Response getListOfSharedFiles(String token) {
		String queryParam = "?token=" + token;
		String url = BASE_URI + FILES_API + queryParam + "getSharedFiles=test";
		System.out.println("URL: " + url);
		return Rest.getResponse(url);		
	}
	
	public static Response getUploadDetails(String token, String fileId) {
		String queryParam = "?token=" + token;
		String extraParam = "&fileId=" + fileId;
		String url = BASE_URI + UPLOAD_API + queryParam + extraParam;
		return Rest.getResponse(url);
	}
	
	public static Response updateUploadDetails(String token, String fileId, String bytestoUpload) {
		String queryParam = "?token=" + token;
		String url = BASE_URI + UPLOAD_API + queryParam;
		System.out.println("URL: " + url);
		System.out.println("fileId: " + fileId);
		System.out.println("bytesToUpload: " + bytestoUpload);
		return given().
			relaxedHTTPSValidation().
			contentType("multipart/form-data").
			multiPart("fileId", fileId, "text").
			multiPart("bytesCompleted", bytestoUpload, "text").
		when().
			put(url);
	}
	
	public static Response shareFile(String token, String fileId, String userId) {
		String queryParam = "?token=" + token;
		String url = BASE_URI + FILES_API + queryParam;
		return given().
			relaxedHTTPSValidation().
			contentType("multipart/form-data").
			multiPart("fileId", fileId, "text").
			multiPart("shareTo", userId, "text").
		when().
			post(url);
	}
	
	public static Response acceptFile(String token, String fileId) {
		String queryParam = "?token=" + token;
		String url = BASE_URI + FILES_API + queryParam;
		return given().
			relaxedHTTPSValidation().
			contentType("multipart/form-data").
			multiPart("fileId", fileId, "text").
			multiPart("isAccepted", true, "text").
		when().
			put(url);
	}
	
	public static Response rejectFile(String token, String fileId) {
		String queryParam = "?token=" + token;
		String url = BASE_URI + FILES_API + queryParam;
		return given().
			relaxedHTTPSValidation().
			contentType("multipart/form-data").
			multiPart("fileId", fileId, "text").
			multiPart("isAccepted", false, "text").
		when().
			put(url);
	}
	
	public static Response deleteFile(String token, String fileId) {
		String queryParam = "?token=" + token;
		String url = BASE_URI + FILES_API + queryParam;
		return given().
				relaxedHTTPSValidation().
				contentType("multipart/form-data").
				multiPart("fileId", fileId, "text").
			when().
				delete(url);
	}
}
