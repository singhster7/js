// LEARNING TO BUILD APIs
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
//YEH jo niche hai isko middleware bolte hai
app.use(express.static(path.join(__dirname,'public'))); // will send the index.html of the public folder(if present)
app.use(express.urlencoded({extended:true}));  // this will make the body readable

let todos = ["Cricket", "Dance", "Sing", "Hockey"];
// app.get('/submit-form',(req,res)=>{
//     const {username,password} = req.query;
//     res.send(`Received GET Request on /submit-form with ${username}, ${password}`)
// })
app.post('/submit-form',(req,res)=>{
    const {username,password} = req.query;
    res.send(`Received POST Request on /submit-form with ${username}, ${password}`)
    console.log("bosyy",req.body);
})
// 1. GET '/todos': Return all the todos
app.get('/todos',(req,res)=>{
    res.send(todos);
})
app.get('/todos',(req,res)=>{
    res.send(todos);
})

// 2. POST '/todos': Add a newTask to todos array
app.post('/todos',(req,res)=>{
    const {newTask} = req.body;
    todos.unshift(newTask);
    res.redirect('/todos'); 
})

// // 3. GET '/deletetask' : Delete  a task from todo list by name
//     // name will come in query parameter
// app.get('/deletetask',(req,res)=>{
//     const {name} = req.query;
//     todos = todos.filter(t=> t !== name);
//     res.redirect('/todos'); 
// })

// // 4. GET '/increase' : Increase the priority of a given task {name}
// app.get('/increase',(req,res)=>{
//     const {name} = req.query;
//     let index = todos.indexOf(name)
//     if(index != -1 && index >0 && index < todos.length){
//         [todos[index], todos[index-1]] = [todos[index-1], todos[index]];
//     }
//     res.redirect('/todos'); 
// })

// // 4. GET '/decrease' : Decrease the priority of a given task {name}
// app.get('/decrease',(req,res)=>{
//     const {name} = req.query;
//     let index = todos.indexOf(name)
//     if(index != -1 && index >=0 && index < todos.length-1){
//         [todos[index], todos[index+1]] = [todos[index+1], todos[index]];
//     }
//     res.redirect('/todos'); 
// })

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});
