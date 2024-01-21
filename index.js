const express = require('express');
const app = express();
app.use(express.json());

let students = [];

app.get('/students',(request,response)=>{
    response.json(students);
})

app.post('/students',(request,response)=>{
    
    students.push(request.body);
    response.status(201).send('student has been added');
})













app.listen(3000,()=>{
console.log('backend application is running on port 3000'); 
}); 