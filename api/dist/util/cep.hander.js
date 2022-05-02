"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
async function cepHander(buscape) {
    try {
        const cep = buscape.split('-').join('');
        console.log(cep);
        const response = await axios_1.default.get(`https://viacep.com.br/ws/${cep}/json/`);
        if (response.data.erro) {
            console.log('error');
            throw new Error('CEP is not found');
        }
        const newCep = {
            address: response.data.logradouro,
            complement: response.data.complemento,
            district: response.data.bairro,
            locality: response.data.localidade,
            state: response.data.uf,
        };
        return newCep;
    }
    catch (error) {
        throw new Error(error.message);
    }
}
exports.default = cepHander;
//# sourceMappingURL=cep.hander.js.map