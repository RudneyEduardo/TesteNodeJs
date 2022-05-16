import 'dotenv/config';
import express from 'express';
import cep from '../routes/cep.js';
import auth from '../routes/auth.js';
import swaggerUiExpress from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';


const app = express()


app.use(express.json())

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Library API",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "http://localhost:3000",
			},
		],
	},
	apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);


//*Swagger
app.use("/api-docs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));


//*Auth route
app.use('/auth', auth)


//*CEP Consult Route
app.use('/cep', cep)


app.listen(3000)