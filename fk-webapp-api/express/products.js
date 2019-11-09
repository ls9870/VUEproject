const express = require("express")
//restful api
const router = express.Router()

/**
 * 解决访问的跨域问题 no-cors micro services  restful gateway router spring cloud
 */
router.all("*",function(req,res,next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {   /*让options请求快速返回*/
        res.send(200);
    } else {
        next();
    }
})

// router.get("/list2",(req,res)=>{ 在内部引入
//     res.jsonp({
//         list:[{},
//               {}]
//     })
// })

router.get("/",(req,res)=>{
    let list2 = require("../data/fenlei")
    res.json(list2)
})

module.exports = router;






