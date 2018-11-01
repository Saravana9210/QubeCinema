Feature: Usecase based tests for /files and /upload APIs

@watch
Scenario: Upload a file and check the status and the file list
	Given I upload a file with payload "uploadCommonFile.json" and save fileId to "data.props->commonFileID"	
	When I check the status of the file with id "data.props->commonFileID"
	Then I verify the value "$.status=Pending"
	And I verify the value "$.bytesCompleted=0"

@watch	
Scenario Outline: Upload a file with partial bytesCompleted - for <Title>
	Given I upload a file with payload "<PayloadTemplate>" and save fileId to "data.props-><OutputFileID>"	
	When I check the status of the file with id "data.props-><OutputFileID>"
	Then I verify the value "$.status=Pending"
	
	Examples:
	| Title          | PayloadTemplate         | OutputFileID   | 
    | Partial file 1 | uploadPartialFile1.json | partialFile1ID | 
    | Partial file 2 | uploadPartialFile2.json | partialFile2ID | 
    | Shared file 1  | uploadSharedFile1.json  | sharedFile1ID  | 
    | Shared file 2  | uploadSharedFile2.json  | sharedFile2ID  |
    | file to Delete 1  | file1ToDelete.json  | file1ToDeleteID  |
    | Shared file to Delete 1  | sharedFile1ToDelete.json  | sharedFile1ToDeleteID  | 
    | Shared file to Delete 2  | sharedFile2ToDelete.json  | sharedFile2ToDeleteID  |
    | Shared file to Delete 3  | sharedFile3ToDelete.json  | sharedFile3ToDeleteID  |
    | Shared file to Delete 4  | sharedFile4ToDelete.json  | sharedFile4ToDeleteID  |
    | Shared file to Delete 5  | sharedFile5ToDelete.json  | sharedFile5ToDeleteID  |
    | Shared file to Delete 6  | sharedFile6ToDelete.json  | sharedFile6ToDeleteID  |

@watch
Scenario: Update the upload status to partial and check the status of the file
	Given I update the bytes of a file with id "data.props->commonFileID" as "30" less than it's size
	When I check the status of the file with id "data.props->commonFileID"
	Then I verify the value "$.status=Pending"
	And I verify the value "$.bytesCompleted" is "30" less than "$.size"

@watch
Scenario: Update the upload status to 100% and check the status of the file
	Given I update the bytes of a file with id "data.props->commonFileID" as "$.size"
	When I check the status of the file with id "data.props->commonFileID"
	Then I verify the value "$.status=Completed"
	And I verify the fields "$.bytesCompleted=$.size"

@watch	
Scenario Outline: Share a file to another existing user - <Title>
	Given I share the file with id "data.props->sharedFile1ID" to user with id "data.props->user2.Id"
	And I verify the value "$.message=Successfully Shared"
	When I check the files list of user "data.props->USER2_TOKEN" and save response to "data.props->user2.fileList"
	Then I verify the list "data.props->user2.fileList" NOT to contain "data.props->sharedFile1ID"
	
	Examples:
	|Title|Token|File to Share|File List|
	|Share to User2 - 1|USER2_TOKEN|sharedFile1ID|user2.fileList|
	|Share to User2 - 2|USER2_TOKEN|sharedFile1ToDeleteID|user2.fileList|
	|Share to User2 - 3|USER2_TOKEN|sharedFile2ToDeleteID|user2.fileList|
	|Share to User2 - 4|USER2_TOKEN|sharedFile3ToDeleteID|user2.fileList|
	|Share to User2 - 5|USER2_TOKEN|sharedFile4ToDeleteID|user2.fileList|
	|Share to User2 - 6|USER2_TOKEN|sharedFile5ToDeleteID|user2.fileList|

@watch
Scenario: Share a file which is partially uploaded
	Given I share the file with id "data.props->partialFile2ID" to user with id "data.props->user2.Id"
	And I verify the value "$.message=Successfully Shared"
	When I check the shared files list of user "data.props->USER2_TOKEN" and save response to "data.props->user2.fileList"
	Then I verify the list "data.props->user2.fileList" to contain "data.props->sharedFile1ID"

