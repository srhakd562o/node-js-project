const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController'); 

router.post('/companies', companyController.createCompany); 
router.get('/companies', companyController.getAllCompanies); 
router.get('/companies/:id', companyController.getCompanyById); 

module.exports = router;
