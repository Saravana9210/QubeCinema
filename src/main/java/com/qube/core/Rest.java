package com.qube.core;

import static io.restassured.RestAssured.given;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import org.apache.commons.io.IOUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hamcrest.core.IsAnything;
import org.hamcrest.core.IsNot;
import org.hamcrest.core.IsNull;

import gherkin.lexer.Is;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class Rest {
	private static final String JSON_TYPE = "application/json";
	private static final Logger LOGGER = LogManager.getLogger(Rest.class);
	
	public static final Response getResponse(final String url) {
		return given().relaxedHTTPSValidation().contentType(Rest.JSON_TYPE).when().get(url);
	}
	
	public static final Response postResponse(final String url, final String jsonPayload) {
		LOGGER.info("Invoke the Rest endpoint[{}] with request payload[{}].", url, jsonPayload);
		return given().relaxedHTTPSValidation().contentType(Rest.JSON_TYPE).body(jsonPayload).when()
				.post(url);
	}
	
	public static final Response postResponseMultiPartFormData(String url, RequestSpecification httpRequest) {
			return httpRequest.when().post(url);
	}
	
	public static final Response postResponseMultiPart(String url, String jsonFilePath, String ftlFilePath) {
		try {
			String reqJson = IOUtils
					.toString(new FileReader("src/test/resources/" + jsonFilePath));
			File ftl = new File("src/test/resources/" + ftlFilePath);
			return given().
					contentType("multipart/form-data").
			         multiPart("configuration", reqJson, "application/json").
			         multiPart("configuration-ftl", ftl, "file").
			when().
			         post(url);
		} catch (IOException e) {
			e.printStackTrace();
			return null;
		}		
	}
	
	public static final Response postResponseMultiPartSingleFile(String url, File filePath) {
		File ftl = new File("src/test/resources/" + filePath);
		return given().
				contentType("multipart/form-data").
				multiPart("configuration-ftl", ftl, "file").
		when().
		         post(url);		
	}

}
