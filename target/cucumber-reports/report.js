$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("APIScenarioTests.feature");
formatter.feature({
  "line": 1,
  "name": "Usecase based tests for /files and /upload APIs",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Upload a file and check the status and the file list",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-and-check-the-status-and-the-file-list",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I upload a file with payload \"uploadFile\" and save fileId to \"results.props-\u003ecommonFileID\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I check the status of the file with id \"results.props-\u003ecommonFileID\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify the \"$.status\u003dPending\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I verify the \"$.bytesCompleted\u003d0\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 11,
  "name": "Upload a file with partial bytesCompleted (1)",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted-(1)",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I upload a file with payload \"uploadPartialFile1\" and save fileId to \"results.props-\u003epartialFile1ID\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I check the status of the file with id \"results.props-\u003epartialFile1ID\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify the \"$.status\u003dPending\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 17,
  "name": "Upload a file with partial bytesCompleted (2)",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted-(2)",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I upload a file with payload \"uploadPartialFile2\" and save fileId to \"results.props-\u003epartialFile2ID\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I check the status of the file with id \"results.props-\u003epartialFile2ID\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I verify the \"$.status\u003dPending\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 23,
  "name": "Update the upload status to partial and check the status of the file",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;update-the-upload-status-to-partial-and-check-the-status-of-the-file",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I update the bytesCompleted of file with id \"results.props-\u003ecommonFileID\" as \"$.size-30\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I check the status of the file with id \"results.props-\u003ecommonFileID\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I verify the \"$.status\u003dPending\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I verify the \"$.bytesCompleted\u003d$.size-30\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 30,
  "name": "Update the upload status to 100% and check the status of the file",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;update-the-upload-status-to-100%-and-check-the-status-of-the-file",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I update the bytesCompleted of file with id \"results.props-\u003ecommonFileID\" as \"$.size\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I check the status of the file with id \"results.props-\u003ecommonFileID\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I verify the \"$.status\u003dCompleted\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I verify the \"$.bytesCompleted\u003d$.size\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 37,
  "name": "Share a file to another existing user",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;share-a-file-to-another-existing-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I share the file with id \"results.props-\u003esharedFileID\" to user with id \"results.props-\u003euser2.Id\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I check the files list of user \"results.props-\u003euser2.Token\" and save response to \"results-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I verify \"results-\u003euser2.fileList\" to contain \"results.props-\u003esharedFileID\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 43,
  "name": "Share a file which is partially uploaded",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;share-a-file-which-is-partially-uploaded",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I share the file with id \"results.props-\u003epartialFile1ID\" to user with id \"results.props-\u003euser2.Id\"",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I check the files list of user \"results.props-\u003euser2.Token\" and save response to \"results-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I verify \"results-\u003euser2.fileList\" to contain \"results.props-\u003esharedFileID\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 49,
  "name": "Share a file to another non-existing user",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;share-a-file-to-another-non-existing-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I share the file with id \"results.props-\u003esharedFileID\" to user with id \"results.props-\u003eunknown_user.Id\"",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "I check the files list of user \"results.props-\u003eunknown_user.Token\" and save response to \"results-\u003eunknown_user.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I verify the response to contain error \"user doesn\u0027t exist\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 55,
  "name": "Accept a file and check the file status and the files list of user1 and user2",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;accept-a-file-and-check-the-file-status-and-the-files-list-of-user1-and-user2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 54,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "I accept a file with id \"results.props-\u003esharedFileID\" as \"results.props-\u003euser2.Token\"",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "I check the files list of user \"results.props-\u003euser2.Token\" and \"getSharedFiles\"",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I verify the response to contain \"results.props-\u003esharedFileID\"",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "I check the files list of user \"results.props-\u003euser2.Token\" and save response to \"results-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "I verify \"results-\u003euser2.fileList\" to contain \"results.props-\u003esharedFileID\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "results.props-\u003esharedFileID",
      "offset": 34
    }
  ],
  "location": "StepDefUtils.i_verify_the_response_to_contain(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 63,
  "name": "Reject a file and check the file status and the files list of user1 and user2",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;reject-a-file-and-check-the-file-status-and-the-files-list-of-user1-and-user2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 62,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I reject a file with id \"results.props-\u003esharedFileID\" as \"results.props-\u003euser2.Token\"",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I check the files list of user \"results.props-\u003euser2.Token\" and \"getSharedFiles\"",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "I verify the response NOT to contain \"results.props-\u003esharedFileID\"",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "I check the files list of user \"results.props-\u003euser2.Token\" and save response to \"results-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "I verify \"results-\u003euser2.fileList\" to contain \"results.props-\u003esharedFileID\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 71,
  "name": "Delete a file which is pending acceptance and try accepting the file",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;delete-a-file-which-is-pending-acceptance-and-try-accepting-the-file",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 70,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "I delete a file with id \"results.props-\u003epartialFile1ID\" as \"results.props-\u003euser1.Token\"",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "I accept a file with id \"results.props-\u003epartialFile1ID\" as \"results.props-\u003euser2.Token\"",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I verify the response to contain error \"file deleted\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 77,
  "name": "Delete a file which is pending acceptance and try rejecting the file",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;delete-a-file-which-is-pending-acceptance-and-try-rejecting-the-file",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 76,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "I delete a file with id \"results.props-\u003epartialFile2ID\" as \"results.props-\u003euser1.Token\"",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "I reject a file with id \"results.props-\u003epartialFile2ID\" as \"results.props-\u003euser2.Token\"",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "I verify the response to contain error \"file deleted\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 83,
  "name": "Delete a shared file as user2 shared by user1",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;delete-a-shared-file-as-user2-shared-by-user1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 82,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "I delete a file with id \"results.props-\u003esharedFileID\" as \"results.props-\u003euser2.Token\"",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "I check the files list of user \"results.props-\u003euser2.Token\" and save response to \"results-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "I verify \"results-\u003euser2.fileList\" NOT to contain \"results.props-\u003esharedFileID\"",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "I check the files list of user \"results.props-\u003euser2.Token\" and save response to \"results-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "I verify \"results-\u003euser2.fileList\" to contain \"results.props-\u003esharedFileID\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});