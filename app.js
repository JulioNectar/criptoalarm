const express= require(`express`)
const app= express()
const PORT = 8081
const fs= require('fs')
const fetch = require(`node-fetch`)
const nodemailer = require(`nodemailer`)
const dados = require("./btc.json")








const transporter = nodemailer.createTransport({ 
    pool: true,
    host:"smtp.gmail.com",
    port: 465,  
    secure:true,
    auth:{
        user:"incognator@gmail.com",
        pass:"Ninja2ninja2"//             FALTANDO SENHA   <----------==========================================
    }
}) 

 
transporter.sendMail({ 
    from: "BTC <incognator@gmail.com>",
    to: "devmayke@gmail.com",
    subject: "informacao BTC",
    text: dados.ticker.last
    }).then(msg =>{
        console.log(msg)
    }).catch(err=>{
        console.log("Erro: "+err)
})

const btcApi= function(){
    fetch(`https://www.mercadobitcoin.net/api/BTC/ticker/`).then(function(data){    
        return data.json()        
    }).then(function(data){             
        fs.writeFile(`btc.json`, JSON.stringify(data, null, 2), (err)=>{
            console.log(err)                                          
        })
        console.clear()
        console.table(data)
        let today= new Date()
        h=today.getHours();
        m=today.getMinutes();
        s=today.getSeconds();
        console.log("atualizado em ", h+":"+m+":"+s)  
    }).catch(function(err){
        console.log('erro', err)
        }
    )
}

setInterval(btcApi, 10000)






