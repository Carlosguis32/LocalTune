/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1033771740")

  // update collection data
  unmarshal({
    "name": "audioFile"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1033771740")

  // update collection data
  unmarshal({
    "name": "audio_file"
  }, collection)

  return app.save(collection)
})
