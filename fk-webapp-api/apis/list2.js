const listclass =  `http://192.168.65.1:3002/products`

export default{
    /**
     * 获取json信息
     */
    getCartInfoByUserId(cb){
        fetch(listclass).then(res=>{
            res.json().then(cb)
        })
    }
}
