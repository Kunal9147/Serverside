
const express=require('express')
const app=express()
app.use(express.json())

app.get("/hello",(request,response)=>{
   const fn=request.query.fname
  

   response.send(`Hello World`)
   
})

app.listen(3001)
console.log("Server started at 3001")
