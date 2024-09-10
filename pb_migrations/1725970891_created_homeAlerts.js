/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "roum12lpu77z9bk",
    "created": "2024-09-10 12:21:31.107Z",
    "updated": "2024-09-10 12:21:31.107Z",
    "name": "homeAlerts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tiwgfcmj",
        "name": "message",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      },
      {
        "system": false,
        "id": "3ltdwkz8",
        "name": "hideAfterDate",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "q1xvwxpr",
        "name": "color",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "info",
            "warning",
            "error"
          ]
        }
      },
      {
        "system": false,
        "id": "sglvtbp9",
        "name": "order",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("roum12lpu77z9bk");

  return dao.deleteCollection(collection);
})
