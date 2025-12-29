/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1033771740")

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text_deezer_id",
    "max": 0,
    "min": 0,
    "name": "deezer_id",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text_apple_music_id",
    "max": 0,
    "min": 0,
    "name": "apple_music_id",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text_youtube_id",
    "max": 0,
    "min": 0,
    "name": "youtube_id",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1033771740")

  // remove field
  collection.fields.removeById("text_deezer_id")

  // remove field
  collection.fields.removeById("text_apple_music_id")

  // remove field
  collection.fields.removeById("text_youtube_id")

  return app.save(collection)
})