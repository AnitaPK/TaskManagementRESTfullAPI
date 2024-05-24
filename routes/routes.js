const express = require('express');

const router =express.Router();

const data =[ {"id":1,"taskName":"Project1","Discription":"Project1 Project1Discription"},
{"id":2,"taskName":"Project2","Discription":"Project1 Project1Discription"},
{"id":3,"taskName":"Project3","Discription":"Project1 Project1Discription"}
];
//add new
router.post('/post',(req,res)=>{

    // res.send('api from post API');
    res.send(data);
})  
 
 //get all data
router.get('/getAll',(req,res)=>{
    // res.send('get all from get API');
    res.send(data);
}) 

//update data with id
router.patch('/udpatedData:id',(req,res)=>{
    // res.send('update data by id ' + req.params.id);
    data={"id":1,"name":"John",};
    console.log(data);
    if(data.id == req.params.id){
        data.name="Tom"
    }
    console.log(data);
    res.send(data);
})  

//for delete with id
router.delete('/deleteData:id',(req,res)=>{
    res.send('deleted data by id ' + req.params.id);
    
})


module.exports = router;
