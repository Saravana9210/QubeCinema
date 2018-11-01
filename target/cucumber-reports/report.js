$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/APIScenarioTests.feature");
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
  "name": "I upload a file with payload \"uploadCommonFile.json\" and save fileId to \"data.props-\u003ecommonFileID\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I check the status of the file with id \"data.props-\u003ecommonFileID\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify the value \"$.status\u003dPending\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I verify the value \"$.bytesCompleted\u003d0\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "uploadCommonFile.json",
      "offset": 30
    },
    {
      "val": "data.props-\u003ecommonFileID",
      "offset": 73
    }
  ],
  "location": "StepDefScenarios.uploadFileAndSaveFileID(String,String)"
});
formatter.result({
  "duration": 3170590676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003ecommonFileID",
      "offset": 40
    }
  ],
  "location": "StepDefScenarios.checkFileStatus(String)"
});
formatter.result({
  "duration": 246741571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.status\u003dPending",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 804625,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Pending]\u003e but was:\u003c[Completed]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.qube.test.StepDefScenarios.verifyResponseValues(StepDefScenarios.java:73)\r\n\tat ✽.Then I verify the value \"$.status\u003dPending\"(src/test/resources/features/APIScenarioTests.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.bytesCompleted\u003d0",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Upload a file with partial bytesCompleted - for \u003cTitle\u003e",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I upload a file with payload \"\u003cPayloadTemplate\u003e\" and save fileId to \"data.props-\u003e\u003cOutputFileID\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I check the status of the file with id \"data.props-\u003e\u003cOutputFileID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify the value \"$.status\u003dPending\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;",
  "rows": [
    {
      "cells": [
        "Title",
        "PayloadTemplate",
        "OutputFileID"
      ],
      "line": 17,
      "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;1"
    },
    {
      "cells": [
        "Partial file 1",
        "uploadPartialFile1.json",
        "partialFile1ID"
      ],
      "line": 18,
      "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;2"
    },
    {
      "cells": [
        "Partial file 2",
        "uploadPartialFile2.json",
        "partialFile2ID"
      ],
      "line": 19,
      "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;3"
    },
    {
      "cells": [
        "Shared file 1",
        "uploadSharedFile1.json",
        "sharedFile1ID"
      ],
      "line": 20,
      "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;4"
    },
    {
      "cells": [
        "Shared file 2",
        "uploadSharedFile2.json",
        "sharedFile2ID"
      ],
      "line": 21,
      "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;5"
    },
    {
      "cells": [
        "file to Delete 1",
        "file1ToDelete.json",
        "file1ToDeleteID"
      ],
      "line": 22,
      "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;6"
    },
    {
      "cells": [
        "Shared file to Delete 1",
        "sharedFile1ToDelete.json",
        "sharedFile1ToDeleteID"
      ],
      "line": 23,
      "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;7"
    },
    {
      "cells": [
        "Shared file to Delete 2",
        "sharedFile2ToDelete.json",
        "sharedFile2ToDeleteID"
      ],
      "line": 24,
      "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;8"
    },
    {
      "cells": [
        "Shared file to Delete 3",
        "sharedFile3ToDelete.json",
        "sharedFile3ToDeleteID"
      ],
      "line": 25,
      "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;9"
    },
    {
      "cells": [
        "Shared file to Delete 4",
        "sharedFile4ToDelete.json",
        "sharedFile4ToDeleteID"
      ],
      "line": 26,
      "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;10"
    },
    {
      "cells": [
        "Shared file to Delete 5",
        "sharedFile5ToDelete.json",
        "sharedFile5ToDeleteID"
      ],
      "line": 27,
      "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;11"
    },
    {
      "cells": [
        "Shared file to Delete 6",
        "sharedFile6ToDelete.json",
        "sharedFile6ToDeleteID"
      ],
      "line": 28,
      "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;12"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Upload a file with partial bytesCompleted - for Partial file 1",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I upload a file with payload \"uploadPartialFile1.json\" and save fileId to \"data.props-\u003epartialFile1ID\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I check the status of the file with id \"data.props-\u003epartialFile1ID\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify the value \"$.status\u003dPending\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "uploadPartialFile1.json",
      "offset": 30
    },
    {
      "val": "data.props-\u003epartialFile1ID",
      "offset": 75
    }
  ],
  "location": "StepDefScenarios.uploadFileAndSaveFileID(String,String)"
});
formatter.result({
  "duration": 1010385363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003epartialFile1ID",
      "offset": 40
    }
  ],
  "location": "StepDefScenarios.checkFileStatus(String)"
});
formatter.result({
  "duration": 285968452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.status\u003dPending",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 1042124,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Upload a file with partial bytesCompleted - for Partial file 2",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I upload a file with payload \"uploadPartialFile2.json\" and save fileId to \"data.props-\u003epartialFile2ID\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I check the status of the file with id \"data.props-\u003epartialFile2ID\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify the value \"$.status\u003dPending\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "uploadPartialFile2.json",
      "offset": 30
    },
    {
      "val": "data.props-\u003epartialFile2ID",
      "offset": 75
    }
  ],
  "location": "StepDefScenarios.uploadFileAndSaveFileID(String,String)"
});
formatter.result({
  "duration": 985502026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003epartialFile2ID",
      "offset": 40
    }
  ],
  "location": "StepDefScenarios.checkFileStatus(String)"
});
formatter.result({
  "duration": 224493749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.status\u003dPending",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 488968,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Upload a file with partial bytesCompleted - for Shared file 1",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I upload a file with payload \"uploadSharedFile1.json\" and save fileId to \"data.props-\u003esharedFile1ID\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I check the status of the file with id \"data.props-\u003esharedFile1ID\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify the value \"$.status\u003dPending\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "uploadSharedFile1.json",
      "offset": 30
    },
    {
      "val": "data.props-\u003esharedFile1ID",
      "offset": 74
    }
  ],
  "location": "StepDefScenarios.uploadFileAndSaveFileID(String,String)"
});
formatter.result({
  "duration": 1010320419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile1ID",
      "offset": 40
    }
  ],
  "location": "StepDefScenarios.checkFileStatus(String)"
});
formatter.result({
  "duration": 238037954,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.status\u003dPending",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 390041,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Upload a file with partial bytesCompleted - for Shared file 2",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I upload a file with payload \"uploadSharedFile2.json\" and save fileId to \"data.props-\u003esharedFile2ID\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I check the status of the file with id \"data.props-\u003esharedFile2ID\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify the value \"$.status\u003dPending\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "uploadSharedFile2.json",
      "offset": 30
    },
    {
      "val": "data.props-\u003esharedFile2ID",
      "offset": 74
    }
  ],
  "location": "StepDefScenarios.uploadFileAndSaveFileID(String,String)"
});
formatter.result({
  "duration": 1022485698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile2ID",
      "offset": 40
    }
  ],
  "location": "StepDefScenarios.checkFileStatus(String)"
});
formatter.result({
  "duration": 254250145,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.status\u003dPending",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 549003,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Upload a file with partial bytesCompleted - for file to Delete 1",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I upload a file with payload \"file1ToDelete.json\" and save fileId to \"data.props-\u003efile1ToDeleteID\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I check the status of the file with id \"data.props-\u003efile1ToDeleteID\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify the value \"$.status\u003dPending\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file1ToDelete.json",
      "offset": 30
    },
    {
      "val": "data.props-\u003efile1ToDeleteID",
      "offset": 70
    }
  ],
  "location": "StepDefScenarios.uploadFileAndSaveFileID(String,String)"
});
formatter.result({
  "duration": 989646731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003efile1ToDeleteID",
      "offset": 40
    }
  ],
  "location": "StepDefScenarios.checkFileStatus(String)"
});
formatter.result({
  "duration": 223811083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.status\u003dPending",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 776684,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Upload a file with partial bytesCompleted - for Shared file to Delete 1",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I upload a file with payload \"sharedFile1ToDelete.json\" and save fileId to \"data.props-\u003esharedFile1ToDeleteID\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I check the status of the file with id \"data.props-\u003esharedFile1ToDeleteID\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify the value \"$.status\u003dPending\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "sharedFile1ToDelete.json",
      "offset": 30
    },
    {
      "val": "data.props-\u003esharedFile1ToDeleteID",
      "offset": 76
    }
  ],
  "location": "StepDefScenarios.uploadFileAndSaveFileID(String,String)"
});
formatter.result({
  "duration": 969382720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile1ToDeleteID",
      "offset": 40
    }
  ],
  "location": "StepDefScenarios.checkFileStatus(String)"
});
formatter.result({
  "duration": 241437315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.status\u003dPending",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 477262,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Upload a file with partial bytesCompleted - for Shared file to Delete 2",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I upload a file with payload \"sharedFile2ToDelete.json\" and save fileId to \"data.props-\u003esharedFile2ToDeleteID\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I check the status of the file with id \"data.props-\u003esharedFile2ToDeleteID\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify the value \"$.status\u003dPending\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "sharedFile2ToDelete.json",
      "offset": 30
    },
    {
      "val": "data.props-\u003esharedFile2ToDeleteID",
      "offset": 76
    }
  ],
  "location": "StepDefScenarios.uploadFileAndSaveFileID(String,String)"
});
formatter.result({
  "duration": 966009789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile2ToDeleteID",
      "offset": 40
    }
  ],
  "location": "StepDefScenarios.checkFileStatus(String)"
});
formatter.result({
  "duration": 250498501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.status\u003dPending",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 1834288,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Upload a file with partial bytesCompleted - for Shared file to Delete 3",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I upload a file with payload \"sharedFile3ToDelete.json\" and save fileId to \"data.props-\u003esharedFile3ToDeleteID\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I check the status of the file with id \"data.props-\u003esharedFile3ToDeleteID\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify the value \"$.status\u003dPending\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "sharedFile3ToDelete.json",
      "offset": 30
    },
    {
      "val": "data.props-\u003esharedFile3ToDeleteID",
      "offset": 76
    }
  ],
  "location": "StepDefScenarios.uploadFileAndSaveFileID(String,String)"
});
formatter.result({
  "duration": 976425736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile3ToDeleteID",
      "offset": 40
    }
  ],
  "location": "StepDefScenarios.checkFileStatus(String)"
});
formatter.result({
  "duration": 238758000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.status\u003dPending",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 266195,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Upload a file with partial bytesCompleted - for Shared file to Delete 4",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I upload a file with payload \"sharedFile4ToDelete.json\" and save fileId to \"data.props-\u003esharedFile4ToDeleteID\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I check the status of the file with id \"data.props-\u003esharedFile4ToDeleteID\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify the value \"$.status\u003dPending\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "sharedFile4ToDelete.json",
      "offset": 30
    },
    {
      "val": "data.props-\u003esharedFile4ToDeleteID",
      "offset": 76
    }
  ],
  "location": "StepDefScenarios.uploadFileAndSaveFileID(String,String)"
});
formatter.result({
  "duration": 988518519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile4ToDeleteID",
      "offset": 40
    }
  ],
  "location": "StepDefScenarios.checkFileStatus(String)"
});
formatter.result({
  "duration": 218630673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.status\u003dPending",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 308484,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Upload a file with partial bytesCompleted - for Shared file to Delete 5",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I upload a file with payload \"sharedFile5ToDelete.json\" and save fileId to \"data.props-\u003esharedFile5ToDeleteID\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I check the status of the file with id \"data.props-\u003esharedFile5ToDeleteID\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify the value \"$.status\u003dPending\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "sharedFile5ToDelete.json",
      "offset": 30
    },
    {
      "val": "data.props-\u003esharedFile5ToDeleteID",
      "offset": 76
    }
  ],
  "location": "StepDefScenarios.uploadFileAndSaveFileID(String,String)"
});
formatter.result({
  "duration": 1007007524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile5ToDeleteID",
      "offset": 40
    }
  ],
  "location": "StepDefScenarios.checkFileStatus(String)"
});
formatter.result({
  "duration": 212433815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.status\u003dPending",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 410808,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Upload a file with partial bytesCompleted - for Shared file to Delete 6",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;upload-a-file-with-partial-bytescompleted---for-\u003ctitle\u003e;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I upload a file with payload \"sharedFile6ToDelete.json\" and save fileId to \"data.props-\u003esharedFile6ToDeleteID\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I check the status of the file with id \"data.props-\u003esharedFile6ToDeleteID\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify the value \"$.status\u003dPending\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "sharedFile6ToDelete.json",
      "offset": 30
    },
    {
      "val": "data.props-\u003esharedFile6ToDeleteID",
      "offset": 76
    }
  ],
  "location": "StepDefScenarios.uploadFileAndSaveFileID(String,String)"
});
formatter.result({
  "duration": 1009774437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile6ToDeleteID",
      "offset": 40
    }
  ],
  "location": "StepDefScenarios.checkFileStatus(String)"
});
formatter.result({
  "duration": 246388533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.status\u003dPending",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 589782,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Update the upload status to partial and check the status of the file",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;update-the-upload-status-to-partial-and-check-the-status-of-the-file",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I update the bytes of a file with id \"data.props-\u003ecommonFileID\" as \"30\" less than it\u0027s size",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I check the status of the file with id \"data.props-\u003ecommonFileID\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I verify the value \"$.status\u003dPending\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I verify the value \"$.bytesCompleted\" is \"30\" less than \"$.size\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003ecommonFileID",
      "offset": 38
    },
    {
      "val": "30",
      "offset": 68
    }
  ],
  "location": "StepDefScenarios.updatBytesCompletedLess(String,int)"
});
formatter.result({
  "duration": 625019115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003ecommonFileID",
      "offset": 40
    }
  ],
  "location": "StepDefScenarios.checkFileStatus(String)"
});
formatter.result({
  "duration": 269326573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.status\u003dPending",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 359457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.bytesCompleted",
      "offset": 20
    },
    {
      "val": "30",
      "offset": 42
    },
    {
      "val": "$.size",
      "offset": 57
    }
  ],
  "location": "StepDefScenarios.verifyResponse(String,String,String)"
});
formatter.result({
  "duration": 322454,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Update the upload status to 100% and check the status of the file",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;update-the-upload-status-to-100%-and-check-the-status-of-the-file",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I update the bytes of a file with id \"data.props-\u003ecommonFileID\" as \"$.size\"",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I check the status of the file with id \"data.props-\u003ecommonFileID\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I verify the value \"$.status\u003dCompleted\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I verify the fields \"$.bytesCompleted\u003d$.size\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003ecommonFileID",
      "offset": 38
    },
    {
      "val": "$.size",
      "offset": 68
    }
  ],
  "location": "StepDefScenarios.updatBytesCompleted(String,String)"
});
formatter.result({
  "duration": 476328131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003ecommonFileID",
      "offset": 40
    }
  ],
  "location": "StepDefScenarios.checkFileStatus(String)"
});
formatter.result({
  "duration": 197278095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.status\u003dCompleted",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 420248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.bytesCompleted\u003d$.size",
      "offset": 21
    }
  ],
  "location": "StepDefScenarios.verifyResponseFields(String)"
});
formatter.result({
  "duration": 280543,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 45,
  "name": "Share a file to another existing user",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;share-a-file-to-another-existing-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I share the file with id \"data.props-\u003esharedFile1ID\" to user with id \"data.props-\u003euser2.Id\"",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I verify the value \"$.message\u003dSuccessfully Shared\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I check the files list of user \"data.props-\u003eUSER2_TOKEN\" and save response to \"data.props-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I verify the list \"data.props-\u003euser2.fileList\" NOT to contain \"data.props-\u003esharedFile1ID\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;share-a-file-to-another-existing-user;",
  "rows": [
    {
      "cells": [
        "Title",
        "Token",
        "File to Share",
        "File List"
      ],
      "line": 52,
      "id": "usecase-based-tests-for-/files-and-/upload-apis;share-a-file-to-another-existing-user;;1"
    },
    {
      "cells": [
        "Share to User2",
        "USER2_TOKEN",
        "sharedFile1ID",
        "user2.fileList"
      ],
      "line": 53,
      "id": "usecase-based-tests-for-/files-and-/upload-apis;share-a-file-to-another-existing-user;;2"
    },
    {
      "cells": [
        "Share to User2",
        "USER2_TOKEN",
        "sharedFile1ToDeleteID",
        "user2.fileList"
      ],
      "line": 54,
      "id": "usecase-based-tests-for-/files-and-/upload-apis;share-a-file-to-another-existing-user;;3"
    },
    {
      "cells": [
        "Share to User2",
        "USER2_TOKEN",
        "sharedFile2ToDeleteID",
        "user2.fileList"
      ],
      "line": 55,
      "id": "usecase-based-tests-for-/files-and-/upload-apis;share-a-file-to-another-existing-user;;4"
    },
    {
      "cells": [
        "Share to User2",
        "USER2_TOKEN",
        "sharedFile3ToDeleteID",
        "user2.fileList"
      ],
      "line": 56,
      "id": "usecase-based-tests-for-/files-and-/upload-apis;share-a-file-to-another-existing-user;;5"
    },
    {
      "cells": [
        "Share to User2",
        "USER2_TOKEN",
        "sharedFile4ToDeleteID",
        "user2.fileList"
      ],
      "line": 57,
      "id": "usecase-based-tests-for-/files-and-/upload-apis;share-a-file-to-another-existing-user;;6"
    },
    {
      "cells": [
        "Share to User2",
        "USER2_TOKEN",
        "sharedFile5ToDeleteID",
        "user2.fileList"
      ],
      "line": 58,
      "id": "usecase-based-tests-for-/files-and-/upload-apis;share-a-file-to-another-existing-user;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 53,
  "name": "Share a file to another existing user",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;share-a-file-to-another-existing-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I share the file with id \"data.props-\u003esharedFile1ID\" to user with id \"data.props-\u003euser2.Id\"",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I verify the value \"$.message\u003dSuccessfully Shared\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I check the files list of user \"data.props-\u003eUSER2_TOKEN\" and save response to \"data.props-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I verify the list \"data.props-\u003euser2.fileList\" NOT to contain \"data.props-\u003esharedFile1ID\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile1ID",
      "offset": 26
    },
    {
      "val": "data.props-\u003euser2.Id",
      "offset": 70
    }
  ],
  "location": "StepDefScenarios.shareFileToUser(String,String)"
});
formatter.result({
  "duration": 240023652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.message\u003dSuccessfully Shared",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 311127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eUSER2_TOKEN",
      "offset": 32
    },
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 79
    }
  ],
  "location": "StepDefScenarios.checkFilesListAndSaveResponse(String,String)"
});
formatter.result({
  "duration": 236787783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 19
    },
    {
      "val": "data.props-\u003esharedFile1ID",
      "offset": 63
    }
  ],
  "location": "StepDefScenarios.i_verify_list_NOT_to_contain(String,String)"
});
formatter.result({
  "duration": 24199160,
  "error_message": "java.lang.AssertionError: \nExpected: not a collection containing \"8417e00d-d516-4279-9e62-f0c857495ba2\"\n     but: was \u003c[\"8417e00d-d516-4279-9e62-f0c857495ba2\",\"bb6a5208-30b1-4dbf-9105-056e0de17f15\"]\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:865)\r\n\tat org.junit.Assert.assertThat(Assert.java:832)\r\n\tat com.qube.test.StepDefScenarios.i_verify_list_NOT_to_contain(StepDefScenarios.java:203)\r\n\tat ✽.Then I verify the list \"data.props-\u003euser2.fileList\" NOT to contain \"data.props-\u003esharedFile1ID\"(src/test/resources/features/APIScenarioTests.feature:49)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 54,
  "name": "Share a file to another existing user",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;share-a-file-to-another-existing-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I share the file with id \"data.props-\u003esharedFile1ID\" to user with id \"data.props-\u003euser2.Id\"",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I verify the value \"$.message\u003dSuccessfully Shared\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I check the files list of user \"data.props-\u003eUSER2_TOKEN\" and save response to \"data.props-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I verify the list \"data.props-\u003euser2.fileList\" NOT to contain \"data.props-\u003esharedFile1ID\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile1ID",
      "offset": 26
    },
    {
      "val": "data.props-\u003euser2.Id",
      "offset": 70
    }
  ],
  "location": "StepDefScenarios.shareFileToUser(String,String)"
});
formatter.result({
  "duration": 211945603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.message\u003dSuccessfully Shared",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 424401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eUSER2_TOKEN",
      "offset": 32
    },
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 79
    }
  ],
  "location": "StepDefScenarios.checkFilesListAndSaveResponse(String,String)"
});
formatter.result({
  "duration": 250351244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 19
    },
    {
      "val": "data.props-\u003esharedFile1ID",
      "offset": 63
    }
  ],
  "location": "StepDefScenarios.i_verify_list_NOT_to_contain(String,String)"
});
formatter.result({
  "duration": 3185273,
  "error_message": "java.lang.AssertionError: \nExpected: not a collection containing \"8417e00d-d516-4279-9e62-f0c857495ba2\"\n     but: was \u003c[\"8417e00d-d516-4279-9e62-f0c857495ba2\",\"bb6a5208-30b1-4dbf-9105-056e0de17f15\"]\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:865)\r\n\tat org.junit.Assert.assertThat(Assert.java:832)\r\n\tat com.qube.test.StepDefScenarios.i_verify_list_NOT_to_contain(StepDefScenarios.java:203)\r\n\tat ✽.Then I verify the list \"data.props-\u003euser2.fileList\" NOT to contain \"data.props-\u003esharedFile1ID\"(src/test/resources/features/APIScenarioTests.feature:49)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 55,
  "name": "Share a file to another existing user",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;share-a-file-to-another-existing-user;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I share the file with id \"data.props-\u003esharedFile1ID\" to user with id \"data.props-\u003euser2.Id\"",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I verify the value \"$.message\u003dSuccessfully Shared\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I check the files list of user \"data.props-\u003eUSER2_TOKEN\" and save response to \"data.props-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I verify the list \"data.props-\u003euser2.fileList\" NOT to contain \"data.props-\u003esharedFile1ID\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile1ID",
      "offset": 26
    },
    {
      "val": "data.props-\u003euser2.Id",
      "offset": 70
    }
  ],
  "location": "StepDefScenarios.shareFileToUser(String,String)"
});
formatter.result({
  "duration": 214855241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.message\u003dSuccessfully Shared",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 204271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eUSER2_TOKEN",
      "offset": 32
    },
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 79
    }
  ],
  "location": "StepDefScenarios.checkFilesListAndSaveResponse(String,String)"
});
formatter.result({
  "duration": 224624392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 19
    },
    {
      "val": "data.props-\u003esharedFile1ID",
      "offset": 63
    }
  ],
  "location": "StepDefScenarios.i_verify_list_NOT_to_contain(String,String)"
});
formatter.result({
  "duration": 2216022,
  "error_message": "java.lang.AssertionError: \nExpected: not a collection containing \"8417e00d-d516-4279-9e62-f0c857495ba2\"\n     but: was \u003c[\"8417e00d-d516-4279-9e62-f0c857495ba2\",\"bb6a5208-30b1-4dbf-9105-056e0de17f15\"]\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:865)\r\n\tat org.junit.Assert.assertThat(Assert.java:832)\r\n\tat com.qube.test.StepDefScenarios.i_verify_list_NOT_to_contain(StepDefScenarios.java:203)\r\n\tat ✽.Then I verify the list \"data.props-\u003euser2.fileList\" NOT to contain \"data.props-\u003esharedFile1ID\"(src/test/resources/features/APIScenarioTests.feature:49)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 56,
  "name": "Share a file to another existing user",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;share-a-file-to-another-existing-user;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I share the file with id \"data.props-\u003esharedFile1ID\" to user with id \"data.props-\u003euser2.Id\"",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I verify the value \"$.message\u003dSuccessfully Shared\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I check the files list of user \"data.props-\u003eUSER2_TOKEN\" and save response to \"data.props-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I verify the list \"data.props-\u003euser2.fileList\" NOT to contain \"data.props-\u003esharedFile1ID\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile1ID",
      "offset": 26
    },
    {
      "val": "data.props-\u003euser2.Id",
      "offset": 70
    }
  ],
  "location": "StepDefScenarios.shareFileToUser(String,String)"
});
formatter.result({
  "duration": 207911150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.message\u003dSuccessfully Shared",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 220507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eUSER2_TOKEN",
      "offset": 32
    },
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 79
    }
  ],
  "location": "StepDefScenarios.checkFilesListAndSaveResponse(String,String)"
});
formatter.result({
  "duration": 264246222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 19
    },
    {
      "val": "data.props-\u003esharedFile1ID",
      "offset": 63
    }
  ],
  "location": "StepDefScenarios.i_verify_list_NOT_to_contain(String,String)"
});
formatter.result({
  "duration": 956790,
  "error_message": "java.lang.AssertionError: \nExpected: not a collection containing \"8417e00d-d516-4279-9e62-f0c857495ba2\"\n     but: was \u003c[\"8417e00d-d516-4279-9e62-f0c857495ba2\",\"bb6a5208-30b1-4dbf-9105-056e0de17f15\"]\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:865)\r\n\tat org.junit.Assert.assertThat(Assert.java:832)\r\n\tat com.qube.test.StepDefScenarios.i_verify_list_NOT_to_contain(StepDefScenarios.java:203)\r\n\tat ✽.Then I verify the list \"data.props-\u003euser2.fileList\" NOT to contain \"data.props-\u003esharedFile1ID\"(src/test/resources/features/APIScenarioTests.feature:49)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 57,
  "name": "Share a file to another existing user",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;share-a-file-to-another-existing-user;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I share the file with id \"data.props-\u003esharedFile1ID\" to user with id \"data.props-\u003euser2.Id\"",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I verify the value \"$.message\u003dSuccessfully Shared\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I check the files list of user \"data.props-\u003eUSER2_TOKEN\" and save response to \"data.props-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I verify the list \"data.props-\u003euser2.fileList\" NOT to contain \"data.props-\u003esharedFile1ID\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile1ID",
      "offset": 26
    },
    {
      "val": "data.props-\u003euser2.Id",
      "offset": 70
    }
  ],
  "location": "StepDefScenarios.shareFileToUser(String,String)"
});
formatter.result({
  "duration": 208961203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.message\u003dSuccessfully Shared",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 214466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eUSER2_TOKEN",
      "offset": 32
    },
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 79
    }
  ],
  "location": "StepDefScenarios.checkFilesListAndSaveResponse(String,String)"
});
formatter.result({
  "duration": 253369626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 19
    },
    {
      "val": "data.props-\u003esharedFile1ID",
      "offset": 63
    }
  ],
  "location": "StepDefScenarios.i_verify_list_NOT_to_contain(String,String)"
});
formatter.result({
  "duration": 669074,
  "error_message": "java.lang.AssertionError: \nExpected: not a collection containing \"8417e00d-d516-4279-9e62-f0c857495ba2\"\n     but: was \u003c[\"8417e00d-d516-4279-9e62-f0c857495ba2\",\"bb6a5208-30b1-4dbf-9105-056e0de17f15\"]\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:865)\r\n\tat org.junit.Assert.assertThat(Assert.java:832)\r\n\tat com.qube.test.StepDefScenarios.i_verify_list_NOT_to_contain(StepDefScenarios.java:203)\r\n\tat ✽.Then I verify the list \"data.props-\u003euser2.fileList\" NOT to contain \"data.props-\u003esharedFile1ID\"(src/test/resources/features/APIScenarioTests.feature:49)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 58,
  "name": "Share a file to another existing user",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;share-a-file-to-another-existing-user;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I share the file with id \"data.props-\u003esharedFile1ID\" to user with id \"data.props-\u003euser2.Id\"",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I verify the value \"$.message\u003dSuccessfully Shared\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I check the files list of user \"data.props-\u003eUSER2_TOKEN\" and save response to \"data.props-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I verify the list \"data.props-\u003euser2.fileList\" NOT to contain \"data.props-\u003esharedFile1ID\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile1ID",
      "offset": 26
    },
    {
      "val": "data.props-\u003euser2.Id",
      "offset": 70
    }
  ],
  "location": "StepDefScenarios.shareFileToUser(String,String)"
});
formatter.result({
  "duration": 213318487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.message\u003dSuccessfully Shared",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 427421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eUSER2_TOKEN",
      "offset": 32
    },
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 79
    }
  ],
  "location": "StepDefScenarios.checkFilesListAndSaveResponse(String,String)"
});
formatter.result({
  "duration": 219363558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 19
    },
    {
      "val": "data.props-\u003esharedFile1ID",
      "offset": 63
    }
  ],
  "location": "StepDefScenarios.i_verify_list_NOT_to_contain(String,String)"
});
formatter.result({
  "duration": 2415385,
  "error_message": "java.lang.AssertionError: \nExpected: not a collection containing \"8417e00d-d516-4279-9e62-f0c857495ba2\"\n     but: was \u003c[\"8417e00d-d516-4279-9e62-f0c857495ba2\",\"bb6a5208-30b1-4dbf-9105-056e0de17f15\"]\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:865)\r\n\tat org.junit.Assert.assertThat(Assert.java:832)\r\n\tat com.qube.test.StepDefScenarios.i_verify_list_NOT_to_contain(StepDefScenarios.java:203)\r\n\tat ✽.Then I verify the list \"data.props-\u003euser2.fileList\" NOT to contain \"data.props-\u003esharedFile1ID\"(src/test/resources/features/APIScenarioTests.feature:49)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 61,
  "name": "Share a file which is partially uploaded",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;share-a-file-which-is-partially-uploaded",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "I share the file with id \"data.props-\u003epartialFile2ID\" to user with id \"data.props-\u003euser2.Id\"",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "I verify the value \"$.message\u003dSuccessfully Shared\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I check the files list of user \"data.props-\u003eUSER2_TOKEN\" with \"getSharedFiles\u003dtest\" and save response to \"data.props-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "I verify the list \"data.props-\u003euser2.fileList\" to contain \"data.props-\u003esharedFile1ID\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003epartialFile2ID",
      "offset": 26
    },
    {
      "val": "data.props-\u003euser2.Id",
      "offset": 71
    }
  ],
  "location": "StepDefScenarios.shareFileToUser(String,String)"
});
formatter.result({
  "duration": 214672114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.message\u003dSuccessfully Shared",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "duration": 289227,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 19
    },
    {
      "val": "data.props-\u003esharedFile1ID",
      "offset": 59
    }
  ],
  "location": "StepDefScenarios.i_verify_list_to_contain(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 68,
  "name": "Share a file to another non-existing user",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;share-a-file-to-another-non-existing-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 67,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "I share the file with id \"data.props-\u003esharedFile1ID\" to user with id \"data.props-\u003eunknown_user.Id\"",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "I verify the value \"$.message\u003dUser doesn\u0027t exist\"",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I check the files list of user \"data.props-\u003eunknown_user.Token\" and save response to \"data.props-\u003eunknown_user.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I verify the response to contain error \"user doesn\u0027t exist\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile1ID",
      "offset": 26
    },
    {
      "val": "data.props-\u003eunknown_user.Id",
      "offset": 70
    }
  ],
  "location": "StepDefScenarios.shareFileToUser(String,String)"
});
formatter.result({
  "duration": 234884021,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003c200\u003e but was:\u003c500\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:234)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:241)\r\n\tat com.qube.test.StepDefScenarios.shareFileToUser(StepDefScenarios.java:127)\r\n\tat ✽.Given I share the file with id \"data.props-\u003esharedFile1ID\" to user with id \"data.props-\u003eunknown_user.Id\"(src/test/resources/features/APIScenarioTests.feature:69)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.message\u003dUser doesn\u0027t exist",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eunknown_user.Token",
      "offset": 32
    },
    {
      "val": "data.props-\u003eunknown_user.fileList",
      "offset": 86
    }
  ],
  "location": "StepDefScenarios.checkFilesListAndSaveResponse(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "user doesn\u0027t exist",
      "offset": 40
    }
  ],
  "location": "StepDefScenarios.verifyResponseForError(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 75,
  "name": "Accept a file and check the file status and the files list of user1 and user2",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;accept-a-file-and-check-the-file-status-and-the-files-list-of-user1-and-user2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 74,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "I accept a file with id \"data.props-\u003esharedFile1ID\" as \"data.props-\u003eUSER2_TOKEN\"",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "I check the files list of user \"data.props-\u003eUSER2_TOKEN\" and save response to \"data.props-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "I verify the list \"data.props-\u003euser2.fileList\" to contain \"data.props-\u003esharedFile1ID\"",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "I check the shared files list of user \"data.props-\u003eUSER2_TOKEN\" and save response to \"data.props-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "I verify the list \"data.props-\u003euser2.fileList\" NOT to contain \"data.props-\u003esharedFile1ID\"",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "I check the files list of user \"data.props-\u003eUSER1_TOKEN\" and save response to \"data.props-\u003euser1.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "I verify the list \"data.props-\u003euser1.fileList\" to contain \"data.props-\u003esharedFile1ID\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile1ID",
      "offset": 25
    },
    {
      "val": "data.props-\u003eUSER2_TOKEN",
      "offset": 56
    }
  ],
  "location": "StepDefScenarios.acceptAFile(String,String)"
});
formatter.result({
  "duration": 227752272,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003c200\u003e but was:\u003c400\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:234)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:241)\r\n\tat com.qube.test.StepDefScenarios.acceptAFile(StepDefScenarios.java:156)\r\n\tat ✽.Given I accept a file with id \"data.props-\u003esharedFile1ID\" as \"data.props-\u003eUSER2_TOKEN\"(src/test/resources/features/APIScenarioTests.feature:76)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eUSER2_TOKEN",
      "offset": 32
    },
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 79
    }
  ],
  "location": "StepDefScenarios.checkFilesListAndSaveResponse(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 19
    },
    {
      "val": "data.props-\u003esharedFile1ID",
      "offset": 59
    }
  ],
  "location": "StepDefScenarios.i_verify_list_to_contain(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eUSER2_TOKEN",
      "offset": 39
    },
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 86
    }
  ],
  "location": "StepDefScenarios.checkSharedFiles(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 19
    },
    {
      "val": "data.props-\u003esharedFile1ID",
      "offset": 63
    }
  ],
  "location": "StepDefScenarios.i_verify_list_NOT_to_contain(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eUSER1_TOKEN",
      "offset": 32
    },
    {
      "val": "data.props-\u003euser1.fileList",
      "offset": 79
    }
  ],
  "location": "StepDefScenarios.checkFilesListAndSaveResponse(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003euser1.fileList",
      "offset": 19
    },
    {
      "val": "data.props-\u003esharedFile1ID",
      "offset": 59
    }
  ],
  "location": "StepDefScenarios.i_verify_list_to_contain(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 85,
  "name": "Reject a file and check the file status and the files list of user1 and user2",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;reject-a-file-and-check-the-file-status-and-the-files-list-of-user1-and-user2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 84,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "I reject a file with id \"data.props-\u003epartialFile2ID\" as \"data.props-\u003eUSER2_TOKEN\"",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "I check the files list of user \"data.props-\u003eUSER2_TOKEN\" and save response to \"data.props-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "I verify the list \"data.props-\u003euser2.fileList\" NOT to contain \"data.props-\u003epartialFile2ID\"",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "I check the shared files list of user \"data.props-\u003eUSER2_TOKEN\" and save response to \"data.props-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "I verify the list \"data.props-\u003euser2.fileList\" NOT to contain \"data.props-\u003epartialFile2ID\"",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "I check the files list of user \"data.props-\u003eUSER1_TOKEN\" and save response to \"data.props-\u003euser1.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "I verify the list \"data.props-\u003euser1.fileList\" to contain \"data.props-\u003epartialFile2ID\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003epartialFile2ID",
      "offset": 25
    },
    {
      "val": "data.props-\u003eUSER2_TOKEN",
      "offset": 57
    }
  ],
  "location": "StepDefScenarios.rejectAFile(String,String)"
});
formatter.result({
  "duration": 254158770,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003c200\u003e but was:\u003c400\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:234)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:241)\r\n\tat com.qube.test.StepDefScenarios.rejectAFile(StepDefScenarios.java:164)\r\n\tat ✽.Given I reject a file with id \"data.props-\u003epartialFile2ID\" as \"data.props-\u003eUSER2_TOKEN\"(src/test/resources/features/APIScenarioTests.feature:86)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eUSER2_TOKEN",
      "offset": 32
    },
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 79
    }
  ],
  "location": "StepDefScenarios.checkFilesListAndSaveResponse(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 19
    },
    {
      "val": "data.props-\u003epartialFile2ID",
      "offset": 63
    }
  ],
  "location": "StepDefScenarios.i_verify_list_NOT_to_contain(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eUSER2_TOKEN",
      "offset": 39
    },
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 86
    }
  ],
  "location": "StepDefScenarios.checkSharedFiles(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 19
    },
    {
      "val": "data.props-\u003epartialFile2ID",
      "offset": 63
    }
  ],
  "location": "StepDefScenarios.i_verify_list_NOT_to_contain(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eUSER1_TOKEN",
      "offset": 32
    },
    {
      "val": "data.props-\u003euser1.fileList",
      "offset": 79
    }
  ],
  "location": "StepDefScenarios.checkFilesListAndSaveResponse(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003euser1.fileList",
      "offset": 19
    },
    {
      "val": "data.props-\u003epartialFile2ID",
      "offset": 59
    }
  ],
  "location": "StepDefScenarios.i_verify_list_to_contain(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 95,
  "name": "Delete a file",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;delete-a-file",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 94,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 96,
  "name": "I delete a file with id \"data.props-\u003efile1ToDeleteID\" as \"data.props-\u003eUSER1_TOKEN\"",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "I check the files list of user \"data.props-\u003eUSER1_TOKEN\" and save response to \"data.props-\u003euser1.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "I verify the list \"data.props-\u003euser1.fileList\" NOT to contain \"data.props-\u003efile1ToDeleteID\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003efile1ToDeleteID",
      "offset": 25
    },
    {
      "val": "data.props-\u003eUSER1_TOKEN",
      "offset": 58
    }
  ],
  "location": "StepDefScenarios.deleteAFile(String,String)"
});
formatter.result({
  "duration": 194798144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eUSER1_TOKEN",
      "offset": 32
    },
    {
      "val": "data.props-\u003euser1.fileList",
      "offset": 79
    }
  ],
  "location": "StepDefScenarios.checkFilesListAndSaveResponse(String,String)"
});
formatter.result({
  "duration": 316994274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003euser1.fileList",
      "offset": 19
    },
    {
      "val": "data.props-\u003efile1ToDeleteID",
      "offset": 63
    }
  ],
  "location": "StepDefScenarios.i_verify_list_NOT_to_contain(String,String)"
});
formatter.result({
  "duration": 1286795,
  "status": "passed"
});
formatter.scenario({
  "line": 101,
  "name": "Delete a file which is pending acceptance and try accepting the file",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;delete-a-file-which-is-pending-acceptance-and-try-accepting-the-file",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 100,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 102,
  "name": "I delete a file with id \"data.props-\u003esharedFile1ToDeleteID\" as \"data.props-\u003eUSER1_TOKEN\"",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "I accept a file with id \"data.props-\u003esharedFile1ToDeleteID\" as \"data.props-\u003eUSER2_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "I verify the value \"$.error\u003dfile deleted\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile1ToDeleteID",
      "offset": 25
    },
    {
      "val": "data.props-\u003eUSER1_TOKEN",
      "offset": 64
    }
  ],
  "location": "StepDefScenarios.deleteAFile(String,String)"
});
formatter.result({
  "duration": 218198342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile1ToDeleteID",
      "offset": 25
    },
    {
      "val": "data.props-\u003eUSER2_TOKEN",
      "offset": 64
    }
  ],
  "location": "StepDefScenarios.acceptAFile(String,String)"
});
formatter.result({
  "duration": 259390532,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003c200\u003e but was:\u003c404\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:234)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:241)\r\n\tat com.qube.test.StepDefScenarios.acceptAFile(StepDefScenarios.java:156)\r\n\tat ✽.When I accept a file with id \"data.props-\u003esharedFile1ToDeleteID\" as \"data.props-\u003eUSER2_TOKEN\"(src/test/resources/features/APIScenarioTests.feature:103)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.error\u003dfile deleted",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 107,
  "name": "Delete a file which is pending acceptance and try rejecting the file",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;delete-a-file-which-is-pending-acceptance-and-try-rejecting-the-file",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 106,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "I delete a file with id \"data.props-\u003esharedFile2ToDeleteID\" as \"data.props-\u003eUSER1_TOKEN\"",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "I reject a file with id \"data.props-\u003esharedFile2ToDeleteID\" as \"data.props-\u003eUSER2_TOKEN\"",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "I verify the value \"$.error\u003dfile deleted\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile2ToDeleteID",
      "offset": 25
    },
    {
      "val": "data.props-\u003eUSER1_TOKEN",
      "offset": 64
    }
  ],
  "location": "StepDefScenarios.deleteAFile(String,String)"
});
formatter.result({
  "duration": 253370004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile2ToDeleteID",
      "offset": 25
    },
    {
      "val": "data.props-\u003eUSER2_TOKEN",
      "offset": 64
    }
  ],
  "location": "StepDefScenarios.rejectAFile(String,String)"
});
formatter.result({
  "duration": 252978075,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003c200\u003e but was:\u003c404\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:234)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:241)\r\n\tat com.qube.test.StepDefScenarios.rejectAFile(StepDefScenarios.java:164)\r\n\tat ✽.When I reject a file with id \"data.props-\u003esharedFile2ToDeleteID\" as \"data.props-\u003eUSER2_TOKEN\"(src/test/resources/features/APIScenarioTests.feature:109)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.error\u003dfile deleted",
      "offset": 20
    }
  ],
  "location": "StepDefScenarios.verifyResponseValues(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 113,
  "name": "Delete a shared file as user2 from Inbox shared by user1",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;delete-a-shared-file-as-user2-from-inbox-shared-by-user1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 112,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 114,
  "name": "I delete a file with id \"data.props-\u003esharedFile3ToDeleteID\" as \"data.props-\u003eUSER2_TOKEN\"",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "I check the files list of user \"data.props-\u003eUSER2_TOKEN\" and save response to \"data.props-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "I verify \"data.props-\u003euser2.fileList\" NOT to contain \"data.props-\u003esharedFile3ToDeleteID\"",
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "I check the files list of user \"data.props-\u003eUSER2_TOKEN\" and save response to \"results-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "I verify \"data.props-\u003euser2.fileList\" to contain \"data.props-\u003esharedFile3ToDeleteID\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile3ToDeleteID",
      "offset": 25
    },
    {
      "val": "data.props-\u003eUSER2_TOKEN",
      "offset": 64
    }
  ],
  "location": "StepDefScenarios.deleteAFile(String,String)"
});
formatter.result({
  "duration": 210908766,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003c200\u003e but was:\u003c500\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:234)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:241)\r\n\tat com.qube.test.StepDefScenarios.deleteAFile(StepDefScenarios.java:177)\r\n\tat ✽.Given I delete a file with id \"data.props-\u003esharedFile3ToDeleteID\" as \"data.props-\u003eUSER2_TOKEN\"(src/test/resources/features/APIScenarioTests.feature:114)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eUSER2_TOKEN",
      "offset": 32
    },
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 79
    }
  ],
  "location": "StepDefScenarios.checkFilesListAndSaveResponse(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 10
    },
    {
      "val": "data.props-\u003esharedFile3ToDeleteID",
      "offset": 54
    }
  ],
  "location": "StepDefScenarios.i_verify_NOT_to_contain(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eUSER2_TOKEN",
      "offset": 32
    },
    {
      "val": "results-\u003euser2.fileList",
      "offset": 79
    }
  ],
  "location": "StepDefScenarios.checkFilesListAndSaveResponse(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003euser2.fileList",
      "offset": 10
    },
    {
      "val": "data.props-\u003esharedFile3ToDeleteID",
      "offset": 50
    }
  ],
  "location": "StepDefScenarios.i_verify_to_contain(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 121,
  "name": "Delete a shared file as user2 from Dashboard shared by user1",
  "description": "",
  "id": "usecase-based-tests-for-/files-and-/upload-apis;delete-a-shared-file-as-user2-from-dashboard-shared-by-user1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 120,
      "name": "@watch"
    }
  ]
});
formatter.step({
  "line": 122,
  "name": "I delete a file with id \"data.props-\u003esharedFile4ToDeleteID\" as \"data.props-\u003eUSER2_TOKEN\"",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "I check the files list of user \"data.props-\u003eUSER2_TOKEN\" and save response to \"results-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "I verify \"results-\u003euser2.fileList\" NOT to contain \"data.props-\u003esharedFile4ToDeleteID\"",
  "keyword": "Then "
});
formatter.step({
  "line": 125,
  "name": "I check the files list of user \"data.props-\u003eUSER2_TOKEN\" and save response to \"results-\u003euser2.fileList\"",
  "keyword": "When "
});
formatter.step({
  "line": 126,
  "name": "I verify \"results-\u003euser2.fileList\" to contain \"data.props-\u003esharedFile4ToDeleteID\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003esharedFile4ToDeleteID",
      "offset": 25
    },
    {
      "val": "data.props-\u003eUSER2_TOKEN",
      "offset": 64
    }
  ],
  "location": "StepDefScenarios.deleteAFile(String,String)"
});
formatter.result({
  "duration": 195534804,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003c200\u003e but was:\u003c500\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:234)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:241)\r\n\tat com.qube.test.StepDefScenarios.deleteAFile(StepDefScenarios.java:177)\r\n\tat ✽.Given I delete a file with id \"data.props-\u003esharedFile4ToDeleteID\" as \"data.props-\u003eUSER2_TOKEN\"(src/test/resources/features/APIScenarioTests.feature:122)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eUSER2_TOKEN",
      "offset": 32
    },
    {
      "val": "results-\u003euser2.fileList",
      "offset": 79
    }
  ],
  "location": "StepDefScenarios.checkFilesListAndSaveResponse(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "results-\u003euser2.fileList",
      "offset": 10
    },
    {
      "val": "data.props-\u003esharedFile4ToDeleteID",
      "offset": 51
    }
  ],
  "location": "StepDefScenarios.i_verify_NOT_to_contain(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "data.props-\u003eUSER2_TOKEN",
      "offset": 32
    },
    {
      "val": "results-\u003euser2.fileList",
      "offset": 79
    }
  ],
  "location": "StepDefScenarios.checkFilesListAndSaveResponse(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "results-\u003euser2.fileList",
      "offset": 10
    },
    {
      "val": "data.props-\u003esharedFile4ToDeleteID",
      "offset": 47
    }
  ],
  "location": "StepDefScenarios.i_verify_to_contain(String,String)"
});
formatter.result({
  "status": "skipped"
});
});