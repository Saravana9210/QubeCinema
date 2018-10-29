package com.qube.test;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.http.impl.bootstrap.HttpServer;

import com.jayway.jsonpath.JsonPath;
import com.jayway.jsonpath.ReadContext;
import com.qube.core.*;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import junit.framework.Assert;

public class StepDefCore {
	
	public static String url;
	public static Response response;
	
	@Given("^I set endpoint to \"([^\"]*)\" with \"([^\"]*)\"$")
	public void setEndpoint(String baseURI, String endpoint) {
		baseURI = HelperUtils.readProperty(baseURI);
		endpoint = HelperUtils.readProperty(endpoint);		
		url = baseURI + endpoint;
	}
	
	@When("^I add query params \"([^\"]*)\"$")
	public void addQueryParams(String queryParameters) {
		String[] queryParams = queryParameters.split(", ");
		for (String param: queryParams) {
			if(url.contains("?")) {
				url = url + "&" + param;
			} else {
				url = url + "?" + param;
			}			
		}
		System.out.println("URL: " + url);
	}
	
	@When("^I add token query param \"([^\"]*)\"$")
	public void addTokenQueryParam(String queryParameter) {
		String[] queryParams = queryParameter.split("=", 2);
		String paramName = queryParams[0];
		String paramValue = HelperUtils.readProperty(queryParams[1]);
		url = url + "?" + paramName + "=" + paramValue;
		System.out.println("URL: " + url);
	}
	
	@When("^I invoke the API with POST multipart formData payload \"([^\"]*)\"$")
	public void invokeAPIwithMultipartFormDataPayload(String formData) {
		String[] formDataFields = formData.split(", ");
		Map<String, String> fileFormData = new LinkedHashMap<String, String>();		
		for (String formDataField: formDataFields) {
			String[] array = formDataField.split("=", 2);
			fileFormData.put(array[0], array[1]);
		}
		Set<Map.Entry<String, String>> mapSet = fileFormData.entrySet();
        Map.Entry<String, String> field1 = (Map.Entry<String, String>) mapSet.toArray()[0];
        Map.Entry<String, String> field2 = (Map.Entry<String, String>) mapSet.toArray()[1];
        Map.Entry<String, String> field3 = (Map.Entry<String, String>) mapSet.toArray()[2];
        
		response = given().relaxedHTTPSValidation().
						contentType("multipart/form-data").
						multiPart(field1.getKey(), field1.getValue(), "text").
						multiPart(field2.getKey(), field2.getValue(), "text").
						multiPart(field3.getKey(), field3.getValue(), "text").
					when().
						post(url);
	}
	
	@When("^I invoke the API with PUT multipart formData payload \"([^\"]*)\"$")
	public void invokeAPIwithMultipartFormDataForEdit(String formData) {
		String[] formDataFields = formData.split(", ");
		Map<String, String> fileFormData = new LinkedHashMap<String, String>();		
		for (String formDataField: formDataFields) {
			String[] array = formDataField.split("=", 2);
			fileFormData.put(array[0], array[1]);
		}		
		Set<Map.Entry<String, String>> mapSet = fileFormData.entrySet();
        Map.Entry<String, String> field1 = (Map.Entry<String, String>) mapSet.toArray()[0];
        Map.Entry<String, String> field2 = (Map.Entry<String, String>) mapSet.toArray()[1];        
//        String fileIdField = fileId.getKey();
//        String fileIdValue = fileId.getValue();
//        String bytesField = bytesCompleted.getKey();
//        String bytesValue = bytesCompleted.getValue();
        
		response = given().relaxedHTTPSValidation().
						contentType("multipart/form-data").
						multiPart(field1.getKey(), field1.getValue(), "text").
						multiPart(field2.getKey(), field2.getValue(), "text").
					when().
						put(url);
	}
	
	@When("^I invoke the API to GET details$")
	public void i_invoke_the_API_with_GET_details() {
	    response = given().relaxedHTTPSValidation().contentType(ContentType.JSON).when().get(url);
	}
	
	@When("^I invoke the API with DELETE multipart formData payload \"([^\"]*)\"$")
	public void i_invoke_the_API_with_DELETE_formData_payload(String formData) {
		String[] formDataFields = formData.split(", ");
		Map<String, String> fileFormData = new LinkedHashMap<String, String>();		
		for (String formDataField: formDataFields) {
			String[] array = formDataField.split("=", 2);
			fileFormData.put(array[0], array[1]);
		}		
		Set<Map.Entry<String, String>> mapSet = fileFormData.entrySet();
        Map.Entry<String, String> field1 = (Map.Entry<String, String>) mapSet.toArray()[0];       
        
		response = given().relaxedHTTPSValidation().
						contentType("multipart/form-data").
						multiPart(field1.getKey(), field1.getValue(), "text").
					when().
						delete(url);
	}
	
	@Then("^I verify the status code to be \"([^\"]*)\"$")
	public void verifyStatusCode(String statusCode) {
		int resStatusCode = response.getStatusCode();
		Assert.assertEquals(statusCode, Integer.toString(resStatusCode));
	}
	
	@Then("^I verify the status message as \"([^\"]*)\"$")
	public void i_verify_the_response_message_as(String statusMessage) {
		String resStatusMessage = response.getStatusLine();
		System.out.println("Response message: " + resStatusMessage);
		Assert.assertTrue(resStatusMessage.contains(statusMessage));
	}
	
	@Then("^I verify the response to contain \"([^\"]*)\"$")
	public void i_verify_the_response_to_contain(String responseFields) {
		String[] fields = responseFields.split(", ");
		for (String field: fields) {
			Assert.assertNotNull(response.jsonPath().get(field));
		}	    
	}
	
	@Then("^I verify the response contains \"([^\"]*)\"$")
	public void i_verify_the_response_contains(String resFields) {
		String[] responseFields = resFields.split(", ");
		for (String responseField: responseFields) {
			String[] array = responseField.split("=", 2);
			String value = response.jsonPath().get(array[0]).toString();
			Assert.assertTrue(value.contains(array[1]));
		}	    
	}
	
	@Then("^I verify the json response contains \"([^\"]*)\"$")
	public void i_verify_the_responses_contains(String resFields) {
		String[] responseFields = resFields.split(", ");
		ReadContext resJsonContext = JsonPath.parse(response.getBody().asString());
		for (String responseField: responseFields) {
			Assert.assertNotNull(resJsonContext.read(responseField));
		}
	}
	
	@Then("^I verify the count to be greater than \"([^\"]*)\"$")
	public void i_verify_the_count_greater_than(String expFilesCount) {
		ReadContext resJsonContext = JsonPath.parse(response.getBody().asString());
		Assert.assertTrue(Integer.parseInt(resJsonContext.read("$.length()").toString()) > Integer.parseInt(expFilesCount));
	}
	
	@Then("^I verify the count to be equal to \"([^\"]*)\"$")
	public void i_verify_the_count_equal_to(String expFilesCount) {
		ReadContext resJsonContext = JsonPath.parse(response.getBody().asString());
		Assert.assertTrue(Integer.parseInt(resJsonContext.read("$.length()").toString()) == Integer.parseInt(expFilesCount));
	}

}
