package com.qube.test;

import static org.junit.Assert.assertThat;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;

import org.apache.commons.io.IOUtils;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.jayway.jsonpath.Configuration;
import com.jayway.jsonpath.JsonPath;
import com.jayway.jsonpath.ReadContext;
import com.jayway.jsonpath.spi.json.JacksonJsonNodeJsonProvider;
import com.jayway.jsonpath.spi.mapper.JacksonMappingProvider;
import com.qube.core.HelperUtils;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import junit.framework.Assert;
import static org.hamcrest.Matchers.*;

import com.qube.test.APIUtils;

public class StepDefScenarios {
	
	private static String stringTemplPayLoad;
	private static String stringReqPayLoad;
	private static ObjectNode requestJson;
	private static Response response;
	private String user1Token = HelperUtils.readProperty("data.props->USER1_TOKEN");
	private String user2Token = HelperUtils.readProperty("data.props->USER2_TOKEN");
	
	private static final Configuration configuration = Configuration.builder()
		    .jsonProvider(new JacksonJsonNodeJsonProvider())
		    .mappingProvider(new JacksonMappingProvider())
		    .build();
	
	@Given("^I upload a file with payload \"([^\"]*)\" and save fileId to \"([^\"]*)\"$")
	public void uploadFileAndSaveFileID(String payloadFile, String fileIdPath) {
		try {
			stringTemplPayLoad = IOUtils
					.toString(new FileReader("src/test/resources/payloadTemplates/" + payloadFile));
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		stringReqPayLoad = stringTemplPayLoad;		
	    String resFileId = APIUtils.uploadFile(user1Token, stringReqPayLoad);
	    HelperUtils.writeProperty(fileIdPath, resFileId);		
	    Assert.assertNotNull(resFileId);
	}

	@When("^I check the status of the file with id \"([^\"]*)\"$")
	public void checkFileStatus(String fileIdPath) {
		String fileId = HelperUtils.readProperty(fileIdPath);
	    response = APIUtils.getUploadDetails(user1Token, fileId);
	    Assert.assertEquals(200, response.getStatusCode());
	    Assert.assertNotNull(response);
	}

	@Then("^I verify the value \"([^\"]*)\"$")
	public void verifyResponseValues(String jsonPath) {
		String[] jsonValidate = jsonPath.split("=", 2);
		ReadContext resJsonContext = JsonPath.parse(response.getBody().asString());
		String value = resJsonContext.read(jsonValidate[0]).toString();
		Assert.assertEquals(jsonValidate[1], value);
	}
	
	@Then("^I verify the fields \"([^\"]*)\"$")
	public void verifyResponseFields(String jsonPath) {
		String[] jsonValidate = jsonPath.split("=", 2);
		ReadContext resJsonContext = JsonPath.parse(response.getBody().asString());
		String Field1Value = resJsonContext.read(jsonValidate[0]).toString();
		String Field2Value = resJsonContext.read(jsonValidate[1]).toString();
		Assert.assertEquals(Field1Value, Field2Value);
	}
	
	@Then("^I verify the value \"([^\"]*)\" is \"([^\"]*)\" less than \"([^\"]*)\"$")
	public void verifyResponse(String jsonPath1, String diff, String jsonPath2) {
		String[] jsonValidate1 = jsonPath1.split("=", 2);
		String[] jsonValidate2 = jsonPath2.split("=", 2);
		ReadContext resJsonContext = JsonPath.parse(response.getBody().asString());
		int bytesCompleted = resJsonContext.read(jsonValidate1[0]);
		int size = resJsonContext.read(jsonValidate2[0]);
		Assert.assertTrue(size-Integer.parseInt(diff) == bytesCompleted);
	}

	@Given("^I update the bytes of a file with id \"([^\"]*)\" as \"([^\"]*)\"$")
	public void updatBytesCompleted(String fileIdPath, String sizePath) {
		checkFileStatus(fileIdPath);
		String fileId = HelperUtils.readProperty(fileIdPath);
		ReadContext resJsonContext = JsonPath.parse(response.getBody().asString());
		int fileSize = resJsonContext.read("$.size");
		int bytesToupdate = fileSize;
	    response = APIUtils.updateUploadDetails(user1Token, fileId, Integer.toString(bytesToupdate));
	    String resMessage = JsonPath.parse(response.getBody().asString()).read("$.message");
	    Assert.assertEquals(200, response.getStatusCode());
	    Assert.assertEquals("Bytes has been updated successfully", resMessage);
	}
	
	@Given("^I update the bytes of a file with id \"([^\"]*)\" as \"([^\"]*)\" less than it's size$")
	public void updatBytesCompletedLess(String fileIdPath, int bytesValue) {
		checkFileStatus(fileIdPath);
		ReadContext resJsonContext = JsonPath.parse(response.getBody().asString());
		String fileId = resJsonContext.read("$.fileId");
		int fileSize = resJsonContext.read("$.size");
		int bytesToupdate = fileSize - bytesValue;
	    response = APIUtils.updateUploadDetails(user1Token, fileId, Integer.toString(bytesToupdate));
	    System.out.println("Response: " + response.getBody().asString());
	    String resMessage = JsonPath.parse(response.getBody().asString()).read("$.message");
	    Assert.assertEquals(200, response.getStatusCode());
	    Assert.assertEquals("Bytes has been updated successfully", resMessage);
	}

	@Given("^I share the file with id \"([^\"]*)\" to user with id \"([^\"]*)\"$")
	public void shareFileToUser(String fileIdPath, String userIdPath) {	    
	    String fileId = HelperUtils.readProperty(fileIdPath);
	    String userId = HelperUtils.readProperty(userIdPath);
	    response = APIUtils.shareFile(user1Token, fileId, userId);
	    Assert.assertEquals(200, response.getStatusCode());
	}

	@When("^I check the files list of user \"([^\"]*)\" and save response to \"([^\"]*)\"$")
	public void checkFilesListAndSaveResponse(String userTokenPath, String filesListPath) {	    
	    String token = HelperUtils.readProperty(userTokenPath);
	    response = APIUtils.getListOfFiles(token);
	    HelperUtils.writeProperty(filesListPath, response.getBody().asString());
	    Assert.assertEquals(200, response.getStatusCode());
	}
	
	@When("^I check the shared files list of user \"([^\"]*)\" and save response to \"([^\"]*)\"$")
	public void checkSharedFiles(String userTokenPath, String filesListPath) {	    
		String token = HelperUtils.readProperty(userTokenPath);
	    response = APIUtils.getListOfSharedFiles(token);
	    HelperUtils.writeProperty(filesListPath, response.getBody().asString());
	    Assert.assertEquals(200, response.getStatusCode());
	}

	@Then("^I verify the response to contain error \"([^\"]*)\"$")
	public void verifyResponseForError(String arg1) {	    
	    
	}

	@Given("^I accept a file with id \"([^\"]*)\" as \"([^\"]*)\"$")
	public void acceptAFile(String fileIdPath, String userTokenPath) {	    
	    String fileId = HelperUtils.readProperty(fileIdPath);
	    String token = HelperUtils.readProperty(userTokenPath);
	    response = APIUtils.acceptFile(token, fileId);
	    Assert.assertEquals(200, response.getStatusCode());
	}

	@Given("^I reject a file with id \"([^\"]*)\" as \"([^\"]*)\"$")
	public void rejectAFile(String fileIdPath, String userTokenPath) {	    
		String fileId = HelperUtils.readProperty(fileIdPath);
	    String token = HelperUtils.readProperty(userTokenPath);
	    response = APIUtils.rejectFile(token, fileId);
	    Assert.assertEquals(200, response.getStatusCode());
	}

	@Then("^I verify the response NOT to contain \"([^\"]*)\"$")
	public void i_verify_the_response_NOT_to_contain(String arg1) {	    
	    
	}

	@Given("^I delete a file with id \"([^\"]*)\" as \"([^\"]*)\"$")
	public void deleteAFile(String fileIdPath, String userTokenPath) {    
	    String fileId = HelperUtils.readProperty(fileIdPath);
	    String token = HelperUtils.readProperty(userTokenPath);
	    response = APIUtils.deleteFile(token, fileId);
	    Assert.assertEquals(200, response.getStatusCode());
	}
	
	@Then("^I verify \"([^\"]*)\" to contain \"([^\"]*)\"$")
	public void i_verify_to_contain(String arg1, String arg2) {	    
		String resMessage = JsonPath.parse(response.getBody().asString()).read("$.message");
	}

	@Then("^I verify \"([^\"]*)\" NOT to contain \"([^\"]*)\"$")
	public void i_verify_NOT_to_contain(String filesListPath, String fileIdPath) {
		
	}
	
	@Then("^I verify the list \"([^\"]*)\" to contain \"([^\"]*)\"$")
	public void i_verify_list_to_contain(String filesListPath, String fileIdPath) {
		ReadContext resJsonContext = JsonPath.parse(HelperUtils.readProperty(filesListPath));
	    List<String> filesList = resJsonContext.read("$.[*].fileId");
	    String fileId = HelperUtils.readProperty(fileIdPath); 
	    assertThat(filesList, hasItem(fileId));
	}
	
	@Then("^I verify the list \"([^\"]*)\" NOT to contain \"([^\"]*)\"$")
	public void i_verify_list_NOT_to_contain(String filesListPath, String fileIdPath) {
		ReadContext resJsonContext = JsonPath.parse(HelperUtils.readProperty(filesListPath));
	    List<String> filesList = resJsonContext.read("$.[*].fileId");
	    String fileId = HelperUtils.readProperty(fileIdPath); 
	    assertThat(filesList, not(hasItem(fileId)));
	}

}
