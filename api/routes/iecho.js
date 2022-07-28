const express = require("express")
const {Router} = require('express');
const { iechoGet } = require('../controllers/iecho');



const router = Router();


router.get("/",iechoGet)

module.exports = router;