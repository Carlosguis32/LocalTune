/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3237282870")

  // update collection data
  unmarshal({
    "name": "audioProviderId"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3237282870")

  // update collection data
  unmarshal({
    "name": "providerId"
  }, collection)

  return app.save(collection)
})
