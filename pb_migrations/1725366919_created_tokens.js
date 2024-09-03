/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const collection = new Collection({
      "id": "tscevgknti5u83v",
      "created": "2024-09-03 12:35:19.604Z",
      "updated": "2024-09-03 12:35:19.604Z",
      "name": "tokens",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "wnvkhsvq",
          "name": "active",
          "type": "bool",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "rsxxyxfx",
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
        },
        {
          "system": false,
          "id": "tdsy7hio",
          "name": "reason",
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
          "id": "rbaekdrl",
          "name": "creator",
          "type": "select",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "Allard",
              "Yaser",
              "Team"
            ]
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `idx_CrrVpB9` ON `tokens` (`active`)",
        "CREATE INDEX `idx_9FchPl9` ON `tokens` (`user`)",
        "CREATE INDEX `idx_OikGhYK` ON `tokens` (`creator`)"
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    });
  
    return Dao(db).saveCollection(collection);
  }, (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("tscevgknti5u83v");
  
    return dao.deleteCollection(collection);
  })