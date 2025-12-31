/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4285667772")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "file410859157",
    "maxSelect": 1,
    "maxSize": 1000000000,
    "mimeTypes": [],
    "name": "audio",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4285667772")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "file410859157",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "audio",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
