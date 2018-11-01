package com.qube.test;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/APIScenarioTests.feature",
		glue = "com.qube.test",
		tags = { "@watch" },
		plugin = { "pretty", "html:target/cucumber-reports", "json:target/cucumber-reports.json" } 
		)
public class APITestRunner {

}
