import axios from 'axios';

export const cepController = (req, res) => {
    const cep = req.params.cep;
    axios.get('https://viacep.com.br/ws/viacep.com.br/ws/'+ cep + '/json/')
    .then(viaCepRes => res.json(viaCepRes.data))
    .catch(err => console.log(err))
}

