import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;


const cepSchema = new Schema({
    employeename: { type: String, required: true },
    designation: { type: String, required: true },
    date: { type: Date, required: true },
  }, {
    timestamps: true,
  });
  
  const Cep = model('Cep', cepSchema);
  export default Cep;