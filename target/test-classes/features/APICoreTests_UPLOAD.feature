Feature: Testing ShareBox APIs - /api/upload

@watch
Scenario Outline: Uploading a new file to ShareBox - POST - Positive TCs - <Title> 
	Given I set endpoint to "data.props->BASE_URI" with "data.props->UPLOAD_API" 
	
	When I add token query param "token=data.props->USER1_TOKEN" 
	And I invoke the API with POST multipart formData payload "name=<NameValue>, size=<SizeValue>, hash=<HashValue>" 
	Then I verify the status code to be "<res_status>"
	And I verify the response to contain "fileId, accessKey, secretKey, sessionToken" 
	
	Examples: 
		| Title                                | NameField | NameValue | SizeField | SizeValue | HashField | HashValue | res_status | res_message | 
     	| Happy Path                           | name      | File1     | size      | 1200      | hash      | fds%67U8  | 200        |             | 
      	| with duplicate name, different hash  | name      | File1     | size      | 41589     | hash      | fds%67U18 | 200        |             | 
      	| with duplicate hash,  different name | name      | File12    | size      | 23658     | hash      | fds%67U8  | 200        |             | 
      	| with duplicate name, duplicate hash  | name      | File1     | size      | 145       | hash      | fds%67U8  | 200        |             | 
		
@watch
Scenario Outline: Uploading a new file to ShareBox - POST - Negative TCs - <Title> 
	Given I set endpoint to "data.props->BASE_URI" with "data.props->UPLOAD_API" 
	
	When I add query params "token=<Token>" 
	And I invoke the API with POST multipart formData payload "name=<NameValue>, size=<SizeValue>, hash=<HashValue>" 
	Then I verify the status code to be "<res_status>"
	And I verify the status message as "<res_message>"
	
	Examples:
		| Title              | Token                                | NameField | NameValue | SizeField | SizeValue | HashField | HashValue | res_status | res_message  | 
      	| without token      |                                      | name      | File2     | size      | 540       | hash      | fds%67U9  | 401        | UNAUTHORIZED | 
      	| with invalid token | 8920-84ab-48aa-841d-b54f776f06       | name      | File3     | size      | 16000     | hash      | fds%67U10 | 401        | UNAUTHORIZED | 
      	| with expired token | 8920f869-84ab-48aa-841d-b54f776f0ad6 | name      | File4     | size      | 5268      | hash      | fds%67U11 | 401        | UNAUTHORIZED |
		
@watch
Scenario Outline: Uploading a new file to ShareBox - POST - Missing field values - <Title> 
	Given I set endpoint to "data.props->BASE_URI" with "data.props->UPLOAD_API" 
	
	When I add token query param "token=data.props->USER1_TOKEN" 
	And I invoke the API with POST multipart formData payload "name=<NameValue>, size=<SizeValue>, hash=<HashValue>" 
	Then I verify the status code to be "<res_status>"
	And I verify the status message as "<res_message>"
	
	Examples:
		| Title              | NameField | NameValue | SizeField | SizeValue | HashField | HashValue | res_status | res_message | 
      	| without name value | name      |           | size      | 6258      | hash      | fds%67U15 | 400        | BAD REQUEST | 
      	| without size value | name      | File9     | size      |           | hash      | fds%67U16 | 400        | BAD REQUEST | 
      	| without hash value | name      | File10    | size      | 195896    | hash      |           | 400        | BAD REQUEST | 
      	| without name field | name1     |           | size      | 6258      | hash      | fds%67U15 | 400        | BAD REQUEST | 
      	| without size field | name      | File9     | size1     |           | hash      | fds%67U16 | 400        | BAD REQUEST | 
      	| without hash field | name      | File10    | size      | 195896    | hash1     |           | 400        | BAD REQUEST |
		

