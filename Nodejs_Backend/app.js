const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const db_connect = require('./model/Mongodb');
const blogFunctions = require('./routes/blog');
const Registration = require('./routes/registration');
const SignUp = require('./routes/signup')
const chatPopup = require('./routes/chat_pop')
const port =8000;
app.use(bodyParser.json());
app.use(cors()); 
app.use(express.json());
db_connect(); 

app.use(SignUp)
app.use(Registration)
app.use('/resources',blogFunctions);
app.use('/contact',chatPopup)


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404pg.html'));
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`); 
});
