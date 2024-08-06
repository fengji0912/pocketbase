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
    "CREATE INDEX `idx_P0cZtau` ON `itemsCache` (`language`)",
    "CREATE INDEX `idx_WOs1778` ON `itemsCache` (\n  `promptId`,\n  `itemId`,\n  `language`\n)",
    "CREATE INDEX `idx_MxEhDbx` ON `itemsCache` (\n  `promptId`,\n  `itemId`,\n  `parameter`,\n  `language`\n)",
    "CREATE INDEX `idx_AEZKlZu` ON `itemsCache` (\n  `promptId`,\n  `parameter`,\n  `language`\n)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "whz2jxp1",
    "name": "language",
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
    "CREATE INDEX `idx_W67REdf` ON `itemsCache` (\n  `promptId`,\n  `parameter`\n)"
  ]

  // remove
  collection.schema.removeField("whz2jxp1")

  return dao.saveCollection(collection)
})
