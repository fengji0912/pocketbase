/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("ozvy5xqyyn1vgb4")
  
    collection.indexes = [
      "CREATE INDEX `idx_pheNT3l` ON `itemsCache` (`promptId`)",
      "CREATE INDEX `idx_lryRVIK` ON `itemsCache` (`itemId`)",
      "CREATE INDEX `idx_Ym3T4lY` ON `itemsCache` (\n  `promptId`,\n  `itemId`\n)",
      "CREATE INDEX `idx_LZRBYY3` ON `itemsCache` (\n  `promptId`,\n  `itemId`,\n  `parameter`\n)",
      "CREATE INDEX `idx_W67REdf` ON `itemsCache` (\n  `promptId`,\n  `parameter`\n)",
      "CREATE INDEX `idx_sisbo72` ON `itemsCache` (\n  `promptId`,\n  `itemId`,\n  `parameter`,\n  `language`\n)",
      "CREATE INDEX `idx_gTKCr9n` ON `itemsCache` (\n  `promptId`,\n  `itemId`,\n  `language`\n)",
      "CREATE INDEX `idx_fe0jd2N` ON `itemsCache` (\n  `promptId`,\n  `parameter`,\n  `language`\n)",
      "CREATE INDEX `idx_LifDMJb` ON `itemsCache` (`language`)",
      "CREATE INDEX `idx_HXU3Kd8` ON `itemsCache` (`seed`)",
      "CREATE INDEX `idx_CUeoQa4` ON `itemsCache` (\n  `promptId`,\n  `seed`\n)",
      "CREATE INDEX `idx_RvAG1NJ` ON `itemsCache` (\n  `promptId`,\n  `itemId`,\n  `seed`\n)",
      "CREATE INDEX `idx_mRrGpzL` ON `itemsCache` (\n  `promptId`,\n  `parameter`,\n  `seed`\n)",
      "CREATE INDEX `idx_7Q7T4ZR` ON `itemsCache` (\n  `promptId`,\n  `itemId`,\n  `parameter`,\n  `seed`\n)",
      "CREATE INDEX `idx_NuvA7hr` ON `itemsCache` (\n  `promptId`,\n  `parameter`,\n  `language`,\n  `seed`\n)",
      "CREATE INDEX `idx_tiqCHsj` ON `itemsCache` (\n  `promptId`,\n  `itemId`,\n  `parameter`,\n  `language`,\n  `seed`\n)"
    ]
  
    // add
    collection.schema.addField(new SchemaField({
      "system": false,
      "id": "p91ah7zv",
      "name": "seed",
      "type": "text",
      "required": false,
      "presentable": false,
      "unique": false,
      "options": {
        "min": null,
        "max": null,
        "pattern": ""
      }
    }))
  
    return dao.saveCollection(collection)
  }, (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("ozvy5xqyyn1vgb4")
  
    collection.indexes = [
      "CREATE INDEX `idx_pheNT3l` ON `itemsCache` (`promptId`)",
      "CREATE INDEX `idx_lryRVIK` ON `itemsCache` (`itemId`)",
      "CREATE INDEX `idx_Ym3T4lY` ON `itemsCache` (\n  `promptId`,\n  `itemId`\n)",
      "CREATE INDEX `idx_LZRBYY3` ON `itemsCache` (\n  `promptId`,\n  `itemId`,\n  `parameter`\n)",
      "CREATE INDEX `idx_W67REdf` ON `itemsCache` (\n  `promptId`,\n  `parameter`\n)",
      "CREATE INDEX `idx_sisbo72` ON `itemsCache` (\n  `promptId`,\n  `itemId`,\n  `parameter`,\n  `language`\n)",
      "CREATE INDEX `idx_gTKCr9n` ON `itemsCache` (\n  `promptId`,\n  `itemId`,\n  `language`\n)",
      "CREATE INDEX `idx_fe0jd2N` ON `itemsCache` (\n  `promptId`,\n  `parameter`,\n  `language`\n)",
      "CREATE INDEX `idx_LifDMJb` ON `itemsCache` (`language`)"
    ]
  
    // remove
    collection.schema.removeField("p91ah7zv")
  
    return dao.saveCollection(collection)
  })