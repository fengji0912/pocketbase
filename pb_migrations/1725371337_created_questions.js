/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const collection = new Collection({
      "id": "upgq3p5fq6carkc",
      "created": "2024-09-03 13:48:57.745Z",
      "updated": "2024-09-03 13:48:57.745Z",
      "name": "questions",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "53hwlos9",
          "name": "question",
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
          "id": "abnpjloa",
          "name": "frequency",
          "type": "number",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": 0,
            "max": null,
            "noDecimal": false
          }
        },
        {
          "system": false,
          "id": "o9eavgom",
          "name": "nsfw",
          "type": "bool",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {}
        }
      ],
      "indexes": [
        "CREATE INDEX `idx_Af4jWaO` ON `questions` (`question`)",
        "CREATE INDEX `idx_M7kO5Qn` ON `questions` (`frequency`)",
        "CREATE INDEX `idx_brxXeVJ` ON `questions` (`nsfw`)",
        "CREATE INDEX `idx_KABISvP` ON `questions` (\n  `question`,\n  `nsfw`\n)"
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
    const collection = dao.findCollectionByNameOrId("upgq3p5fq6carkc");
  
    return dao.deleteCollection(collection);
  })