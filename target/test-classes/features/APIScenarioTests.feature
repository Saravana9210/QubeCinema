Feature: Usecase based tests for /files and /upload APIs

@watch
Scenario: Upload a file and check the status and the file list
	Given I upload a file with payload "uploadFile" and save fileId to "results.props->commonFileID"	
	When I check the status of the file with id "results.props->commonFileID"
	Then I verify the "$.status=Pending"
	And I verify the "$.bytesCompleted=0"

@watch	
Scenario: Upload a file with partial bytesCompleted (1)
	Given I upload a file with payload "uploadPartialFile1" and save fileId to "results.props->partialFile1ID"	
	When I check the status of the file with id "results.props->partialFile1ID"
	Then I verify the "$.status=Pending"

@watch	
Scenario: Upload a file with partial bytesCompleted (2)
	Given I upload a file with payload "uploadPartialFile2" and save fileId to "results.props->partialFile2ID"	
	When I check the status of the file with id "results.props->partialFile2ID"
	Then I verify the "$.status=Pending"

@watch
Scenario: Update the upload status to partial and check the status of the file
	Given I update the bytesCompleted of file with id "results.props->commonFileID" as "$.size-30"
	When I check the status of the file with id "results.props->commonFileID"
	Then I verify the "$.status=Pending"
	And I verify the "$.bytesCompleted=$.size-30"

@watch
Scenario: Update the upload status to 100% and check the status of the file
	Given I update the bytesCompleted of file with id "results.props->commonFileID" as "$.size"
	When I check the status of the file with id "results.props->commonFileID"
	Then I verify the "$.status=Completed"
	And I verify the "$.bytesCompleted=$.size"

@watch	
Scenario: Share a file to another existing user
	Given I share the file with id "results.props->sharedFileID" to user with id "results.props->user2.Id"
	When I check the files list of user "results.props->user2.Token" and save response to "results->user2.fileList"
	Then I verify "results->user2.fileList" to contain "results.props->sharedFileID"

@watch
Scenario: Share a file which is partially uploaded
	Given I share the file with id "results.props->partialFile1ID" to user with id "results.props->user2.Id"
	When I check the files list of user "results.props->user2.Token" and save response to "results->user2.fileList"
	Then I verify "results->user2.fileList" to contain "results.props->sharedFileID"

@watch
Scenario: Share a file to another non-existing user
	Given I share the file with id "results.props->sharedFileID" to user with id "results.props->unknown_user.Id"
	When I check the files list of user "results.props->unknown_user.Token" and save response to "results->unknown_user.fileList"
	Then I verify the response to contain error "user doesn't exist"

@watch
Scenario: Accept a file and check the file status and the files list of user1 and user2
	Given I accept a file with id "results.props->sharedFileID" as "results.props->user2.Token"
	When I check the files list of user "results.props->user2.Token" and "getSharedFiles"
	Then I verify the response to contain "results.props->sharedFileID"
	When I check the files list of user "results.props->user2.Token" and save response to "results->user2.fileList"
	Then I verify "results->user2.fileList" to contain "results.props->sharedFileID"

@watch	
Scenario: Reject a file and check the file status and the files list of user1 and user2
	Given I reject a file with id "results.props->sharedFileID" as "results.props->user2.Token"
	When I check the files list of user "results.props->user2.Token" with "getSharedFiles"
	Then I verify the response NOT to contain "results.props->sharedFileID"
	When I check the files list of user "results.props->user1.Token" and save response to "results->user1.fileList"
	Then I verify "results->user1.fileList" to contain "results.props->sharedFileID"

@watch
Scenario: Delete a file which is pending acceptance and try accepting the file
	Given I delete a file with id "results.props->partialFile1ID" as "results.props->user1.Token"
	When I accept a file with id "results.props->partialFile1ID" as "results.props->user2.Token"
	Then I verify the response to contain error "file deleted"

@watch	
Scenario: Delete a file which is pending acceptance and try rejecting the file
	Given I delete a file with id "results.props->partialFile2ID" as "results.props->user1.Token"
	When I reject a file with id "results.props->partialFile2ID" as "results.props->user2.Token"
	Then I verify the response to contain error "file deleted"

@watch	
Scenario: Delete a shared file as user2 shared by user1
	Given I delete a file with id "results.props->sharedFileID" as "results.props->user2.Token"
	When I check the files list of user "results.props->user2.Token" and save response to "results->user2.fileList"
	Then I verify "results->user2.fileList" NOT to contain "results.props->sharedFileID"
	When I check the files list of user "results.props->user2.Token" and save response to "results->user2.fileList"
	Then I verify "results->user2.fileList" to contain "results.props->sharedFileID"