@watch
Scenario: Share a file to another non-existing user
	Given I share the file with id "data.props->sharedFile1ID" to user with id "data.props->unknown_user.Id"
	And I verify the value "$.message=User doesn't exist"
	When I check the files list of user "data.props->unknown_user.Token" and save response to "data.props->unknown_user.fileList"
	Then I verify the response to contain error "user doesn't exist"

@watch
Scenario: Accept a file and check the file status and the files list of user1 and user2
	Given I accept a file with id "data.props->sharedFile1ID" as "data.props->USER2_TOKEN"
	When I check the files list of user "data.props->USER2_TOKEN" and save response to "data.props->user2.fileList"
	Then I verify the list "data.props->user2.fileList" to contain "data.props->sharedFile1ID"
	When I check the shared files list of user "data.props->USER2_TOKEN" and save response to "data.props->user2.fileList"
	Then I verify the list "data.props->user2.fileList" NOT to contain "data.props->sharedFile1ID"
	When I check the files list of user "data.props->USER1_TOKEN" and save response to "data.props->user1.fileList"
	Then I verify the list "data.props->user1.fileList" to contain "data.props->sharedFile1ID"

@watch	
Scenario: Reject a file and check the file status and the files list of user1 and user2
	Given I reject a file with id "data.props->partialFile2ID" as "data.props->USER2_TOKEN"
	When I check the files list of user "data.props->USER2_TOKEN" and save response to "data.props->user2.fileList"
	Then I verify the list "data.props->user2.fileList" NOT to contain "data.props->partialFile2ID"
	When I check the shared files list of user "data.props->USER2_TOKEN" and save response to "data.props->user2.fileList"
	Then I verify the list "data.props->user2.fileList" NOT to contain "data.props->partialFile2ID"
	When I check the files list of user "data.props->USER1_TOKEN" and save response to "data.props->user1.fileList"
	Then I verify the list "data.props->user1.fileList" to contain "data.props->partialFile2ID"
	
@watch
Scenario: Delete a file
	Given I delete a file with id "data.props->file1ToDeleteID" as "data.props->USER1_TOKEN"
	When I check the files list of user "data.props->USER1_TOKEN" and save response to "data.props->user1.fileList"
	Then I verify the list "data.props->user1.fileList" NOT to contain "data.props->file1ToDeleteID"

@watch
Scenario: Delete a file which is pending acceptance and try accepting the file
	Given I delete a file with id "data.props->sharedFile1ToDeleteID" as "data.props->USER1_TOKEN"
	When I accept a file with id "data.props->sharedFile1ToDeleteID" as "data.props->USER2_TOKEN"
	Then I verify the value "$.error=file deleted"

@watch	
Scenario: Delete a file which is pending acceptance and try rejecting the file
	Given I delete a file with id "data.props->sharedFile2ToDeleteID" as "data.props->USER1_TOKEN"
	When I reject a file with id "data.props->sharedFile2ToDeleteID" as "data.props->USER2_TOKEN"
	Then I verify the value "$.error=file deleted"

@watch	
Scenario: Delete a shared file as user2 from Inbox shared by user1
	Given I delete a file with id "data.props->sharedFile3ToDeleteID" as "data.props->USER2_TOKEN"
	When I check the files list of user "data.props->USER2_TOKEN" and save response to "data.props->user2.fileList"
	Then I verify "data.props->user2.fileList" NOT to contain "data.props->sharedFile3ToDeleteID"
	When I check the files list of user "data.props->USER2_TOKEN" and save response to "results->user2.fileList"
	Then I verify "data.props->user2.fileList" to contain "data.props->sharedFile3ToDeleteID"
	
@watch	
Scenario: Delete a shared file as user2 from Dashboard shared by user1
	Given I delete a file with id "data.props->sharedFile4ToDeleteID" as "data.props->USER2_TOKEN"
	When I check the files list of user "data.props->USER2_TOKEN" and save response to "results->user2.fileList"
	Then I verify "results->user2.fileList" NOT to contain "data.props->sharedFile4ToDeleteID"
	When I check the files list of user "data.props->USER2_TOKEN" and save response to "results->user2.fileList"
	Then I verify "results->user2.fileList" to contain "data.props->sharedFile4ToDeleteID"
