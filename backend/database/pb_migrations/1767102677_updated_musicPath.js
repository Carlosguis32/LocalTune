/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_482533037")

  // update collection data
  unmarshal({
    "name": "audioPath"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_482533037")

  // update collection data
  unmarshal({
    "name": "musicPath"
  }, collection)

  return app.save(collection)
})
