const joi = require('joi');

async function validateCountry(country) {
    const schema = joi.object({
        name: joi.string().required(),
        country_code: joi.string().required(),
        address: joi.string()
    });
    return await schema.validateAsync(country);
}

exports.validate = validateCountry;