@watch
Scenario Outline: Get upload details of a file using fileId - GET - Positive TCs - <Title>
	Given I set endpoint to "data.props->BASE_URI" with "data.props->UPLOAD_API"
	
	When I add token query param "token=data.props->USER1_TOKEN"
	And I add query params "fileId=<FileID>"
	And I invoke the API to GET details
	Then I verify the status code to be "<res_code>"
	And I verify the response contains "fileId=<FileID>, status=<res_status>, name=<res_name>, fileHash=<res_hash>"
	And I verify the response contains "createdOn=<res_date>, bytesCompleted=<res_bytes>, size=<res_size>"
	
	Examples:
		| Title      | FileID                               | res_code | res_status | res_name    | res_hash    | res_date            | res_bytes | res_size | 
      	| Happy Path | bb6a5208-30b1-4dbf-9105-056e0de17f15 | 200      | Completed  | QUBE Cinema | agtb675Tgth | 2018-10-26 13:42:48 | 850       | 850      | 
      	| Valid file | 5f719553-49a7-4f4e-9239-af0af1af014c | 200      | Pending    | saravana    | avbgt56T    | 2018-10-27 11:11:57 | 0         | 80       |
	
@watch
Scenario Outline: Get upload details of a file using fileId - GET - Negative TCs - <Title>
	Given I set endpoint to "data.props->BASE_URI" with "data.props->UPLOAD_API"
	
	When I add token query param "token=data.props->USER1_TOKEN"
	And I add query params "<FileID_Field>=<FileID_Value>"
	And I invoke the API to GET details
	Then I verify the status code to be "<res_code>"
	
	Examples:
		| Title                | FileID_Field | FileID_Value                       | res_code | res_message           | 
      	| Invalid file Id      | fileId       | bb6a5208-30b1-4dbf-9105-056e0de115 | 500      | INTERNAL SERVER ERROR | 
      	| Missing fileId value | fileId       |                                    | 400      | BAD REQUEST           | 
      	| Missing fileId param | fileID       |                                    | 400      | BAD_REQUEST           | 
	
@watch	
Scenario Outline: Get upload details of a file using fileId - GET - Negative TCs - <Title>
	Given I set endpoint to "data.props->BASE_URI" with "data.props->UPLOAD_API"
	
	When I add query params "token=<Token>, fileId=<FileID>"
	And I invoke the API to GET details
	Then I verify the status code to be "<res_code>"
	
	Examples:
		| Title         | Token                                | FileID                               | res_code | res_message  | 
      	| Invalid token | da4d-ffa5-4e1f-b07c-8f2dcbd          | 5f719553-49a7-4f4e-9239-af0af1af014c | 401      | UNAUTHORIZED | 
      	| Missing token |                                      | 5f719553-49a7-4f4e-9239-af0af1af014c | 401      | UNAUTHORIZED | 
      	| Expired token | 1a0c3e02-69fb-4064-8c07-496cc199987f | 1a0c3e02-69fb-4064-8c07-496cc199987f | 401      | UNAUTHORIZED |
	

@watch
Scenario Outline: Updating upload details of a file - PUT - Positive TCs - <Title> 
	Given I set endpoint to "data.props->BASE_URI" with "data.props->UPLOAD_API" 
	
	When I add token query param "token=data.props->USER1_TOKEN" 
	And I invoke the API with PUT multipart formData payload "<FileIDField>=<FileIDValue>, <BytesField>=<BytesValue>" 
	Then I verify the status code to be "<res_status>"
	And I verify the response contains "<res_messageField>=<res_messageValue>"
	
	Examples: 
		| Title                              | FileIDField | FileIDValue                          | BytesField     | BytesValue | res_status | res_messageField | res_messageValue                    | 
      	| Happy Path                         | fileId      | e5d8e850-c872-41b9-af2d-a009ecf36724 | bytesCompleted | 300        | 200        | message          | Bytes has been updated successfully | 
      	| bytesCompleted value < file size   | fileId      | e5d8e850-c872-41b9-af2d-a009ecf36724 | bytesCompleted | 100        | 200        | message          | Bytes has been updated successfully | 
      	| bytesCompleted value = file size   | fileId      | e5d8e850-c872-41b9-af2d-a009ecf36724 | bytesCompleted | 300        | 200        | message          | Bytes has been updated successfully | 
      	| bytesCompleted as negative integer | fileId      | e5d8e850-c872-41b9-af2d-a009ecf36724 | bytesCompleted | -128       | 400        | message          | BAD REQUEST                         | 
      	| bytesCompleted value > file size   | fileId      | e5d8e850-c872-41b9-af2d-a009ecf36724 | bytesCompleted | 320        | 400        | error            | is greater than file size           |
		
