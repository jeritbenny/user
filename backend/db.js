const mongoose= require('mongoose')


const UserSchema= new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    income: { type: Number, required: false, default: 0 },
    city: { type: String, required: false, default: null },
    car: { type: String, required: false, default: null },
    quote: { type: String, required: false, default: null },
    phone_price: { type: Number, required: false, default: 0 },
})

const product= mongoose.model('Details', UserSchema, 'datas');
module.exports = product