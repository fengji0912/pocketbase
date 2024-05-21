/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2023-12-18 10:55:15.799Z",
      "updated": "2024-05-21 14:18:28.276Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
          "name": "name",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "mimeTypes": [
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif",
              "image/webp"
            ],
            "thumbs": null,
            "maxSelect": 1,
            "maxSize": 5242880,
            "protected": false
          }
        }
      ],
      "indexes": [],
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": false,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "onlyVerified": false,
        "requireEmail": false
      }
    },
    {
      "id": "ugoezatin5hrcvy",
      "created": "2024-01-25 10:41:46.432Z",
      "updated": "2024-05-21 14:18:28.276Z",
      "name": "collections",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "ioznj2jm",
          "name": "title",
          "type": "text",
          "required": false,
          "presentable": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "1hjvzdci",
          "name": "user",
          "type": "relation",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": true,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        }
      ],
      "indexes": [],
      "listRule": "user = @request.auth.id",
      "viewRule": "user = @request.auth.id",
      "createRule": "user = @request.auth.id",
      "updateRule": "user = @request.auth.id",
      "deleteRule": "user = @request.auth.id",
      "options": {}
    },
    {
      "id": "t51ag0vmkdfbl79",
      "created": "2024-01-25 10:44:19.544Z",
      "updated": "2024-05-21 14:18:28.277Z",
      "name": "collectionItems",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "pt8uxiwn",
          "name": "linkedItemId",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "hx0izbom",
          "name": "cslData",
          "type": "json",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "maxSize": 2000000
          }
        },
        {
          "system": false,
          "id": "57wsmnpt",
          "name": "collection",
          "type": "relation",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "ugoezatin5hrcvy",
            "cascadeDelete": true,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        }
      ],
      "indexes": [],
      "listRule": "collection.user.id = @request.auth.id",
      "viewRule": "collection.user.id = @request.auth.id",
      "createRule": "collection.user.id = @request.auth.id",
      "updateRule": "collection.user.id = @request.auth.id",
      "deleteRule": "collection.user.id = @request.auth.id",
      "options": {}
    },
    {
      "id": "l7w3a7sseyvt3to",
      "created": "2024-03-05 15:41:17.121Z",
      "updated": "2024-05-21 14:18:28.277Z",
      "name": "savedSearches",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "w6jer8bc",
          "name": "title",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "hwzao6w1",
          "name": "searchData",
          "type": "json",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "maxSize": 2000000
          }
        },
        {
          "system": false,
          "id": "vkbfqsxe",
          "name": "user",
          "type": "relation",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        }
      ],
      "indexes": [],
      "listRule": "user = @request.auth.id",
      "viewRule": "user = @request.auth.id",
      "createRule": "user = @request.auth.id",
      "updateRule": "user = @request.auth.id",
      "deleteRule": "user = @request.auth.id",
      "options": {}
    },
    {
      "id": "ngwge0w6mltul66",
      "created": "2024-03-08 14:03:09.513Z",
      "updated": "2024-05-21 14:18:28.277Z",
      "name": "sharedLinks",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "huhkyjrs",
          "name": "searchData",
          "type": "json",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "maxSize": 2000000
          }
        },
        {
          "system": false,
          "id": "exbw0xml",
          "name": "user",
          "type": "relation",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        }
      ],
      "indexes": [],
      "listRule": "user = @request.auth.id && @request.auth.id != \"\"",
      "viewRule": "",
      "createRule": "user = @request.auth.id",
      "updateRule": "user = @request.auth.id && @request.auth.id != \"\"",
      "deleteRule": "user = @request.auth.id && @request.auth.id != \"\" ",
      "options": {}
    },
    {
      "id": "ozvy5xqyyn1vgb4",
      "created": "2024-05-21 14:18:28.277Z",
      "updated": "2024-05-21 14:18:28.277Z",
      "name": "itemsCache",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "fi2gvhl3",
          "name": "promptId",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "9ohqjla6",
          "name": "itemId",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "7fmowini",
          "name": "parameter",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "uqvatpzs",
          "name": "llmResponse",
          "type": "json",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "maxSize": 2000000
          }
        },
        {
          "system": false,
          "id": "dfkqkir2",
          "name": "isCollectionItem",
          "type": "bool",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {}
        }
      ],
      "indexes": [
        "CREATE INDEX `idx_pheNT3l` ON `itemsCache` (`promptId`)",
        "CREATE INDEX `idx_lryRVIK` ON `itemsCache` (`itemId`)",
        "CREATE INDEX `idx_Ym3T4lY` ON `itemsCache` (\n  `promptId`,\n  `itemId`\n)",
        "CREATE INDEX `idx_LZRBYY3` ON `itemsCache` (\n  `promptId`,\n  `itemId`,\n  `parameter`\n)",
        "CREATE INDEX `idx_W67REdf` ON `itemsCache` (\n  `promptId`,\n  `parameter`\n)"
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": "",
      "deleteRule": "",
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
