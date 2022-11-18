const express=require('express');
const app = express();
const path=require('path');

const multer=require('multer');
const upload=multer({dest:"uploads/"})

const {mergepdf}=require("./merge.js");

const port=5000
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,"template/index.html"));
})

app.listen(port,()=>{
    console.log("Server started on port",port);
})

app.use('/static',express.static('public'));

app.post('/merge', upload.array('pdfs',2),async (req, res,next)=>{
    console.log(req.files);
    await mergepdf(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path));
    res.redirect(
        "http://localhost:5000/static/merge.pdf"
    )
  
})
