const express = require("express");
const { postTreatment, getTreatment, getTreatmentById, getTreatments, patchTreatment, deleteTreatment, deleteTreatmentById} = require("../controllers/treatment");
const router = express.Router();

router.post("/treatment", postTreatment);
router.get("/treatment/:id", getTreatmentById);
router.get("/treatment/all", getTreatments);
router.get("/treatment", getTreatment);
router.patch("/treatment/:id", patchTreatment);
router.delete("/treatment/:id", deleteTreatmentById);
router.delete("/treatment", deleteTreatment);

module.exports = router;
