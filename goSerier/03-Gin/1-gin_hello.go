package main

import "github.com/gin-gonic/gin"

type Response struct{
	Code int `json:"code"`
	Msg string `json:"msg"`
	Data map[string]any `json:"data"`
}

func index(c *gin.Context){
	c.JSON(200,Response{
		Code: 0,
		Msg: "成功",
		Data: make(map[string]any),
	})
}

func main(){
	//关闭gin调试日志
	gin.SetMode("release")
	//1. 声明引擎
	r := gin.Default()
	//2. 挂载路由
	r.GET("/index", index)
	//3. 绑定端口
	r.Run(":8888")
}


