import 'dotenv/config'
import express from 'express'
import cep from '../routes/cep.js'
import auth from '../routes/auth.js'

const app = express()

app.use(express.json())


//*Auth route
app.use('/auth', auth)


//*CEP Consult Route
app.use('/cep', cep)


app.listen(3000)