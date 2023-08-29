const { Router } = require("express");
const getCountries = require('../controllers/country/getCountries');
const getCountriesId = require("../controllers/country/getCountriesId");

const countryRouter = Router();

countryRouter.get('/', getCountries)

countryRouter.get('/:countryId', getCountriesId)

module.exports = countryRouter;
