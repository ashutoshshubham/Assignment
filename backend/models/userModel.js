const {Schema, model} = require('../connections')


const mySchema = new Schema({
    email : String,
    username : String,
    password : String,
    age : Number
})


module.exports = model('users', mySchema);