@watch
Scenario Outline: Updating upload details of a file - PUT - Negative TCs - <Title> 
	Given I set endpoint to "data.props->BASE_URI" with "data.props->UPLOAD_API" 
	
	When I add token query param "token=data.props->USER1_TOKEN" 
	And I invoke the API with PUT multipart formData payload "<FileIDField>=<FileIDValue>, <BytesField>=<BytesValue>" 
	Then I verify the status code to be "<res_status>"
	And I verify the status message as "<res_message>"
	
	Examples: 
		| Title                           | FileIDField | FileIDValue                          | BytesField     | BytesValue | res_status | res_message           | 
      	| bytesCompleted as decimal value | fileId      | e5d8e850-c872-41b9-af2d-a009ecf36724 | bytesCompleted | 250.67     | 500        | INTERNAL SERVER ERROR | 
      	| bytesCompleted as string value  | fileId      | e5d8e850-c872-41b9-af2d-a009ecf36724 | bytesCompleted | forty      | 500        | INTERNAL SERVER ERROR | 
      	| invalid file id                 | fileId      | e5d8e850-c872-41b9-af2d-a009ecf3672  | bytesCompleted | 185        | 500        | INTERNAL SERVER ERROR | 
      	| without fileId value            | fileId      |                                      | bytesCompleted | 180        | 500        | INTERNAL SERVER ERROR | 
      	| without bytesCompleted value    | fileId      | e5d8e850-c872-41b9-af2d-a009ecf36724 | bytesCompleted |            | 500        | INTERNAL SERVER ERROR |
		
@watch
Scenario Outline: Updating upload details of a file - PUT - Negative TCs - <Title> 
	Given I set endpoint to "data.props->BASE_URI" with "data.props->UPLOAD_API" 
	
	When I add token query param "token=data.props->USER1_TOKEN" 
	And I invoke the API with PUT multipart formData payload "<FileIDField>=<FileIDValue>, <BytesField>=<BytesValue>" 
	Then I verify the status code to be "<res_status>"
	And I verify the status message as "<res_message>"
	
	Examples: 
		| Title                        | FileIDField | FileIDValue                          | BytesField      | BytesValue | res_status | res_message | 
      	| without fileId field         | fileId1     | e5d8e850-c872-41b9-af2d-a009ecf36724 | bytesCompleted  | 300        | 400        | BAD REQUEST | 
      	| without bytesCompleted field | fileId      | e5d8e850-c872-41b9-af2d-a009ecf36724 | bytesCompleted1 | 240        | 400        | BAD REQUEST | 		
		
@watch
Scenario Outline: Updating upload details of a file - PUT - Negative TCs - <Title> 
	Given I set endpoint to "data.props->BASE_URI" with "data.props->UPLOAD_API" 
	
	When I add query params "token=<Token>" 
	And I invoke the API with PUT multipart formData payload "<FileIDField>=<FileIDValue>, <BytesField>=<BytesValue>" 
	Then I verify the status code to be "<res_status>"
	And I verify the status message as "<res_message>"		
	
	Examples:	
		| Title         | Token                                | FileIDField | FileIDValue                          | BytesField     | BytesValue | res_status | res_message  | 
      	| missing token |                                      | fileId      | e5d8e850-c872-41b9-af2d-a009ecf36724 | bytesCompleted | 300        | 401        | UNAUTHORIZED | 
      	| invalid token | 0fd989c7-c2fc-4fb2-8ec7-6d5eb979762  | fileId      | e5d8e850-c872-41b9-af2d-a009ecf36724 | bytesCompleted | 300        | 401        | UNAUTHORIZED | 
      	| invalid token | 1a0c3e02-69fb-4064-8c07-496cc199987f | fileId      | e5d8e850-c872-41b9-af2d-a009ecf36724 | bytesCompleted | 300        | 401        | UNAUTHORIZED |

	