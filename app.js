const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app =express();

router = require('./routes/routes');

app.use(express.json());
app.use(express.static(path.join('public')));

app.use('/api',router);

app.listen(5003,()=>{
    console.log(`server started on port no ${5003}`);
}
)

//http://localhost:5003/api