$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("APICoreTests_FILES.feature");
formatter.feature({
  "line": 1,
  "name": "Testing ShareBox APIs - /api/files",
  "description": "",
  "id": "testing-sharebox-apis---/api/files",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Share a file to another user - POST - \u003cTitle\u003e",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;share-a-file-to-another-user---post---\u003ctitle\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I invoke the API with POST multipart formData payload \"fileId\u003d\u003cFileIDValue\u003e, shareTo\u003d\u003cShareToValue\u003e, \u003cEmptyField\u003e\u003d\u003cEmptyValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify the status code to be \"\u003cres_status\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verify the response contains \"\u003cres_messageField\u003e\u003d\u003cres_messageValue\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;share-a-file-to-another-user---post---\u003ctitle\u003e;",
  "rows": [
    {
      "cells": [
        "Title",
        "FileIDField",
        "FileIDValue",
        "ShareToField",
        "ShareToValue",
        "EmptyField",
        "EmptyValue",
        "res_status",
        "res_messageField",
        "res_messageValue"
      ],
      "line": 13,
      "id": "testing-sharebox-apis---/api/files;share-a-file-to-another-user---post---\u003ctitle\u003e;;1"
    },
    {
      "cells": [
        "Happy Path",
        "fileId",
        "bb6a5208-30b1-4dbf-9105-056e0de17f15",
        "shareTo",
        "50",
        "",
        "",
        "200",
        "message",
        "Successfully Shared"
      ],
      "line": 14,
      "id": "testing-sharebox-apis---/api/files;share-a-file-to-another-user---post---\u003ctitle\u003e;;2"
    },
    {
      "cells": [
        "invalid fileId \u0026 valid userId",
        "fileId",
        "bb6a5208-30b1-4dbf-9105-056e0de17f",
        "shareTo",
        "50",
        "",
        "",
        "400",
        "error",
        "Invalid file id"
      ],
      "line": 15,
      "id": "testing-sharebox-apis---/api/files;share-a-file-to-another-user---post---\u003ctitle\u003e;;3"
    },
    {
      "cells": [
        "missing fileId \u0026 valid userId",
        "fileId",
        "",
        "shareTo",
        "50",
        "",
        "",
        "400",
        "error",
        "missing file id"
      ],
      "line": 16,
      "id": "testing-sharebox-apis---/api/files;share-a-file-to-another-user---post---\u003ctitle\u003e;;4"
    },
    {
      "cells": [
        "valid fileId \u0026 invalid userId",
        "fileId",
        "bb6a5208-30b1-4dbf-9105-056e0de17f15",
        "shareTo",
        "1987654",
        "",
        "",
        "400",
        "error",
        "invalid user id"
      ],
      "line": 17,
      "id": "testing-sharebox-apis---/api/files;share-a-file-to-another-user---post---\u003ctitle\u003e;;5"
    },
    {
      "cells": [
        "valid fileId \u0026 missing userId",
        "fileId",
        "bb6a5208-30b1-4dbf-9105-056e0de17f15",
        "shareTo",
        "",
        "",
        "",
        "400",
        "error",
        "missing user id"
      ],
      "line": 18,
      "id": "testing-sharebox-apis---/api/files;share-a-file-to-another-user---post---\u003ctitle\u003e;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Share a file to another user - POST - Happy Path",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;share-a-file-to-another-user---post---\u003ctitle\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I invoke the API with POST multipart formData payload \"fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d50, \u003d\"",
  "matchedColumns": [
    2,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify the status code to be \"200\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verify the response contains \"message\u003dSuccessfully Shared\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 135036903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 451210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d50, \u003d",
      "offset": 55
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataPayload(String)"
});
formatter.result({
  "duration": 2052927403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 1918111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "message\u003dSuccessfully Shared",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "duration": 323443734,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Share a file to another user - POST - invalid fileId \u0026 valid userId",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;share-a-file-to-another-user---post---\u003ctitle\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I invoke the API with POST multipart formData payload \"fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f, shareTo\u003d50, \u003d\"",
  "matchedColumns": [
    2,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verify the response contains \"error\u003dInvalid file id\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 404011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 279033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f, shareTo\u003d50, \u003d",
      "offset": 55
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataPayload(String)"
});
formatter.result({
  "duration": 266562681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 538053,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[4]00\u003e but was:\u003c[2]00\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.qube.test.StepDefCore.verifyStatusCode(StepDefCore.java:135)\r\n\tat ✽.Then I verify the status code to be \"400\"(APICoreTests_FILES.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "error\u003dInvalid file id",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Share a file to another user - POST - missing fileId \u0026 valid userId",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;share-a-file-to-another-user---post---\u003ctitle\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I invoke the API with POST multipart formData payload \"fileId\u003d, shareTo\u003d50, \u003d\"",
  "matchedColumns": [
    2,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verify the response contains \"error\u003dmissing file id\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 394572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 250714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003d, shareTo\u003d50, \u003d",
      "offset": 55
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataPayload(String)"
});
formatter.result({
  "duration": 192789036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 313015,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[4]00\u003e but was:\u003c[2]00\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.qube.test.StepDefCore.verifyStatusCode(StepDefCore.java:135)\r\n\tat ✽.Then I verify the status code to be \"400\"(APICoreTests_FILES.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "error\u003dmissing file id",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Share a file to another user - POST - valid fileId \u0026 invalid userId",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;share-a-file-to-another-user---post---\u003ctitle\u003e;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I invoke the API with POST multipart formData payload \"fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d1987654, \u003d\"",
  "matchedColumns": [
    2,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verify the response contains \"error\u003dinvalid user id\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 415717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 319056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d1987654, \u003d",
      "offset": 55
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataPayload(String)"
});
formatter.result({
  "duration": 212806110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 189546,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[4]00\u003e but was:\u003c[2]00\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.qube.test.StepDefCore.verifyStatusCode(StepDefCore.java:135)\r\n\tat ✽.Then I verify the status code to be \"400\"(APICoreTests_FILES.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "error\u003dinvalid user id",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "Share a file to another user - POST - valid fileId \u0026 missing userId",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;share-a-file-to-another-user---post---\u003ctitle\u003e;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I invoke the API with POST multipart formData payload \"fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d, \u003d\"",
  "matchedColumns": [
    2,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verify the response contains \"error\u003dmissing user id\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 305463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 266572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d, \u003d",
      "offset": 55
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataPayload(String)"
});
formatter.result({
  "duration": 268324851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 308484,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[4]00\u003e but was:\u003c[5]00\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.qube.test.StepDefCore.verifyStatusCode(StepDefCore.java:135)\r\n\tat ✽.Then I verify the status code to be \"400\"(APICoreTests_FILES.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "error\u003dmissing user id",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Share a file to another user - POST - \u003cTitle\u003e",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;share-a-file-to-another-user---post---\u003ctitle\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I add query params \"token\u003d\u003cUser1_Token\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I invoke the API with POST multipart formData payload \"fileId\u003d\u003cFileIDValue\u003e, shareTo\u003d\u003cShareToValue\u003e, \u003cEmptyField\u003e\u003d\u003cEmptyValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify the status code to be \"\u003cres_status\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I verify the status message as \"\u003cres_message\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;share-a-file-to-another-user---post---\u003ctitle\u003e;",
  "rows": [
    {
      "cells": [
        "Title",
        "User1_Token",
        "FileIDField",
        "FileIDValue",
        "ShareToField",
        "ShareToValue",
        "EmptyField",
        "EmptyValue",
        "res_status",
        "res_message"
      ],
      "line": 30,
      "id": "testing-sharebox-apis---/api/files;share-a-file-to-another-user---post---\u003ctitle\u003e;;1"
    },
    {
      "cells": [
        "invalid token",
        "5ecf9d76-e76c-4d2f-adca-38c12e406",
        "fileId",
        "bb6a5208-30b1-4dbf-9105-056e0de17f15",
        "shareTo",
        "50",
        "",
        "",
        "401",
        "UNAUTHORIZED"
      ],
      "line": 31,
      "id": "testing-sharebox-apis---/api/files;share-a-file-to-another-user---post---\u003ctitle\u003e;;2"
    },
    {
      "cells": [
        "expired token",
        "1a0c3e02-69fb-4064-8c07-496cc199987f",
        "fileId",
        "bb6a5208-30b1-4dbf-9105-056e0de17f",
        "shareTo",
        "50",
        "",
        "",
        "401",
        "UNAUTHORIZED"
      ],
      "line": 32,
      "id": "testing-sharebox-apis---/api/files;share-a-file-to-another-user---post---\u003ctitle\u003e;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "Share a file to another user - POST - invalid token",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;share-a-file-to-another-user---post---\u003ctitle\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I add query params \"token\u003d5ecf9d76-e76c-4d2f-adca-38c12e406\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I invoke the API with POST multipart formData payload \"fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d50, \u003d\"",
  "matchedColumns": [
    3,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify the status code to be \"401\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I verify the status message as \"UNAUTHORIZED\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 383622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003d5ecf9d76-e76c-4d2f-adca-38c12e406",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 80425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d50, \u003d",
      "offset": 55
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataPayload(String)"
});
formatter.result({
  "duration": 187320154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 45688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UNAUTHORIZED",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "duration": 74761,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Share a file to another user - POST - expired token",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;share-a-file-to-another-user---post---\u003ctitle\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I add query params \"token\u003d1a0c3e02-69fb-4064-8c07-496cc199987f\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I invoke the API with POST multipart formData payload \"fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f, shareTo\u003d50, \u003d\"",
  "matchedColumns": [
    3,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify the status code to be \"401\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I verify the status message as \"UNAUTHORIZED\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 394572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003d1a0c3e02-69fb-4064-8c07-496cc199987f",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 105723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f, shareTo\u003d50, \u003d",
      "offset": 55
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataPayload(String)"
});
formatter.result({
  "duration": 186265948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 41534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UNAUTHORIZED",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "duration": 85711,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "Accept/Reject a file - PUT - \u003cTitle\u003e",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER2_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003d\u003cFileIDValue\u003e, shareTo\u003d\u003cShareToValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I verify the status code to be \"\u003cres_status\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I verify the response contains \"\u003cres_messageField\u003e\u003d\u003cres_messageValue\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;",
  "rows": [
    {
      "cells": [
        "Title",
        "FileIDField",
        "FileIDValue",
        "IsAcceptedField",
        "IsAcceptedValue",
        "res_status",
        "res_messageField",
        "res_messageValue"
      ],
      "line": 45,
      "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;;1"
    },
    {
      "cells": [
        "Happy Path - Accept",
        "fileId",
        "bb6a5208-30b1-4dbf-9105-056e0de17f15",
        "isAccepted",
        "true",
        "",
        "",
        "200",
        "message",
        "file accepted"
      ],
      "line": 46,
      "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;;2"
    },
    {
      "cells": [
        "Happy Path - Reject",
        "fileId",
        "bb6a5208-30b1-4dbf-9105-056e0de17f15",
        "isAccepted",
        "false",
        "",
        "",
        "200",
        "message",
        "file rejected"
      ],
      "line": 47,
      "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;;3"
    },
    {
      "cells": [
        "invalid fileId \u0026 accept",
        "fileId",
        "bb6a5208-30b1-4dbf-9105-056e0de17f",
        "isAccepted",
        "true",
        "400",
        "error",
        "Invalid file id"
      ],
      "line": 48,
      "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;;4"
    },
    {
      "cells": [
        "missing fileId \u0026 accept",
        "fileId",
        "",
        "isAccepted",
        "true",
        "400",
        "error",
        "missing file id"
      ],
      "line": 49,
      "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;;5"
    },
    {
      "cells": [
        "valid fileId \u0026 no action",
        "fileId",
        "bb6a5208-30b1-4dbf-9105-056e0de17f15",
        "isAccepted",
        "",
        "400",
        "error",
        "action required"
      ],
      "line": 50,
      "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;;6"
    },
    {
      "cells": [
        "valid fileId \u0026 no action",
        "fileId",
        "bb6a5208-30b1-4dbf-9105-056e0de17f15",
        "isAccepted",
        "",
        "400",
        "error",
        "action required"
      ],
      "line": 51,
      "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 46,
  "name": "Accept/Reject a file - PUT - Happy Path - Accept",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER2_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d\u003cShareToValue\u003e\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I verify the status code to be \"\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I verify the response contains \"\u003d200\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 392307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER2_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 281298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d\u003cShareToValue\u003e",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 202191555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 279033,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[]\u003e but was:\u003c[400]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.qube.test.StepDefCore.verifyStatusCode(StepDefCore.java:135)\r\n\tat ✽.Then I verify the status code to be \"\"(APICoreTests_FILES.feature:41)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003d200",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 47,
  "name": "Accept/Reject a file - PUT - Happy Path - Reject",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER2_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d\u003cShareToValue\u003e\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I verify the status code to be \"\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I verify the response contains \"\u003d200\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 589026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER2_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 189168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d\u003cShareToValue\u003e",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 258036149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 161227,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[]\u003e but was:\u003c[400]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.qube.test.StepDefCore.verifyStatusCode(StepDefCore.java:135)\r\n\tat ✽.Then I verify the status code to be \"\"(APICoreTests_FILES.feature:41)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003d200",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 48,
  "name": "Accept/Reject a file - PUT - invalid fileId \u0026 accept",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER2_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f, shareTo\u003d\u003cShareToValue\u003e\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I verify the response contains \"error\u003dInvalid file id\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 359835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER2_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 325852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f, shareTo\u003d\u003cShareToValue\u003e",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 203236699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 41534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "error\u003dInvalid file id",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "duration": 6796079,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat com.qube.test.StepDefCore.i_verify_the_response_contains(StepDefCore.java:159)\r\n\tat ✽.And I verify the response contains \"error\u003dInvalid file id\"(APICoreTests_FILES.feature:42)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 49,
  "name": "Accept/Reject a file - PUT - missing fileId \u0026 accept",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER2_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003d, shareTo\u003d\u003cShareToValue\u003e\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I verify the response contains \"error\u003dmissing file id\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 376071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER2_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 278655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003d, shareTo\u003d\u003cShareToValue\u003e",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 200173008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 46065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "error\u003dmissing file id",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "duration": 6705460,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat com.qube.test.StepDefCore.i_verify_the_response_contains(StepDefCore.java:159)\r\n\tat ✽.And I verify the response contains \"error\u003dmissing file id\"(APICoreTests_FILES.feature:42)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 50,
  "name": "Accept/Reject a file - PUT - valid fileId \u0026 no action",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER2_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d\u003cShareToValue\u003e\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I verify the response contains \"error\u003daction required\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 373049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER2_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 195587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d\u003cShareToValue\u003e",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 254220694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 80047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "error\u003daction required",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "duration": 14507413,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat com.qube.test.StepDefCore.i_verify_the_response_contains(StepDefCore.java:159)\r\n\tat ✽.And I verify the response contains \"error\u003daction required\"(APICoreTests_FILES.feature:42)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 51,
  "name": "Accept/Reject a file - PUT - valid fileId \u0026 no action",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER2_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d\u003cShareToValue\u003e\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I verify the response contains \"error\u003daction required\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 698148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER2_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 326230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d\u003cShareToValue\u003e",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 199475238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 62301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "error\u003daction required",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "duration": 6411701,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat com.qube.test.StepDefCore.i_verify_the_response_contains(StepDefCore.java:159)\r\n\tat ✽.And I verify the response contains \"error\u003daction required\"(APICoreTests_FILES.feature:42)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "Accept/Reject a file - PUT - \u003cTitle\u003e",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "I add query params \"token\u003d\u003cUser2_Token\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003d\u003cFileIDValue\u003e, shareTo\u003d\u003cShareToValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I verify the status code to be \"\u003cres_status\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "I verify the status message as \"\u003cres_message\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 62,
  "name": "",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;",
  "rows": [
    {
      "cells": [
        "Title",
        "User2_Token",
        "FileIDField",
        "FileIDValue",
        "IsAcceptedField",
        "IsAcceptedValue",
        "res_status",
        "res_message"
      ],
      "line": 63,
      "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;;1"
    },
    {
      "cells": [
        "invalid token",
        "5ecf9d76-e76c-4d2f-adca-38c12e406f",
        "fileId",
        "bb6a5208-30b1-4dbf-9105-056e0de17f15",
        "isAccepted",
        "true",
        "401",
        "UNAUTHORIZED"
      ],
      "line": 64,
      "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;;2"
    },
    {
      "cells": [
        "expired token",
        "5ecf9d76-e76c-4d2f-adca-38c12e406f36",
        "fileId",
        "bb6a5208-30b1-4dbf-9105-056e0de17f15",
        "isAccepted",
        "true",
        "401",
        "UNAUTHORIZED"
      ],
      "line": 65,
      "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;;3"
    },
    {
      "cells": [
        "missing token",
        "",
        "fileId",
        "bb6a5208-30b1-4dbf-9105-056e0de17f15",
        "isAccepted",
        "true",
        "401",
        "UNAUTHORIZED"
      ],
      "line": 66,
      "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 64,
  "name": "Accept/Reject a file - PUT - invalid token",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "I add query params \"token\u003d5ecf9d76-e76c-4d2f-adca-38c12e406f\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d\u003cShareToValue\u003e\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I verify the status code to be \"401\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "I verify the status message as \"UNAUTHORIZED\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 445923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003d5ecf9d76-e76c-4d2f-adca-38c12e406f",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 67964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d\u003cShareToValue\u003e",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 246208804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 48708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UNAUTHORIZED",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "duration": 63056,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Accept/Reject a file - PUT - expired token",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "I add query params \"token\u003d5ecf9d76-e76c-4d2f-adca-38c12e406f36\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d\u003cShareToValue\u003e\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I verify the status code to be \"401\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "I verify the status message as \"UNAUTHORIZED\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 379091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003d5ecf9d76-e76c-4d2f-adca-38c12e406f36",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 88354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d\u003cShareToValue\u003e",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 213759879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 41911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UNAUTHORIZED",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "duration": 44554,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Accept/Reject a file - PUT - missing token",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;accept/reject-a-file---put---\u003ctitle\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "I add query params \"token\u003d\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d\u003cShareToValue\u003e\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I verify the status code to be \"401\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "I verify the status message as \"UNAUTHORIZED\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 920543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003d",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 92884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, shareTo\u003d\u003cShareToValue\u003e",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 196029057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 169156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UNAUTHORIZED",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "duration": 47198,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 70,
  "name": "Get list of files - GET - \u003cTitle\u003e",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;get-list-of-files---get---\u003ctitle\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 69,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I add query params \"\u003cSharedFilesParam\u003e\u003d\u003cSharedFilesValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I invoke the API to GET details",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I verify the status code to be \"\u003cres_status\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "I verify the count to be greater than \"\u003cExpFilesCount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I verify the json response contains \"$.[1].status, $.[1].name, $.[1].fileHash\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I verify the json response contains \"$.[1].createdOn, $.[1].bytesCompleted, $.[1].size, $.[1].fileId\"",
  "keyword": "And "
});
formatter.examples({
  "line": 81,
  "name": "",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;get-list-of-files---get---\u003ctitle\u003e;",
  "rows": [
    {
      "cells": [
        "Title",
        "SharedFilesParam",
        "SharedFilesValue",
        "res_status",
        "ExpFilesCount"
      ],
      "line": 82,
      "id": "testing-sharebox-apis---/api/files;get-list-of-files---get---\u003ctitle\u003e;;1"
    },
    {
      "cells": [
        "Happy path",
        "getSharedFiles",
        "",
        "200",
        "15"
      ],
      "line": 83,
      "id": "testing-sharebox-apis---/api/files;get-list-of-files---get---\u003ctitle\u003e;;2"
    },
    {
      "cells": [
        "missing getSharedFiles value",
        "getSharedFiles",
        "",
        "200",
        "15"
      ],
      "line": 84,
      "id": "testing-sharebox-apis---/api/files;get-list-of-files---get---\u003ctitle\u003e;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 83,
  "name": "Get list of files - GET - Happy path",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;get-list-of-files---get---\u003ctitle\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 69,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I add query params \"getSharedFiles\u003d\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I invoke the API to GET details",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I verify the status code to be \"200\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "I verify the count to be greater than \"15\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I verify the json response contains \"$.[1].status, $.[1].name, $.[1].fileHash\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I verify the json response contains \"$.[1].createdOn, $.[1].bytesCompleted, $.[1].size, $.[1].fileId\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 515775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 173687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getSharedFiles\u003d",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 60791,
  "status": "passed"
});
formatter.match({
  "location": "StepDefCore.i_invoke_the_API_with_GET_details()"
});
formatter.result({
  "duration": 261752300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 54372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 39
    }
  ],
  "location": "StepDefCore.i_verify_the_count_greater_than(String)"
});
formatter.result({
  "duration": 55089810,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat com.qube.test.StepDefCore.i_verify_the_count_greater_than(StepDefCore.java:175)\r\n\tat ✽.And I verify the count to be greater than \"15\"(APICoreTests_FILES.feature:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.[1].status, $.[1].name, $.[1].fileHash",
      "offset": 37
    }
  ],
  "location": "StepDefCore.i_verify_the_responses_contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$.[1].createdOn, $.[1].bytesCompleted, $.[1].size, $.[1].fileId",
      "offset": 37
    }
  ],
  "location": "StepDefCore.i_verify_the_responses_contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 84,
  "name": "Get list of files - GET - missing getSharedFiles value",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;get-list-of-files---get---\u003ctitle\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 69,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I add query params \"getSharedFiles\u003d\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I invoke the API to GET details",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I verify the status code to be \"200\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "I verify the count to be greater than \"15\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I verify the json response contains \"$.[1].status, $.[1].name, $.[1].fileHash\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I verify the json response contains \"$.[1].createdOn, $.[1].bytesCompleted, $.[1].size, $.[1].fileId\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 280543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 172932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getSharedFiles\u003d",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 45688,
  "status": "passed"
});
formatter.match({
  "location": "StepDefCore.i_invoke_the_API_with_GET_details()"
});
formatter.result({
  "duration": 225006504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 37003,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 39
    }
  ],
  "location": "StepDefCore.i_verify_the_count_greater_than(String)"
});
formatter.result({
  "duration": 615079,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat com.qube.test.StepDefCore.i_verify_the_count_greater_than(StepDefCore.java:175)\r\n\tat ✽.And I verify the count to be greater than \"15\"(APICoreTests_FILES.feature:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.[1].status, $.[1].name, $.[1].fileHash",
      "offset": 37
    }
  ],
  "location": "StepDefCore.i_verify_the_responses_contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$.[1].createdOn, $.[1].bytesCompleted, $.[1].size, $.[1].fileId",
      "offset": 37
    }
  ],
  "location": "StepDefCore.i_verify_the_responses_contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 87,
  "name": "Get list of files - GET - \u003cTitle\u003e",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;get-list-of-files---get---\u003ctitle\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 86,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 88,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "I add query params \"\u003cSharedFilesParam\u003e\u003d\u003cSharedFilesValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I invoke the API to GET details",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I verify the status code to be \"\u003cres_status\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "I verify the count to be equal to \"\u003cExpFilesCount\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 96,
  "name": "",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;get-list-of-files---get---\u003ctitle\u003e;",
  "rows": [
    {
      "cells": [
        "Title",
        "SharedFilesParam",
        "SharedFilesValue",
        "res_status",
        "ExpFilesCount"
      ],
      "line": 97,
      "id": "testing-sharebox-apis---/api/files;get-list-of-files---get---\u003ctitle\u003e;;1"
    },
    {
      "cells": [
        "getSharedFiles with valid file name",
        "getSharedFiles",
        "saravana",
        "200",
        "0"
      ],
      "line": 98,
      "id": "testing-sharebox-apis---/api/files;get-list-of-files---get---\u003ctitle\u003e;;2"
    },
    {
      "cells": [
        "getSharedFiles with invalid file name",
        "getSharedFiles",
        "unknown file",
        "200",
        "0"
      ],
      "line": 99,
      "id": "testing-sharebox-apis---/api/files;get-list-of-files---get---\u003ctitle\u003e;;3"
    },
    {
      "cells": [
        "getSharedFiles with unshared file",
        "getSharedFiles",
        "sarva",
        "200",
        "0"
      ],
      "line": 100,
      "id": "testing-sharebox-apis---/api/files;get-list-of-files---get---\u003ctitle\u003e;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 98,
  "name": "Get list of files - GET - getSharedFiles with valid file name",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;get-list-of-files---get---\u003ctitle\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 86,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 88,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "I add query params \"getSharedFiles\u003dsaravana\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I invoke the API to GET details",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I verify the status code to be \"200\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "I verify the count to be equal to \"0\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 411186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 228059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getSharedFiles\u003dsaravana",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 97416,
  "status": "passed"
});
formatter.match({
  "location": "StepDefCore.i_invoke_the_API_with_GET_details()"
});
formatter.result({
  "duration": 201753939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 38136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 35
    }
  ],
  "location": "StepDefCore.i_verify_the_count_equal_to(String)"
});
formatter.result({
  "duration": 256378,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "Get list of files - GET - getSharedFiles with invalid file name",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;get-list-of-files---get---\u003ctitle\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 86,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 88,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "I add query params \"getSharedFiles\u003dunknown file\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I invoke the API to GET details",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I verify the status code to be \"200\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "I verify the count to be equal to \"0\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 291870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 248070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getSharedFiles\u003dunknown file",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 69475,
  "status": "passed"
});
formatter.match({
  "location": "StepDefCore.i_invoke_the_API_with_GET_details()"
});
formatter.result({
  "duration": 257952704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 84200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 35
    }
  ],
  "location": "StepDefCore.i_verify_the_count_equal_to(String)"
});
formatter.result({
  "duration": 280165,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "Get list of files - GET - getSharedFiles with unshared file",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;get-list-of-files---get---\u003ctitle\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 86,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 88,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "I add query params \"getSharedFiles\u003dsarva\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I invoke the API to GET details",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I verify the status code to be \"200\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "I verify the count to be equal to \"0\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 348507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 538430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getSharedFiles\u003dsarva",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 74761,
  "status": "passed"
});
formatter.match({
  "location": "StepDefCore.i_invoke_the_API_with_GET_details()"
});
formatter.result({
  "duration": 271796330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 63434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 35
    }
  ],
  "location": "StepDefCore.i_verify_the_count_equal_to(String)"
});
formatter.result({
  "duration": 237499,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 104,
  "name": "Delete a file - DELETE - \u003cTitle\u003e",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;delete-a-file---delete---\u003ctitle\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 107,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "I invoke the API with DELETE multipart formData payload \"fileId\u003d\u003cFileIDFieldValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I verify the status code to be \"\u003cres_status\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "I verify the response contains \"\u003cres_messageField\u003e\u003d\u003cres_messageValue\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 112,
  "name": "",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;delete-a-file---delete---\u003ctitle\u003e;",
  "rows": [
    {
      "cells": [
        "Title",
        "FileIDField",
        "FileIDFieldValue",
        "res_status",
        "res_messageField",
        "res_messageValue"
      ],
      "line": 113,
      "id": "testing-sharebox-apis---/api/files;delete-a-file---delete---\u003ctitle\u003e;;1"
    },
    {
      "cells": [
        "Happy Path",
        "fileId",
        "21608921-7106-480e-bd3e-c5a882fd3bac",
        "200",
        "message",
        "File deleted successfully"
      ],
      "line": 114,
      "id": "testing-sharebox-apis---/api/files;delete-a-file---delete---\u003ctitle\u003e;;2"
    },
    {
      "cells": [
        "invalid file id",
        "fileId",
        "21608921-7106-480e-bd3e-c5a882fd3b",
        "400",
        "error",
        "invalid file id"
      ],
      "line": 115,
      "id": "testing-sharebox-apis---/api/files;delete-a-file---delete---\u003ctitle\u003e;;3"
    },
    {
      "cells": [
        "missing file id",
        "fileId",
        "",
        "400",
        "error",
        "File deleted successfully"
      ],
      "line": 116,
      "id": "testing-sharebox-apis---/api/files;delete-a-file---delete---\u003ctitle\u003e;;4"
    },
    {
      "cells": [
        "deleted file id",
        "fileId",
        "21608921-7106-480e-bd3e-c5a882fd3bac",
        "400",
        "message",
        "file already deleted"
      ],
      "line": 117,
      "id": "testing-sharebox-apis---/api/files;delete-a-file---delete---\u003ctitle\u003e;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 114,
  "name": "Delete a file - DELETE - Happy Path",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;delete-a-file---delete---\u003ctitle\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 107,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "I invoke the API with DELETE multipart formData payload \"fileId\u003d21608921-7106-480e-bd3e-c5a882fd3bac\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I verify the status code to be \"200\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "I verify the response contains \"message\u003dFile deleted successfully\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 368896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 251469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003d21608921-7106-480e-bd3e-c5a882fd3bac",
      "offset": 57
    }
  ],
  "location": "StepDefCore.i_invoke_the_API_with_DELETE_formData_payload(String)"
});
formatter.result({
  "duration": 286068511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 44932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "message\u003dFile deleted successfully",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "duration": 6582746,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "Delete a file - DELETE - invalid file id",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;delete-a-file---delete---\u003ctitle\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 107,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "I invoke the API with DELETE multipart formData payload \"fileId\u003d21608921-7106-480e-bd3e-c5a882fd3b\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "I verify the response contains \"error\u003dinvalid file id\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 420625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 213711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003d21608921-7106-480e-bd3e-c5a882fd3b",
      "offset": 57
    }
  ],
  "location": "StepDefCore.i_invoke_the_API_with_DELETE_formData_payload(String)"
});
formatter.result({
  "duration": 257856420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 329628,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[4]00\u003e but was:\u003c[5]00\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.qube.test.StepDefCore.verifyStatusCode(StepDefCore.java:135)\r\n\tat ✽.Then I verify the status code to be \"400\"(APICoreTests_FILES.feature:109)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "error\u003dinvalid file id",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 116,
  "name": "Delete a file - DELETE - missing file id",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;delete-a-file---delete---\u003ctitle\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 107,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "I invoke the API with DELETE multipart formData payload \"fileId\u003d\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "I verify the response contains \"error\u003dFile deleted successfully\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 746100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 454608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003d",
      "offset": 57
    }
  ],
  "location": "StepDefCore.i_invoke_the_API_with_DELETE_formData_payload(String)"
});
formatter.result({
  "duration": 188549934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 343977,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[4]00\u003e but was:\u003c[2]00\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.qube.test.StepDefCore.verifyStatusCode(StepDefCore.java:135)\r\n\tat ✽.Then I verify the status code to be \"400\"(APICoreTests_FILES.feature:109)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "error\u003dFile deleted successfully",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 117,
  "name": "Delete a file - DELETE - deleted file id",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;delete-a-file---delete---\u003ctitle\u003e;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 107,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "I invoke the API with DELETE multipart formData payload \"fileId\u003d21608921-7106-480e-bd3e-c5a882fd3bac\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "I verify the response contains \"message\u003dfile already deleted\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 795563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 445168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003d21608921-7106-480e-bd3e-c5a882fd3bac",
      "offset": 57
    }
  ],
  "location": "StepDefCore.i_invoke_the_API_with_DELETE_formData_payload(String)"
});
formatter.result({
  "duration": 190492588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 158206,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[4]00\u003e but was:\u003c[2]00\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.qube.test.StepDefCore.verifyStatusCode(StepDefCore.java:135)\r\n\tat ✽.Then I verify the status code to be \"400\"(APICoreTests_FILES.feature:109)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "message\u003dfile already deleted",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 120,
  "name": "Delete a file - DELETE - \u003cTitle\u003e",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;delete-a-file---delete---\u003ctitle\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 119,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 121,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "I add query params \"token\u003d\u003cUser1_Token\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "I invoke the API with DELETE multipart formData payload \"fileId\u003d\u003cFileIDFieldValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I verify the status code to be \"\u003cres_status\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "I verify the status message as \"\u003cres_message\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 128,
  "name": "",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;delete-a-file---delete---\u003ctitle\u003e;",
  "rows": [
    {
      "cells": [
        "Title",
        "User1_Token",
        "FileIDField",
        "FileIDFieldValue",
        "res_status",
        "res_message"
      ],
      "line": 129,
      "id": "testing-sharebox-apis---/api/files;delete-a-file---delete---\u003ctitle\u003e;;1"
    },
    {
      "cells": [
        "invalid token",
        "74ef7fe9-bfbe-433b-85a2-54be037c22",
        "fileId",
        "7e11fa14-a867-4cc2-9571-a03e981a6b1e",
        "401",
        "UNAUTHORIZED"
      ],
      "line": 130,
      "id": "testing-sharebox-apis---/api/files;delete-a-file---delete---\u003ctitle\u003e;;2"
    },
    {
      "cells": [
        "missing token",
        "",
        "fileId",
        "7e11fa14-a867-4cc2-9571-a03e981a6b1e",
        "401",
        "UNAUTHORIZED"
      ],
      "line": 131,
      "id": "testing-sharebox-apis---/api/files;delete-a-file---delete---\u003ctitle\u003e;;3"
    },
    {
      "cells": [
        "expired token",
        "1a0c3e02-69fb-4064-8c07-496cc199987f",
        "fileId",
        "7e11fa14-a867-4cc2-9571-a03e981a6b1e",
        "401",
        "UNAUTHORIZED"
      ],
      "line": 132,
      "id": "testing-sharebox-apis---/api/files;delete-a-file---delete---\u003ctitle\u003e;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 130,
  "name": "Delete a file - DELETE - invalid token",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;delete-a-file---delete---\u003ctitle\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 119,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 121,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "I add query params \"token\u003d74ef7fe9-bfbe-433b-85a2-54be037c22\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "I invoke the API with DELETE multipart formData payload \"fileId\u003d7e11fa14-a867-4cc2-9571-a03e981a6b1e\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I verify the status code to be \"401\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "I verify the status message as \"UNAUTHORIZED\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 379846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003d74ef7fe9-bfbe-433b-85a2-54be037c22",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 92129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003d7e11fa14-a867-4cc2-9571-a03e981a6b1e",
      "offset": 57
    }
  ],
  "location": "StepDefCore.i_invoke_the_API_with_DELETE_formData_payload(String)"
});
formatter.result({
  "duration": 243467567,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 32472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UNAUTHORIZED",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "duration": 60413,
  "status": "passed"
});
formatter.scenario({
  "line": 131,
  "name": "Delete a file - DELETE - missing token",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;delete-a-file---delete---\u003ctitle\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 119,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 121,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "I add query params \"token\u003d\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "I invoke the API with DELETE multipart formData payload \"fileId\u003d7e11fa14-a867-4cc2-9571-a03e981a6b1e\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I verify the status code to be \"401\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "I verify the status message as \"UNAUTHORIZED\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 366254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003d",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 87976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003d7e11fa14-a867-4cc2-9571-a03e981a6b1e",
      "offset": 57
    }
  ],
  "location": "StepDefCore.i_invoke_the_API_with_DELETE_formData_payload(String)"
});
formatter.result({
  "duration": 267589323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 101569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UNAUTHORIZED",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "duration": 111764,
  "status": "passed"
});
formatter.scenario({
  "line": 132,
  "name": "Delete a file - DELETE - expired token",
  "description": "",
  "id": "testing-sharebox-apis---/api/files;delete-a-file---delete---\u003ctitle\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 119,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 121,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eFILES_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "I add query params \"token\u003d1a0c3e02-69fb-4064-8c07-496cc199987f\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "I invoke the API with DELETE multipart formData payload \"fileId\u003d7e11fa14-a867-4cc2-9571-a03e981a6b1e\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I verify the status code to be \"401\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "I verify the status message as \"UNAUTHORIZED\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eFILES_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 388909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003d1a0c3e02-69fb-4064-8c07-496cc199987f",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 77782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003d7e11fa14-a867-4cc2-9571-a03e981a6b1e",
      "offset": 57
    }
  ],
  "location": "StepDefCore.i_invoke_the_API_with_DELETE_formData_payload(String)"
});
formatter.result({
  "duration": 270353971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 56259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UNAUTHORIZED",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "duration": 62300,
  "status": "passed"
});
formatter.uri("APICoreTests_UPLOAD.feature");
formatter.feature({
  "line": 1,
  "name": "Testing ShareBox APIs - /api/upload",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Uploading a new file to ShareBox - POST - Positive TCs - \u003cTitle\u003e",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---positive-tcs---\u003ctitle\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I invoke the API with POST multipart formData payload \"name\u003d\u003cNameValue\u003e, size\u003d\u003cSizeValue\u003e, hash\u003d\u003cHashValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify the status code to be \"\u003cres_status\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verify the response to contain \"fileId, accessKey, secretKey, sessionToken\"",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---positive-tcs---\u003ctitle\u003e;",
  "rows": [
    {
      "cells": [
        "Title",
        "NameField",
        "NameValue",
        "SizeField",
        "SizeValue",
        "HashField",
        "HashValue",
        "res_status",
        "res_message"
      ],
      "line": 13,
      "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---positive-tcs---\u003ctitle\u003e;;1"
    },
    {
      "cells": [
        "Happy Path",
        "name",
        "File1",
        "size",
        "1200",
        "hash",
        "fds%67U8",
        "200",
        ""
      ],
      "line": 14,
      "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---positive-tcs---\u003ctitle\u003e;;2"
    },
    {
      "cells": [
        "with duplicate name, different hash",
        "name",
        "File1",
        "size",
        "41589",
        "hash",
        "fds%67U18",
        "200",
        ""
      ],
      "line": 15,
      "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---positive-tcs---\u003ctitle\u003e;;3"
    },
    {
      "cells": [
        "with duplicate hash,  different name",
        "name",
        "File12",
        "size",
        "23658",
        "hash",
        "fds%67U8",
        "200",
        ""
      ],
      "line": 16,
      "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---positive-tcs---\u003ctitle\u003e;;4"
    },
    {
      "cells": [
        "with duplicate name, duplicate hash",
        "name",
        "File1",
        "size",
        "145",
        "hash",
        "fds%67U8",
        "200",
        ""
      ],
      "line": 17,
      "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---positive-tcs---\u003ctitle\u003e;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Uploading a new file to ShareBox - POST - Positive TCs - Happy Path",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---positive-tcs---\u003ctitle\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I invoke the API with POST multipart formData payload \"name\u003dFile1, size\u003d1200, hash\u003dfds%67U8\"",
  "matchedColumns": [
    2,
    4,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify the status code to be \"200\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verify the response to contain \"fileId, accessKey, secretKey, sessionToken\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 375693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 284319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name\u003dFile1, size\u003d1200, hash\u003dfds%67U8",
      "offset": 55
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataPayload(String)"
});
formatter.result({
  "duration": 1040262207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 33604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId, accessKey, secretKey, sessionToken",
      "offset": 34
    }
  ],
  "location": "StepDefCore.i_verify_the_response_to_contain(String)"
});
formatter.result({
  "duration": 27973837,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Uploading a new file to ShareBox - POST - Positive TCs - with duplicate name, different hash",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---positive-tcs---\u003ctitle\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I invoke the API with POST multipart formData payload \"name\u003dFile1, size\u003d41589, hash\u003dfds%67U18\"",
  "matchedColumns": [
    2,
    4,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify the status code to be \"200\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verify the response to contain \"fileId, accessKey, secretKey, sessionToken\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 358702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 236743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name\u003dFile1, size\u003d41589, hash\u003dfds%67U18",
      "offset": 55
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataPayload(String)"
});
formatter.result({
  "duration": 1047425295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 39269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId, accessKey, secretKey, sessionToken",
      "offset": 34
    }
  ],
  "location": "StepDefCore.i_verify_the_response_to_contain(String)"
});
formatter.result({
  "duration": 31584642,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Uploading a new file to ShareBox - POST - Positive TCs - with duplicate hash,  different name",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---positive-tcs---\u003ctitle\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I invoke the API with POST multipart formData payload \"name\u003dFile12, size\u003d23658, hash\u003dfds%67U8\"",
  "matchedColumns": [
    2,
    4,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify the status code to be \"200\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verify the response to contain \"fileId, accessKey, secretKey, sessionToken\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 396838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 274501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name\u003dFile12, size\u003d23658, hash\u003dfds%67U8",
      "offset": 55
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataPayload(String)"
});
formatter.result({
  "duration": 1007050569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 35493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId, accessKey, secretKey, sessionToken",
      "offset": 34
    }
  ],
  "location": "StepDefCore.i_verify_the_response_to_contain(String)"
});
formatter.result({
  "duration": 25704953,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Uploading a new file to ShareBox - POST - Positive TCs - with duplicate name, duplicate hash",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---positive-tcs---\u003ctitle\u003e;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I invoke the API with POST multipart formData payload \"name\u003dFile1, size\u003d145, hash\u003dfds%67U8\"",
  "matchedColumns": [
    2,
    4,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify the status code to be \"200\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verify the response to contain \"fileId, accessKey, secretKey, sessionToken\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 334159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 222395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name\u003dFile1, size\u003d145, hash\u003dfds%67U8",
      "offset": 55
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataPayload(String)"
});
formatter.result({
  "duration": 963362947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 57392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId, accessKey, secretKey, sessionToken",
      "offset": 34
    }
  ],
  "location": "StepDefCore.i_verify_the_response_to_contain(String)"
});
formatter.result({
  "duration": 29526072,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Uploading a new file to ShareBox - POST - Negative TCs - \u003cTitle\u003e",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---negative-tcs---\u003ctitle\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I add query params \"token\u003d\u003cToken\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I invoke the API with POST multipart formData payload \"name\u003d\u003cNameValue\u003e, size\u003d\u003cSizeValue\u003e, hash\u003d\u003cHashValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify the status code to be \"\u003cres_status\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I verify the status message as \"\u003cres_message\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---negative-tcs---\u003ctitle\u003e;",
  "rows": [
    {
      "cells": [
        "Title",
        "Token",
        "NameField",
        "NameValue",
        "SizeField",
        "SizeValue",
        "HashField",
        "HashValue",
        "res_status",
        "res_message"
      ],
      "line": 29,
      "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---negative-tcs---\u003ctitle\u003e;;1"
    },
    {
      "cells": [
        "without token",
        "",
        "name",
        "File2",
        "size",
        "540",
        "hash",
        "fds%67U9",
        "401",
        "UNAUTHORIZED"
      ],
      "line": 30,
      "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---negative-tcs---\u003ctitle\u003e;;2"
    },
    {
      "cells": [
        "with invalid token",
        "8920-84ab-48aa-841d-b54f776f06",
        "name",
        "File3",
        "size",
        "16000",
        "hash",
        "fds%67U10",
        "401",
        "UNAUTHORIZED"
      ],
      "line": 31,
      "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---negative-tcs---\u003ctitle\u003e;;3"
    },
    {
      "cells": [
        "with expired token",
        "8920f869-84ab-48aa-841d-b54f776f0ad6",
        "name",
        "File4",
        "size",
        "5268",
        "hash",
        "fds%67U11",
        "401",
        "UNAUTHORIZED"
      ],
      "line": 32,
      "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---negative-tcs---\u003ctitle\u003e;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Uploading a new file to ShareBox - POST - Negative TCs - without token",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---negative-tcs---\u003ctitle\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I add query params \"token\u003d\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I invoke the API with POST multipart formData payload \"name\u003dFile2, size\u003d540, hash\u003dfds%67U9\"",
  "matchedColumns": [
    3,
    5,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify the status code to be \"401\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I verify the status message as \"UNAUTHORIZED\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 495386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003d",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 107233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name\u003dFile2, size\u003d540, hash\u003dfds%67U9",
      "offset": 55
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataPayload(String)"
});
formatter.result({
  "duration": 177107345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 51729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UNAUTHORIZED",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "duration": 46065,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Uploading a new file to ShareBox - POST - Negative TCs - with invalid token",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---negative-tcs---\u003ctitle\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I add query params \"token\u003d8920-84ab-48aa-841d-b54f776f06\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I invoke the API with POST multipart formData payload \"name\u003dFile3, size\u003d16000, hash\u003dfds%67U10\"",
  "matchedColumns": [
    3,
    5,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify the status code to be \"401\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I verify the status message as \"UNAUTHORIZED\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 342466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003d8920-84ab-48aa-841d-b54f776f06",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 131021,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name\u003dFile3, size\u003d16000, hash\u003dfds%67U10",
      "offset": 55
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataPayload(String)"
});
formatter.result({
  "duration": 270371717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 35870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UNAUTHORIZED",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "duration": 41912,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Uploading a new file to ShareBox - POST - Negative TCs - with expired token",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---negative-tcs---\u003ctitle\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I add query params \"token\u003d8920f869-84ab-48aa-841d-b54f776f0ad6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I invoke the API with POST multipart formData payload \"name\u003dFile4, size\u003d5268, hash\u003dfds%67U11\"",
  "matchedColumns": [
    3,
    5,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify the status code to be \"401\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I verify the status message as \"UNAUTHORIZED\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 316790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003d8920f869-84ab-48aa-841d-b54f776f0ad6",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 415339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name\u003dFile4, size\u003d5268, hash\u003dfds%67U11",
      "offset": 55
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataPayload(String)"
});
formatter.result({
  "duration": 269006007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 33605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UNAUTHORIZED",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "duration": 61923,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "Uploading a new file to ShareBox - POST - Missing field values - \u003cTitle\u003e",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---missing-field-values---\u003ctitle\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I invoke the API with POST multipart formData payload \"name\u003d\u003cNameValue\u003e, size\u003d\u003cSizeValue\u003e, hash\u003d\u003cHashValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I verify the status code to be \"\u003cres_status\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I verify the status message as \"\u003cres_message\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---missing-field-values---\u003ctitle\u003e;",
  "rows": [
    {
      "cells": [
        "Title",
        "NameField",
        "NameValue",
        "SizeField",
        "SizeValue",
        "HashField",
        "HashValue",
        "res_status",
        "res_message"
      ],
      "line": 44,
      "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---missing-field-values---\u003ctitle\u003e;;1"
    },
    {
      "cells": [
        "without name value",
        "name",
        "",
        "size",
        "6258",
        "hash",
        "fds%67U15",
        "400",
        "BAD REQUEST"
      ],
      "line": 45,
      "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---missing-field-values---\u003ctitle\u003e;;2"
    },
    {
      "cells": [
        "without size value",
        "name",
        "File9",
        "size",
        "",
        "hash",
        "fds%67U16",
        "400",
        "BAD REQUEST"
      ],
      "line": 46,
      "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---missing-field-values---\u003ctitle\u003e;;3"
    },
    {
      "cells": [
        "without hash value",
        "name",
        "File10",
        "size",
        "195896",
        "hash",
        "",
        "400",
        "BAD REQUEST"
      ],
      "line": 47,
      "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---missing-field-values---\u003ctitle\u003e;;4"
    },
    {
      "cells": [
        "without name field",
        "name1",
        "",
        "size",
        "6258",
        "hash",
        "fds%67U15",
        "400",
        "BAD REQUEST"
      ],
      "line": 48,
      "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---missing-field-values---\u003ctitle\u003e;;5"
    },
    {
      "cells": [
        "without size field",
        "name",
        "File9",
        "size1",
        "",
        "hash",
        "fds%67U16",
        "400",
        "BAD REQUEST"
      ],
      "line": 49,
      "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---missing-field-values---\u003ctitle\u003e;;6"
    },
    {
      "cells": [
        "without hash field",
        "name",
        "File10",
        "size",
        "195896",
        "hash1",
        "",
        "400",
        "BAD REQUEST"
      ],
      "line": 50,
      "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---missing-field-values---\u003ctitle\u003e;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 45,
  "name": "Uploading a new file to ShareBox - POST - Missing field values - without name value",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---missing-field-values---\u003ctitle\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I invoke the API with POST multipart formData payload \"name\u003d, size\u003d6258, hash\u003dfds%67U15\"",
  "matchedColumns": [
    2,
    4,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I verify the status message as \"BAD REQUEST\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 348884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 210313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name\u003d, size\u003d6258, hash\u003dfds%67U15",
      "offset": 55
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataPayload(String)"
});
formatter.result({
  "duration": 1022216860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 343599,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[4]00\u003e but was:\u003c[2]00\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.qube.test.StepDefCore.verifyStatusCode(StepDefCore.java:135)\r\n\tat ✽.Then I verify the status code to be \"400\"(APICoreTests_UPLOAD.feature:40)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "BAD REQUEST",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 46,
  "name": "Uploading a new file to ShareBox - POST - Missing field values - without size value",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---missing-field-values---\u003ctitle\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I invoke the API with POST multipart formData payload \"name\u003dFile9, size\u003d, hash\u003dfds%67U16\"",
  "matchedColumns": [
    2,
    4,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I verify the status message as \"BAD REQUEST\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 342088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 160094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name\u003dFile9, size\u003d, hash\u003dfds%67U16",
      "offset": 55
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataPayload(String)"
});
formatter.result({
  "duration": 286467614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 218997,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[4]00\u003e but was:\u003c[5]00\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.qube.test.StepDefCore.verifyStatusCode(StepDefCore.java:135)\r\n\tat ✽.Then I verify the status code to be \"400\"(APICoreTests_UPLOAD.feature:40)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "BAD REQUEST",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 47,
  "name": "Uploading a new file to ShareBox - POST - Missing field values - without hash value",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---missing-field-values---\u003ctitle\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I invoke the API with POST multipart formData payload \"name\u003dFile10, size\u003d195896, hash\u003d\"",
  "matchedColumns": [
    2,
    4,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I verify the status message as \"BAD REQUEST\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 329628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 193321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name\u003dFile10, size\u003d195896, hash\u003d",
      "offset": 55
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataPayload(String)"
});
formatter.result({
  "duration": 947663511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 232967,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[4]00\u003e but was:\u003c[2]00\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.qube.test.StepDefCore.verifyStatusCode(StepDefCore.java:135)\r\n\tat ✽.Then I verify the status code to be \"400\"(APICoreTests_UPLOAD.feature:40)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "BAD REQUEST",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 48,
  "name": "Uploading a new file to ShareBox - POST - Missing field values - without name field",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---missing-field-values---\u003ctitle\u003e;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I invoke the API with POST multipart formData payload \"name\u003d, size\u003d6258, hash\u003dfds%67U15\"",
  "matchedColumns": [
    2,
    4,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I verify the status message as \"BAD REQUEST\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 392684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 240519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name\u003d, size\u003d6258, hash\u003dfds%67U15",
      "offset": 55
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataPayload(String)"
});
formatter.result({
  "duration": 1052015168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 211823,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[4]00\u003e but was:\u003c[2]00\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.qube.test.StepDefCore.verifyStatusCode(StepDefCore.java:135)\r\n\tat ✽.Then I verify the status code to be \"400\"(APICoreTests_UPLOAD.feature:40)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "BAD REQUEST",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 49,
  "name": "Uploading a new file to ShareBox - POST - Missing field values - without size field",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---missing-field-values---\u003ctitle\u003e;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I invoke the API with POST multipart formData payload \"name\u003dFile9, size\u003d, hash\u003dfds%67U16\"",
  "matchedColumns": [
    2,
    4,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I verify the status message as \"BAD REQUEST\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 330761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 256000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name\u003dFile9, size\u003d, hash\u003dfds%67U16",
      "offset": 55
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataPayload(String)"
});
formatter.result({
  "duration": 245546527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 291492,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[4]00\u003e but was:\u003c[5]00\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.qube.test.StepDefCore.verifyStatusCode(StepDefCore.java:135)\r\n\tat ✽.Then I verify the status code to be \"400\"(APICoreTests_UPLOAD.feature:40)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "BAD REQUEST",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 50,
  "name": "Uploading a new file to ShareBox - POST - Missing field values - without hash field",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;uploading-a-new-file-to-sharebox---post---missing-field-values---\u003ctitle\u003e;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I invoke the API with POST multipart formData payload \"name\u003dFile10, size\u003d195896, hash\u003d\"",
  "matchedColumns": [
    2,
    4,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I verify the status message as \"BAD REQUEST\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 349262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 209935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name\u003dFile10, size\u003d195896, hash\u003d",
      "offset": 55
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataPayload(String)"
});
formatter.result({
  "duration": 1040088898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 196720,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[4]00\u003e but was:\u003c[2]00\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.qube.test.StepDefCore.verifyStatusCode(StepDefCore.java:135)\r\n\tat ✽.Then I verify the status code to be \"400\"(APICoreTests_UPLOAD.feature:40)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "BAD REQUEST",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "Get upload details of a file using fileId - GET - Positive TCs - \u003cTitle\u003e",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---positive-tcs---\u003ctitle\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I add query params \"fileId\u003d\u003cFileID\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I invoke the API to GET details",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I verify the status code to be \"\u003cres_code\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "I verify the response contains \"fileId\u003d\u003cFileID\u003e, status\u003d\u003cres_status\u003e, name\u003d\u003cres_name\u003e, fileHash\u003d\u003cres_hash\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I verify the response contains \"createdOn\u003d\u003cres_date\u003e, bytesCompleted\u003d\u003cres_bytes\u003e, size\u003d\u003cres_size\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 64,
  "name": "",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---positive-tcs---\u003ctitle\u003e;",
  "rows": [
    {
      "cells": [
        "Title",
        "FileID",
        "res_code",
        "res_status",
        "res_name",
        "res_hash",
        "res_date",
        "res_bytes",
        "res_size"
      ],
      "line": 65,
      "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---positive-tcs---\u003ctitle\u003e;;1"
    },
    {
      "cells": [
        "Happy Path",
        "bb6a5208-30b1-4dbf-9105-056e0de17f15",
        "200",
        "Completed",
        "QUBE Cinema",
        "agtb675Tgth",
        "2018-10-26 13:42:48",
        "850",
        "850"
      ],
      "line": 66,
      "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---positive-tcs---\u003ctitle\u003e;;2"
    },
    {
      "cells": [
        "Valid file",
        "5f719553-49a7-4f4e-9239-af0af1af014c",
        "200",
        "Pending",
        "saravana",
        "avbgt56T",
        "2018-10-27 11:11:57",
        "0",
        "80"
      ],
      "line": 67,
      "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---positive-tcs---\u003ctitle\u003e;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 66,
  "name": "Get upload details of a file using fileId - GET - Positive TCs - Happy Path",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---positive-tcs---\u003ctitle\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I add query params \"fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I invoke the API to GET details",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I verify the status code to be \"200\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "I verify the response contains \"fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, status\u003dCompleted, name\u003dQUBE Cinema, fileHash\u003dagtb675Tgth\"",
  "matchedColumns": [
    1,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I verify the response contains \"createdOn\u003d2018-10-26 13:42:48, bytesCompleted\u003d850, size\u003d850\"",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 351150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 205027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 82312,
  "status": "passed"
});
formatter.match({
  "location": "StepDefCore.i_invoke_the_API_with_GET_details()"
});
formatter.result({
  "duration": 338431431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 64944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, status\u003dCompleted, name\u003dQUBE Cinema, fileHash\u003dagtb675Tgth",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "duration": 14554234,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat com.qube.test.StepDefCore.i_verify_the_response_contains(StepDefCore.java:159)\r\n\tat ✽.And I verify the response contains \"fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de17f15, status\u003dCompleted, name\u003dQUBE Cinema, fileHash\u003dagtb675Tgth\"(APICoreTests_UPLOAD.feature:61)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "createdOn\u003d2018-10-26 13:42:48, bytesCompleted\u003d850, size\u003d850",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 67,
  "name": "Get upload details of a file using fileId - GET - Positive TCs - Valid file",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---positive-tcs---\u003ctitle\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I add query params \"fileId\u003d5f719553-49a7-4f4e-9239-af0af1af014c\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I invoke the API to GET details",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I verify the status code to be \"200\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "I verify the response contains \"fileId\u003d5f719553-49a7-4f4e-9239-af0af1af014c, status\u003dPending, name\u003dsaravana, fileHash\u003davbgt56T\"",
  "matchedColumns": [
    1,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I verify the response contains \"createdOn\u003d2018-10-27 11:11:57, bytesCompleted\u003d0, size\u003d80\"",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 437239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 225038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003d5f719553-49a7-4f4e-9239-af0af1af014c",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 56259,
  "status": "passed"
});
formatter.match({
  "location": "StepDefCore.i_invoke_the_API_with_GET_details()"
});
formatter.result({
  "duration": 258721458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 54372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003d5f719553-49a7-4f4e-9239-af0af1af014c, status\u003dPending, name\u003dsaravana, fileHash\u003davbgt56T",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "duration": 30543275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "createdOn\u003d2018-10-27 11:11:57, bytesCompleted\u003d0, size\u003d80",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "duration": 14583308,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat com.qube.test.StepDefCore.i_verify_the_response_contains(StepDefCore.java:159)\r\n\tat ✽.And I verify the response contains \"createdOn\u003d2018-10-27 11:11:57, bytesCompleted\u003d0, size\u003d80\"(APICoreTests_UPLOAD.feature:62)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 70,
  "name": "Get upload details of a file using fileId - GET - Negative TCs - \u003cTitle\u003e",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---negative-tcs---\u003ctitle\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 69,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I add query params \"\u003cFileID_Field\u003e\u003d\u003cFileID_Value\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I invoke the API to GET details",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I verify the status code to be \"\u003cres_code\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 78,
  "name": "",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---negative-tcs---\u003ctitle\u003e;",
  "rows": [
    {
      "cells": [
        "Title",
        "FileID_Field",
        "FileID_Value",
        "res_code",
        "res_message"
      ],
      "line": 79,
      "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---negative-tcs---\u003ctitle\u003e;;1"
    },
    {
      "cells": [
        "Invalid file Id",
        "fileId",
        "bb6a5208-30b1-4dbf-9105-056e0de115",
        "500",
        "INTERNAL SERVER ERROR"
      ],
      "line": 80,
      "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---negative-tcs---\u003ctitle\u003e;;2"
    },
    {
      "cells": [
        "Missing fileId value",
        "fileId",
        "",
        "400",
        "BAD REQUEST"
      ],
      "line": 81,
      "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---negative-tcs---\u003ctitle\u003e;;3"
    },
    {
      "cells": [
        "Missing fileId param",
        "fileID",
        "",
        "400",
        "BAD_REQUEST"
      ],
      "line": 82,
      "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---negative-tcs---\u003ctitle\u003e;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 80,
  "name": "Get upload details of a file using fileId - GET - Negative TCs - Invalid file Id",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---negative-tcs---\u003ctitle\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 69,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I add query params \"fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de115\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I invoke the API to GET details",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I verify the status code to be \"500\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 376449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 232590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003dbb6a5208-30b1-4dbf-9105-056e0de115",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 46443,
  "status": "passed"
});
formatter.match({
  "location": "StepDefCore.i_invoke_the_API_with_GET_details()"
});
formatter.result({
  "duration": 268053371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 53994,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "Get upload details of a file using fileId - GET - Negative TCs - Missing fileId value",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---negative-tcs---\u003ctitle\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 69,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I add query params \"fileId\u003d\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I invoke the API to GET details",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 386266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 215599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003d",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 61546,
  "status": "passed"
});
formatter.match({
  "location": "StepDefCore.i_invoke_the_API_with_GET_details()"
});
formatter.result({
  "duration": 205388155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 215221,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[4]00\u003e but was:\u003c[2]00\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.qube.test.StepDefCore.verifyStatusCode(StepDefCore.java:135)\r\n\tat ✽.Then I verify the status code to be \"400\"(APICoreTests_UPLOAD.feature:76)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 82,
  "name": "Get upload details of a file using fileId - GET - Negative TCs - Missing fileId param",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---negative-tcs---\u003ctitle\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 69,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I add query params \"fileID\u003d\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I invoke the API to GET details",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 383622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 253734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileID\u003d",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 77782,
  "status": "passed"
});
formatter.match({
  "location": "StepDefCore.i_invoke_the_API_with_GET_details()"
});
formatter.result({
  "duration": 255408186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 115540,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 85,
  "name": "Get upload details of a file using fileId - GET - Negative TCs - \u003cTitle\u003e",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---negative-tcs---\u003ctitle\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 84,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "I add query params \"token\u003d\u003cToken\u003e, fileId\u003d\u003cFileID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "I invoke the API to GET details",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I verify the status code to be \"\u003cres_code\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 92,
  "name": "",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---negative-tcs---\u003ctitle\u003e;",
  "rows": [
    {
      "cells": [
        "Title",
        "Token",
        "FileID",
        "res_code",
        "res_message"
      ],
      "line": 93,
      "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---negative-tcs---\u003ctitle\u003e;;1"
    },
    {
      "cells": [
        "Invalid token",
        "da4d-ffa5-4e1f-b07c-8f2dcbd",
        "5f719553-49a7-4f4e-9239-af0af1af014c",
        "401",
        "UNAUTHORIZED"
      ],
      "line": 94,
      "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---negative-tcs---\u003ctitle\u003e;;2"
    },
    {
      "cells": [
        "Missing token",
        "",
        "5f719553-49a7-4f4e-9239-af0af1af014c",
        "401",
        "UNAUTHORIZED"
      ],
      "line": 95,
      "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---negative-tcs---\u003ctitle\u003e;;3"
    },
    {
      "cells": [
        "Expired token",
        "1a0c3e02-69fb-4064-8c07-496cc199987f",
        "1a0c3e02-69fb-4064-8c07-496cc199987f",
        "401",
        "UNAUTHORIZED"
      ],
      "line": 96,
      "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---negative-tcs---\u003ctitle\u003e;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 94,
  "name": "Get upload details of a file using fileId - GET - Negative TCs - Invalid token",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---negative-tcs---\u003ctitle\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 84,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "I add query params \"token\u003dda4d-ffa5-4e1f-b07c-8f2dcbd, fileId\u003d5f719553-49a7-4f4e-9239-af0af1af014c\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "I invoke the API to GET details",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I verify the status code to be \"401\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 336802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003dda4d-ffa5-4e1f-b07c-8f2dcbd, fileId\u003d5f719553-49a7-4f4e-9239-af0af1af014c",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 62678,
  "status": "passed"
});
formatter.match({
  "location": "StepDefCore.i_invoke_the_API_with_GET_details()"
});
formatter.result({
  "duration": 197585823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 35492,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "Get upload details of a file using fileId - GET - Negative TCs - Missing token",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---negative-tcs---\u003ctitle\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 84,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "I add query params \"token\u003d, fileId\u003d5f719553-49a7-4f4e-9239-af0af1af014c\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "I invoke the API to GET details",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I verify the status code to be \"401\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 337180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003d, fileId\u003d5f719553-49a7-4f4e-9239-af0af1af014c",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 78915,
  "status": "passed"
});
formatter.match({
  "location": "StepDefCore.i_invoke_the_API_with_GET_details()"
});
formatter.result({
  "duration": 250789238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 67965,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "Get upload details of a file using fileId - GET - Negative TCs - Expired token",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;get-upload-details-of-a-file-using-fileid---get---negative-tcs---\u003ctitle\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 84,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "I add query params \"token\u003d1a0c3e02-69fb-4064-8c07-496cc199987f, fileId\u003d1a0c3e02-69fb-4064-8c07-496cc199987f\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "I invoke the API to GET details",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I verify the status code to be \"401\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 315281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003d1a0c3e02-69fb-4064-8c07-496cc199987f, fileId\u003d1a0c3e02-69fb-4064-8c07-496cc199987f",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 62300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefCore.i_invoke_the_API_with_GET_details()"
});
formatter.result({
  "duration": 254030393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 46442,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 100,
  "name": "Updating upload details of a file - PUT - Positive TCs - \u003cTitle\u003e",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---positive-tcs---\u003ctitle\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 99,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "I invoke the API with PUT multipart formData payload \"\u003cFileIDField\u003e\u003d\u003cFileIDValue\u003e, \u003cBytesField\u003e\u003d\u003cBytesValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I verify the status code to be \"\u003cres_status\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "I verify the response contains \"\u003cres_messageField\u003e\u003d\u003cres_messageValue\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 108,
  "name": "",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---positive-tcs---\u003ctitle\u003e;",
  "rows": [
    {
      "cells": [
        "Title",
        "FileIDField",
        "FileIDValue",
        "BytesField",
        "BytesValue",
        "res_status",
        "res_messageField",
        "res_messageValue"
      ],
      "line": 109,
      "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---positive-tcs---\u003ctitle\u003e;;1"
    },
    {
      "cells": [
        "Happy Path",
        "fileId",
        "e5d8e850-c872-41b9-af2d-a009ecf36724",
        "bytesCompleted",
        "300",
        "200",
        "message",
        "Bytes has been updated successfully"
      ],
      "line": 110,
      "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---positive-tcs---\u003ctitle\u003e;;2"
    },
    {
      "cells": [
        "bytesCompleted value \u003c file size",
        "fileId",
        "e5d8e850-c872-41b9-af2d-a009ecf36724",
        "bytesCompleted",
        "100",
        "200",
        "message",
        "Bytes has been updated successfully"
      ],
      "line": 111,
      "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---positive-tcs---\u003ctitle\u003e;;3"
    },
    {
      "cells": [
        "bytesCompleted value \u003d file size",
        "fileId",
        "e5d8e850-c872-41b9-af2d-a009ecf36724",
        "bytesCompleted",
        "300",
        "200",
        "message",
        "Bytes has been updated successfully"
      ],
      "line": 112,
      "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---positive-tcs---\u003ctitle\u003e;;4"
    },
    {
      "cells": [
        "bytesCompleted as negative integer",
        "fileId",
        "e5d8e850-c872-41b9-af2d-a009ecf36724",
        "bytesCompleted",
        "-128",
        "400",
        "message",
        "BAD REQUEST"
      ],
      "line": 113,
      "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---positive-tcs---\u003ctitle\u003e;;5"
    },
    {
      "cells": [
        "bytesCompleted value \u003e file size",
        "fileId",
        "e5d8e850-c872-41b9-af2d-a009ecf36724",
        "bytesCompleted",
        "320",
        "400",
        "error",
        "is greater than file size"
      ],
      "line": 114,
      "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---positive-tcs---\u003ctitle\u003e;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 110,
  "name": "Updating upload details of a file - PUT - Positive TCs - Happy Path",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---positive-tcs---\u003ctitle\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 99,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d300\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I verify the status code to be \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "I verify the response contains \"message\u003dBytes has been updated successfully\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 581097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 400613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d300",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 204674905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 32472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "message\u003dBytes has been updated successfully",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "duration": 5403560,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "Updating upload details of a file - PUT - Positive TCs - bytesCompleted value \u003c file size",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---positive-tcs---\u003ctitle\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 99,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d100\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I verify the status code to be \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "I verify the response contains \"message\u003dBytes has been updated successfully\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 356437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 193321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d100",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 274477910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 35115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "message\u003dBytes has been updated successfully",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "duration": 6236881,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "Updating upload details of a file - PUT - Positive TCs - bytesCompleted value \u003d file size",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---positive-tcs---\u003ctitle\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 99,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d300\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I verify the status code to be \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "I verify the response contains \"message\u003dBytes has been updated successfully\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 343976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 181239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d300",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 263799167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 37003,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "message\u003dBytes has been updated successfully",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "duration": 6791170,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "Updating upload details of a file - PUT - Positive TCs - bytesCompleted as negative integer",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---positive-tcs---\u003ctitle\u003e;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 99,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d-128\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "I verify the response contains \"message\u003dBAD REQUEST\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 396083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 217109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d-128",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 252853096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 218242,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[4]00\u003e but was:\u003c[2]00\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.qube.test.StepDefCore.verifyStatusCode(StepDefCore.java:135)\r\n\tat ✽.Then I verify the status code to be \"400\"(APICoreTests_UPLOAD.feature:105)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "message\u003dBAD REQUEST",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 114,
  "name": "Updating upload details of a file - PUT - Positive TCs - bytesCompleted value \u003e file size",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---positive-tcs---\u003ctitle\u003e;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 99,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d320\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "I verify the response contains \"error\u003dis greater than file size\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 311126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 318301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d320",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 278966591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 71363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "error\u003dis greater than file size",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_contains(String)"
});
formatter.result({
  "duration": 5661448,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 117,
  "name": "Updating upload details of a file - PUT - Negative TCs - \u003cTitle\u003e",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 116,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 118,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 120,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "I invoke the API with PUT multipart formData payload \"\u003cFileIDField\u003e\u003d\u003cFileIDValue\u003e, \u003cBytesField\u003e\u003d\u003cBytesValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "I verify the status code to be \"\u003cres_status\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "I verify the status message as \"\u003cres_message\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 125,
  "name": "",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;",
  "rows": [
    {
      "cells": [
        "Title",
        "FileIDField",
        "FileIDValue",
        "BytesField",
        "BytesValue",
        "res_status",
        "res_message"
      ],
      "line": 126,
      "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;1"
    },
    {
      "cells": [
        "bytesCompleted as decimal value",
        "fileId",
        "e5d8e850-c872-41b9-af2d-a009ecf36724",
        "bytesCompleted",
        "250.67",
        "500",
        "INTERNAL SERVER ERROR"
      ],
      "line": 127,
      "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;2"
    },
    {
      "cells": [
        "bytesCompleted as string value",
        "fileId",
        "e5d8e850-c872-41b9-af2d-a009ecf36724",
        "bytesCompleted",
        "forty",
        "500",
        "INTERNAL SERVER ERROR"
      ],
      "line": 128,
      "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;3"
    },
    {
      "cells": [
        "invalid file id",
        "fileId",
        "e5d8e850-c872-41b9-af2d-a009ecf3672",
        "bytesCompleted",
        "185",
        "500",
        "INTERNAL SERVER ERROR"
      ],
      "line": 129,
      "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;4"
    },
    {
      "cells": [
        "without fileId value",
        "fileId",
        "",
        "bytesCompleted",
        "180",
        "500",
        "INTERNAL SERVER ERROR"
      ],
      "line": 130,
      "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;5"
    },
    {
      "cells": [
        "without bytesCompleted value",
        "fileId",
        "e5d8e850-c872-41b9-af2d-a009ecf36724",
        "bytesCompleted",
        "",
        "500",
        "INTERNAL SERVER ERROR"
      ],
      "line": 131,
      "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 127,
  "name": "Updating upload details of a file - PUT - Negative TCs - bytesCompleted as decimal value",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 116,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 118,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 120,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d250.67\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "I verify the status code to be \"500\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "I verify the status message as \"INTERNAL SERVER ERROR\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 371917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 214088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d250.67",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 267411860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 57770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INTERNAL SERVER ERROR",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "duration": 61546,
  "status": "passed"
});
formatter.scenario({
  "line": 128,
  "name": "Updating upload details of a file - PUT - Negative TCs - bytesCompleted as string value",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 116,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 118,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 120,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003dforty\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "I verify the status code to be \"500\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "I verify the status message as \"INTERNAL SERVER ERROR\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 328873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 230324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003dforty",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 294692836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 30207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INTERNAL SERVER ERROR",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "duration": 37380,
  "status": "passed"
});
formatter.scenario({
  "line": 129,
  "name": "Updating upload details of a file - PUT - Negative TCs - invalid file id",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 116,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 118,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 120,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003de5d8e850-c872-41b9-af2d-a009ecf3672, bytesCompleted\u003d185\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "I verify the status code to be \"500\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "I verify the status message as \"INTERNAL SERVER ERROR\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 367009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 256378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003de5d8e850-c872-41b9-af2d-a009ecf3672, bytesCompleted\u003d185",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 176303098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 39646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INTERNAL SERVER ERROR",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "duration": 43799,
  "status": "passed"
});
formatter.scenario({
  "line": 130,
  "name": "Updating upload details of a file - PUT - Negative TCs - without fileId value",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 116,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 118,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 120,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003d, bytesCompleted\u003d180\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "I verify the status code to be \"500\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "I verify the status message as \"INTERNAL SERVER ERROR\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 316791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 206537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003d, bytesCompleted\u003d180",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 201258552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 191056,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[5]00\u003e but was:\u003c[2]00\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.qube.test.StepDefCore.verifyStatusCode(StepDefCore.java:135)\r\n\tat ✽.Then I verify the status code to be \"500\"(APICoreTests_UPLOAD.feature:122)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "INTERNAL SERVER ERROR",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 131,
  "name": "Updating upload details of a file - PUT - Negative TCs - without bytesCompleted value",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 116,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 118,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 120,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "I verify the status code to be \"500\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "I verify the status message as \"INTERNAL SERVER ERROR\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 386265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 191811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 196635830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 33605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INTERNAL SERVER ERROR",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "duration": 60413,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 134,
  "name": "Updating upload details of a file - PUT - Negative TCs - \u003cTitle\u003e",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 133,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 135,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 138,
  "name": "I invoke the API with PUT multipart formData payload \"\u003cFileIDField\u003e\u003d\u003cFileIDValue\u003e, \u003cBytesField\u003e\u003d\u003cBytesValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "I verify the status code to be \"\u003cres_status\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "I verify the status message as \"\u003cres_message\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 142,
  "name": "",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;",
  "rows": [
    {
      "cells": [
        "Title",
        "FileIDField",
        "FileIDValue",
        "BytesField",
        "BytesValue",
        "res_status",
        "res_message"
      ],
      "line": 143,
      "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;1"
    },
    {
      "cells": [
        "without fileId field",
        "fileId1",
        "e5d8e850-c872-41b9-af2d-a009ecf36724",
        "bytesCompleted",
        "300",
        "400",
        "BAD REQUEST"
      ],
      "line": 144,
      "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;2"
    },
    {
      "cells": [
        "without bytesCompleted field",
        "fileId",
        "e5d8e850-c872-41b9-af2d-a009ecf36724",
        "bytesCompleted1",
        "240",
        "400",
        "BAD REQUEST"
      ],
      "line": 145,
      "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 144,
  "name": "Updating upload details of a file - PUT - Negative TCs - without fileId field",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 133,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 135,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 138,
  "name": "I invoke the API with PUT multipart formData payload \"fileId1\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d300\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "I verify the status message as \"BAD REQUEST\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 295268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 194076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId1\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d300",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 293392448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 67209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BAD REQUEST",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "duration": 344354,
  "status": "passed"
});
formatter.scenario({
  "line": 145,
  "name": "Updating upload details of a file - PUT - Negative TCs - without bytesCompleted field",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 133,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 135,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "I add token query param \"token\u003ddata.props-\u003eUSER1_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 138,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted1\u003d240\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "I verify the status code to be \"400\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "I verify the status message as \"BAD REQUEST\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 281676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003ddata.props-\u003eUSER1_TOKEN",
      "offset": 25
    }
  ],
  "location": "StepDefCore.addTokenQueryParam(String)"
});
formatter.result({
  "duration": 246560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted1\u003d240",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 184767329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 40778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BAD REQUEST",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "duration": 56638,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 148,
  "name": "Updating upload details of a file - PUT - Negative TCs - \u003cTitle\u003e",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 147,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 149,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "I add query params \"token\u003d\u003cToken\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 152,
  "name": "I invoke the API with PUT multipart formData payload \"\u003cFileIDField\u003e\u003d\u003cFileIDValue\u003e, \u003cBytesField\u003e\u003d\u003cBytesValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I verify the status code to be \"\u003cres_status\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "I verify the status message as \"\u003cres_message\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 156,
  "name": "",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;",
  "rows": [
    {
      "cells": [
        "Title",
        "Token",
        "FileIDField",
        "FileIDValue",
        "BytesField",
        "BytesValue",
        "res_status",
        "res_message"
      ],
      "line": 157,
      "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;1"
    },
    {
      "cells": [
        "missing token",
        "",
        "fileId",
        "e5d8e850-c872-41b9-af2d-a009ecf36724",
        "bytesCompleted",
        "300",
        "401",
        "UNAUTHORIZED"
      ],
      "line": 158,
      "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;2"
    },
    {
      "cells": [
        "invalid token",
        "0fd989c7-c2fc-4fb2-8ec7-6d5eb979762",
        "fileId",
        "e5d8e850-c872-41b9-af2d-a009ecf36724",
        "bytesCompleted",
        "300",
        "401",
        "UNAUTHORIZED"
      ],
      "line": 159,
      "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;3"
    },
    {
      "cells": [
        "invalid token",
        "1a0c3e02-69fb-4064-8c07-496cc199987f",
        "fileId",
        "e5d8e850-c872-41b9-af2d-a009ecf36724",
        "bytesCompleted",
        "300",
        "401",
        "UNAUTHORIZED"
      ],
      "line": 160,
      "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 158,
  "name": "Updating upload details of a file - PUT - Negative TCs - missing token",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 147,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 149,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "I add query params \"token\u003d\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 152,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d300\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I verify the status code to be \"401\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "I verify the status message as \"UNAUTHORIZED\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 333026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003d",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 140082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d300",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 357325957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 43045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UNAUTHORIZED",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "duration": 35870,
  "status": "passed"
});
formatter.scenario({
  "line": 159,
  "name": "Updating upload details of a file - PUT - Negative TCs - invalid token",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 147,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 149,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "I add query params \"token\u003d0fd989c7-c2fc-4fb2-8ec7-6d5eb979762\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 152,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d300\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I verify the status code to be \"401\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "I verify the status message as \"UNAUTHORIZED\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 368519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003d0fd989c7-c2fc-4fb2-8ec7-6d5eb979762",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 70985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d300",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 205457252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 63056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UNAUTHORIZED",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "duration": 45688,
  "status": "passed"
});
formatter.scenario({
  "line": 160,
  "name": "Updating upload details of a file - PUT - Negative TCs - invalid token",
  "description": "",
  "id": "testing-sharebox-apis---/api/upload;updating-upload-details-of-a-file---put---negative-tcs---\u003ctitle\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 147,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 149,
  "name": "I set endpoint to \"data.props-\u003eBASE_URI\" with \"data.props-\u003eUPLOAD_API\"",
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "I add query params \"token\u003d1a0c3e02-69fb-4064-8c07-496cc199987f\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 152,
  "name": "I invoke the API with PUT multipart formData payload \"fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d300\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I verify the status code to be \"401\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "I verify the status message as \"UNAUTHORIZED\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eBASE_URI",
      "offset": 19
    },
    {
      "val": "data.props-\u003eUPLOAD_API",
      "offset": 47
    }
  ],
  "location": "StepDefCore.setEndpoint(String,String)"
});
formatter.result({
  "duration": 311882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "token\u003d1a0c3e02-69fb-4064-8c07-496cc199987f",
      "offset": 20
    }
  ],
  "location": "StepDefCore.addQueryParams(String)"
});
formatter.result({
  "duration": 51729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fileId\u003de5d8e850-c872-41b9-af2d-a009ecf36724, bytesCompleted\u003d300",
      "offset": 54
    }
  ],
  "location": "StepDefCore.invokeAPIwithMultipartFormDataForEdit(String)"
});
formatter.result({
  "duration": 258080704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 32
    }
  ],
  "location": "StepDefCore.verifyStatusCode(String)"
});
formatter.result({
  "duration": 57393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UNAUTHORIZED",
      "offset": 32
    }
  ],
  "location": "StepDefCore.i_verify_the_response_message_as(String)"
});
formatter.result({
  "duration": 35115,
  "status": "passed"
});
});