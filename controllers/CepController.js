import axios from 'axios';
import NodeCache from 'node-cache';

import { checkValidCep } from "../utils/checkValidCep.js"

const myCache = new NodeCache({ stdTTL: 300 });

export const cepController = async (req, res) => {
    let cepList = myCache.get('allCeps')
    const cep = req.params.cep;
    if (cepList == null) {
        if (checkValidCep(cep)) {
            axios.get('https://viacep.com.br/ws/viacep.com.br/ws/' + cep + '/json/')
                .then(viaCepRes => {
                    res.json(viaCepRes.data)
                    myCache.set('allCeps', viaCepRes.data, 300)
                })
                .catch(err => console.log(err))
        } else {
            res.sendStatus(400)
        }
    }else{
        res.json(myCache.get('allCeps'))
    }
}

