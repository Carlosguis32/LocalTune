/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_482533037")

  // update collection data
  unmarshal({
    "name": "music_path"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_482533037")

  // update collection data
  unmarshal({
    "name": "music_paths"
  }, collection)

  return app.save(collection)
})
