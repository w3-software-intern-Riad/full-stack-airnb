const express = require("express");
const router = express.Router();
const getHotelByName=require("../controllers/getHotelByName");
//get the hotel information and rooms information using the hotelName as parameter
router.get("/hotels/:name", getHotelByName);

module.exports=router;