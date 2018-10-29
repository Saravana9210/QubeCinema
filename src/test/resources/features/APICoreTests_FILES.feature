Feature: Testing ShareBox APIs - /api/files

@ignore
Scenario Outline: Share a file to another user - POST - <Title>
	Given I set endpoint to "data.props->BASE_URI" with "data.props->FILES_API"
	
	When I add token query param "token=data.props->USER1_TOKEN"
	And I invoke the API with POST multipart formData payload "fileId=<FileIDValue>, shareTo=<ShareToValue>, <EmptyField>=<EmptyValue>" 
	Then I verify the status code to be "<res_status>"
	And I verify the response contains "<res_messageField>=<res_messageValue>"
	
	Examples:
		|Title|FileIDField|FileIDValue|ShareToField|ShareToValue|EmptyField|EmptyValue|res_status|res_messageField|res_messageValue|
		|Happy Path|fileId|bb6a5208-30b1-4dbf-9105-056e0de17f15|shareTo|50|||200|message|Successfully Shared|
		|invalid fileId & valid userId|fileId|bb6a5208-30b1-4dbf-9105-056e0de17f|shareTo|50|||400|error|Invalid file id|
		|missing fileId & valid userId|fileId||shareTo|50|||400|error|missing file id|
		|valid fileId & invalid userId|fileId|bb6a5208-30b1-4dbf-9105-056e0de17f15|shareTo|1987654|||400|error|invalid user id|
		|valid fileId & missing userId|fileId|bb6a5208-30b1-4dbf-9105-056e0de17f15|shareTo||||400|error|missing user id|
		
@ignore
Scenario Outline: Share a file to another user - POST - <Title>
	Given I set endpoint to "data.props->BASE_URI" with "data.props->FILES_API"
	
	When I add query params "token=<User1_Token>" 
	And I invoke the API with POST multipart formData payload "fileId=<FileIDValue>, shareTo=<ShareToValue>, <EmptyField>=<EmptyValue>" 
	Then I verify the status code to be "<res_status>"
	And I verify the status message as "<res_message>"
	
	Examples:
		|Title|User1_Token|FileIDField|FileIDValue|ShareToField|ShareToValue|EmptyField|EmptyValue|res_status|res_message|
		|invalid token|5ecf9d76-e76c-4d2f-adca-38c12e406|fileId|bb6a5208-30b1-4dbf-9105-056e0de17f15|shareTo|50|||401|UNAUTHORIZED|
		|expired token|1a0c3e02-69fb-4064-8c07-496cc199987f|fileId|bb6a5208-30b1-4dbf-9105-056e0de17f|shareTo|50|||401|UNAUTHORIZED|


@ignore
Scenario Outline: Accept/Reject a file - PUT - <Title>
	Given I set endpoint to "data.props->BASE_URI" with "data.props->FILES_API"
	
	When I add token query param "token=data.props->USER2_TOKEN"
	And I invoke the API with PUT multipart formData payload "fileId=<FileIDValue>, shareTo=<ShareToValue>" 
	Then I verify the status code to be "<res_status>"
	And I verify the response contains "<res_messageField>=<res_messageValue>"
	
	Examples:
		|Title|FileIDField|FileIDValue|IsAcceptedField|IsAcceptedValue|res_status|res_messageField|res_messageValue|
		|Happy Path - Accept|fileId|bb6a5208-30b1-4dbf-9105-056e0de17f15|isAccepted|true|||200|message|file accepted|
		|Happy Path - Reject|fileId|bb6a5208-30b1-4dbf-9105-056e0de17f15|isAccepted|false|||200|message|file rejected|
		|invalid fileId & accept|fileId|bb6a5208-30b1-4dbf-9105-056e0de17f|isAccepted|true|400|error|Invalid file id|
		|missing fileId & accept|fileId||isAccepted|true|400|error|missing file id|
		|valid fileId & no action|fileId|bb6a5208-30b1-4dbf-9105-056e0de17f15|isAccepted||400|error|action required|
		|valid fileId & no action|fileId|bb6a5208-30b1-4dbf-9105-056e0de17f15|isAccepted||400|error|action required|
		
