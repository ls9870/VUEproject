const listclass =  `http://http://192.168.65.1:3000/products`

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