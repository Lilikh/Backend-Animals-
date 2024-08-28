const express=require('express');
const mongoose=require('mongoose');
const animalsRouter=require('./routes/animals');

mongoose.connect("mongodb+srv://cluster0.hzgttxh.mongodb.net/Zoo",{
    user:"lilikheirandish051",
    pass:"mZfrDomAJ2A9cFPr"

})
const port=3000;
const app=express();

app.use(express.json())

app.use('/animals',animalsRouter);
app.get('/',(req,res)=>{
    res.send('Hello from the Zoo API')
})
app.listen(3000,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    
})



