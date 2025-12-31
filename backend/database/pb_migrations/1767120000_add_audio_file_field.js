/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1033771740")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file1234567890",
    "maxSelect": 1,
    "maxSize": 100000000, // 100MB
    "mimeTypes": ["audio/*"],
    "name": "audioFile",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1033771740")

  // remove field
  collection.fields.removeById("file1234567890")

  return app.save(collection)
})