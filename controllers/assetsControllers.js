const assets = require("../assets");

//get all assets
const getAllAssets = (req, res) => {
  res.json(assets);
};

// get a single asset
const getAnAsset = (req, res) => {
  const model = req.params.model;
  const asset = assets.some((a) => a.model === model);

  if (asset) {
    res.json(assets.filter((asset) => asset.model === model));
  } else {
    res.status(404).json({ message: "asset not found" });
  }
};

//remove an asset
const removeAsset = (req, res) => {
  const model = req.params.model;
  const asset = asset.some((a) => a.model === model);

  if (asset) {
    res.json({
      msg: "asset has been removed ${model}",
      assets: assets.filter((a) => a.model !== model),
    });
  }
};

// add an asset

const createAnAsset = (req, res) => {
  const new_asset = {
    brand: req.body.name,
    model: req.body.model,
    Max_speed: req.body.Max_speed,
    price: req.body.price,
    ASW: req.body.ASW,
  };
  assets.push(new_asset);
  res.json(assets);
};

modules.export = {
  getAllAssets,
  getAnAsset,
  createAnAsset,
  removeAsset,
};
