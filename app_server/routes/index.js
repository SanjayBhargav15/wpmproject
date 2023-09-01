const express = require('express');
const router = express.Router();
const cntrlmain=require('../controllers/others');
const ctrllocations =require('../controllers/location');
/* GET home page. */
router.get('/',ctrllocations.homelist);
router.get('/location',ctrllocations.locationinfo);
router.get('/location/review/new',ctrllocations.addreview);
router.get('/about',cntrlmain.about);
module.exports=router;
