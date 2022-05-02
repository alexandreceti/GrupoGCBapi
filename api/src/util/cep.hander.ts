import axios from 'axios';

async function cepHander(buscape: string) {
  try {
    const cep = buscape.split('-').join('');
    console.log(cep);
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

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
  } catch (error) {
    throw new Error(error.message);
  }
}

export default cepHander;
