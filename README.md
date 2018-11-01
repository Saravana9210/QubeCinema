# QubeCinema

## This is a sample API Automation framework developed for few ShareBox APIs. 

This framework comprises of 3 main packages:

    /src/main/java -> contains helper utilities
    /src/test/java -> contains the Cucumber runner class and Step Definitions (glue)
    /src/test/resources -> contains the feature files, dataSet and config files
    
    
**It covers 2 types of test suites:**
######     1. Core API testing
  
             (a) /src/test/resources/features/APICoreTests_FILES.feature covers the testing of '/files' API
             (b) /src/test/resources/features/APICoreTests_UPLOAD.feature covers the testing of '/upload' API
       
######     2. Scenario based testing
             (a) /src/test/resources/features/APIScenarioTests.feature covers the scenario based testing of all APIs
                 (yet to be implemented)
  
  
**Steps to run the tests:**
  1. Import the project into Eclipse of any comfortable IDE
  2. Update */src/test/resources/data/data.props* with *USER1_TOKEN* and *USER2_TOKEN* (tokens of 2 different users)
  3. Run the Cucumber runner class /src/test/java/APITestRunner.java as JUnit test
  4. HTML reports will be pushed to /target folder after the completion of test execution
  5. Open *index.html* to check the test exection results
  
  
  
 **Frameworks used:**
 
    1. Rest Assured
    2. Cucumber Java
    3. JUnit
    4. Jayway JsonPath
  
  
 
**ToDo:**
  1. Cleanup activities (remove unused imports and variables, adding comments and info, author info, etc)
  2. logging
  
    
