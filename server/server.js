const express = require('express');
const app = express();
const PORT = 8000;
 
app.get('/nickname',(req,res)=>{
    const nickname = {
        name : "서지영"
    };
    res.json(nickname);
})

app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})