const e=require('express')
const app=e()
const bp=require('body-parser')
var path=require('path')
app.use(e.static(path.join(__dirname,'css')))
app.use(bp.urlencoded({
    extended:false
}))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/forms.html')
})
app.post('/',(req,res)=>{
    var fn=req.body.Fname
    var ln=req.body.Lname
    var eml=req.body.Email
    var p=req.body.pwd
    res.writeHead(200,{
        "content-type":"text/html"
    })
    res.write("<h3>Your Credentials are:</h3>")
    res.write("<h2>First Name: " +fn+"</h2>")
    res.write("<h2> Last Name: " +ln+"</h2<br>")
    res.write("<h2> Email: " +eml+"</h2<br>")
    res.write("<h2> Password: " +p+"</h2<br>")
    res.end()

})
app.listen(3000,()=> console.log('SERVER STARTED'))
