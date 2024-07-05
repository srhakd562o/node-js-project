const db = require('../models');
const Company = db.Company;

exports.createCompany = (req, res) => {
    Company.create(req.body)
        .then(company => res.json(company)) 
        .catch(err => res.status(400).json({ error: err.message }));
};

exports.getAllCompanies = (req, res) => { 
    Company.findAll()
        .then(companies => res.json(companies)) 
        .catch(err => res.status(400).json({ error: err.message }));
};

exports.getCompanyById = (req, res) => {
    Company.findByPk(req.params.id)
        .then(company => { 
            if (company) {
                res.json(company);
            } else {
                res.status(404).json({ error: 'Company not found' }); 
            }
        })
        .catch(err => res.status(400).json({ error: err.message }));
};