@ignore
Scenario Outline: Accept/Reject a file - PUT - <Title>
	Given I set endpoint to "data.props->BASE_URI" with "data.props->FILES_API"
	
	When I add query params "token=<User2_Token>"
	And I invoke the API with PUT multipart formData payload "fileId=<FileIDValue>, shareTo=<ShareToValue>" 
	Then I verify the status code to be "<res_status>"
	And I verify the status message as "<res_message>"
	
	Examples:
		|Title|User2_Token|FileIDField|FileIDValue|IsAcceptedField|IsAcceptedValue|res_status|res_message|
		|invalid token|5ecf9d76-e76c-4d2f-adca-38c12e406f|fileId|bb6a5208-30b1-4dbf-9105-056e0de17f15|isAccepted|true|401|UNAUTHORIZED|
		|expired token|5ecf9d76-e76c-4d2f-adca-38c12e406f36|fileId|bb6a5208-30b1-4dbf-9105-056e0de17f15|isAccepted|true|401|UNAUTHORIZED|
		|missing token||fileId|bb6a5208-30b1-4dbf-9105-056e0de17f15|isAccepted|true|401|UNAUTHORIZED|
		
		
@ignore
Scenario Outline: Get list of files - GET - <Title> 
	Given I set endpoint to "data.props->BASE_URI" with "data.props->FILES_API" 
	
	When I add token query param "token=data.props->USER1_TOKEN"
	And I add query params "<SharedFilesParam>=<SharedFilesValue>"
	And I invoke the API to GET details
	Then I verify the status code to be "<res_status>"
	And I verify the count to be greater than "<ExpFilesCount>"
	And I verify the json response contains "$.[1].status, $.[1].name, $.[1].fileHash"
	And I verify the json response contains "$.[1].createdOn, $.[1].bytesCompleted, $.[1].size, $.[1].fileId"
	
	Examples: 
		|Title|SharedFilesParam|SharedFilesValue|res_status|ExpFilesCount|
		|Happy path|getSharedFiles||200|15|
		|missing getSharedFiles value|getSharedFiles||200|15|
				
@ignore
Scenario Outline: Get list of files - GET - <Title> 
	Given I set endpoint to "data.props->BASE_URI" with "data.props->FILES_API" 
	
	When I add token query param "token=data.props->USER1_TOKEN"
	And I add query params "<SharedFilesParam>=<SharedFilesValue>"
	And I invoke the API to GET details
	Then I verify the status code to be "<res_status>"
	And I verify the count to be equal to "<ExpFilesCount>"
	
	Examples: 
		|Title|SharedFilesParam|SharedFilesValue|res_status|ExpFilesCount|	
		|getSharedFiles with valid file name|getSharedFiles|saravana|200|0|
		|getSharedFiles with invalid file name|getSharedFiles|unknown file|200|0|
		|getSharedFiles with unshared file|getSharedFiles|sarva|200|0|
		

@ignore		
Scenario Outline: Delete a file - DELETE - <Title>
	Given I set endpoint to "data.props->BASE_URI" with "data.props->FILES_API"
	
	When I add token query param "token=data.props->USER1_TOKEN"
	And I invoke the API with DELETE multipart formData payload "fileId=<FileIDFieldValue>"
	Then I verify the status code to be "<res_status>"
	And I verify the response contains "<res_messageField>=<res_messageValue>"
	
	Examples:
		|Title|FileIDField|FileIDFieldValue|res_status|res_messageField|res_messageValue|
		|Happy Path|fileId|21608921-7106-480e-bd3e-c5a882fd3bac|200|message|File deleted successfully|
		|invalid file id|fileId|21608921-7106-480e-bd3e-c5a882fd3b|400|error|invalid file id|
		|missing file id|fileId||400|error|File deleted successfully|
		|deleted file id|fileId|21608921-7106-480e-bd3e-c5a882fd3bac|400|message|file already deleted|

@ignore
Scenario Outline: Delete a file - DELETE - <Title>
	Given I set endpoint to "data.props->BASE_URI" with "data.props->FILES_API"
	
	When I add query params "token=<User1_Token>"
	And I invoke the API with DELETE multipart formData payload "fileId=<FileIDFieldValue>" 
	Then I verify the status code to be "<res_status>"
	And I verify the status message as "<res_message>"
	
	Examples:
		|Title|User1_Token|FileIDField|FileIDFieldValue|res_status|res_message|
		|invalid token|74ef7fe9-bfbe-433b-85a2-54be037c22|fileId|7e11fa14-a867-4cc2-9571-a03e981a6b1e|401|UNAUTHORIZED|
		|missing token||fileId|7e11fa14-a867-4cc2-9571-a03e981a6b1e|401|UNAUTHORIZED|
		|expired token|1a0c3e02-69fb-4064-8c07-496cc199987f|fileId|7e11fa14-a867-4cc2-9571-a03e981a6b1e|401|UNAUTHORIZED|
