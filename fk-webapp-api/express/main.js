//引入
const products = require("./products")
const  express = require("express")
//通过express创建服务器
const app = express()

//通过app服务器实例创建一个路由
// app.use("/",(req,res)=>{
//     res.end("hello")
// })

app.use("/products",products)

app.listen(3002,()=>{
    console.log("server is listening...")
})
