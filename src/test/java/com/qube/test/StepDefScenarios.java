package com.qube.test;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefScenarios {
	
	@Given("^I upload a file with payload \"([^\"]*)\" and save fileId to \"([^\"]*)\"$")
	public void uploadFileAndSaveResponse(String arg1, String arg2) {
	    
	}

	@When("^I check the status of the file with id \"([^\"]*)\"$")
	public void checkFileStatus(String arg1) {	    
	    
	}

	@Then("^I verify the \"([^\"]*)\"$")
	public void verifyResponse(String arg1) {	    
	    
	}

	@Given("^I update the bytesCompleted of file with id \"([^\"]*)\" as \"([^\"]*)\"$")
	public void updatBytesCompleted(String arg1, String arg2) {	    
	    
	}

	@Given("^I share the file with id \"([^\"]*)\" to user with id \"([^\"]*)\"$")
	public void shareFileToUser(String arg1, String arg2) {	    
	    
	}

	@When("^I check the files list of user \"([^\"]*)\" and save response to \"([^\"]*)\"$")
	public void checkFilesListAndSaveResponse(String arg1, String arg2) {	    
	    
	}

	@Then("^I verify the response to contain error \"([^\"]*)\"$")
	public void verifyResponseForError(String arg1) {	    
	    
	}

	@Given("^I accept a file with id \"([^\"]*)\" as \"([^\"]*)\"$")
	public void acceptAFile(String arg1, String arg2) {	    
	    
	}

	@When("^I check the files list of user \"([^\"]*)\" with \"([^\"]*)\"$")
	public void checkSharedFiles(String arg1, String arg2) {	    
	    
	}

	@Given("^I reject a file with id \"([^\"]*)\" as \"([^\"]*)\"$")
	public void rejectAFile(String arg1, String arg2) {	    
	    
	}

	@Then("^I verify the response NOT to contain \"([^\"]*)\"$")
	public void i_verify_the_response_NOT_to_contain(String arg1) {	    
	    
	}

	@Given("^I delete a file with id \"([^\"]*)\" as \"([^\"]*)\"$")
	public void deleteAFile(String arg1, String arg2) {	    
	    
	}
	
	@Then("^I verify \"([^\"]*)\" to contain \"([^\"]*)\"$")
	public void i_verify_to_contain(String arg1, String arg2) {	    
	    
	}

	@Then("^I verify \"([^\"]*)\" NOT to contain \"([^\"]*)\"$")
	public void i_verify_NOT_to_contain(String arg1, String arg2) {	    
	    
	}

}
