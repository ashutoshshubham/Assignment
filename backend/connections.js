const mongoose = require('mongoose');
const dbName = 'Assignment';
const url = `mongodb+srv://ashutoshshubham:ashutosh@cluster0.cqjsjz0.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(url)
.then((result) => {
    console.log('Database Connected')
    
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;