const express = require("express");

const {
  getAllAssets,
  getAnAsset,
  createAnAsset,
  removeAsset,
} = require("../controllers/assetsControllers");

const router = express.Router();
router.route("/routes/assetsRoutes").get(getAllAssets).post(createAnAsset);
router.route("/routes/assetsRoutes/:model").delete(removeAsset).get(getAnAsset);

module.exports = router;
