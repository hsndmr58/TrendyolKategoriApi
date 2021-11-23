const express = require('express')
const ejs=require('ejs')
const request = require('sync-request');
const app=express();
app.set("view engine","ejs")

const data = request('GET', 'https://api.trendyol.com/sapigw/product-categories');
let datau=JSON.parse(data.getBody('utf8'))


app.get('/', (req,res)=>{
    
    res.render('index',{
        datau
    })
})

const port=process.env.PORT||5000;
app.listen(port,()=>{
    console.log("Sunucu Çalıştı")
})