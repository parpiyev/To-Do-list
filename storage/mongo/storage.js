const { json } = require('body-parser');
const { Country } = require('../../modul/modul')

let CountryStorage = {
    create: async(data) => {
        const country = new Country(data);
        try {
            await country.save();
        } catch (error) {
            throw new Error(error.message);
        }
    },

    update: async(id, data) => {
        try {
            let country = await Country.findOne({ _id: id });

            if (!country) {
                throw new Error("Not found in database");
            }

            country.name = data.name;
            country.country_code = data.country_code;
            country.address = data.address
            await country.save();

        } catch (error) {
            throw new Error(error.message);
        }
    },

    get: async(id) => {
        try {
            let country = await Country.findOne({ _id: id });

            if (!country) {
                throw new Error("Not found in database");
            }

            return country;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    delete: async(id) => {
        try {
            let country = await Country.findOne({ _id: id });

            if (!country) {
                throw new Error("Not found in database");
            }

            await Country.findOneAndDelete({ _id: id });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getAll: async() => {
        try {
            const res = await Country.find();
            return res;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = CountryStorage;