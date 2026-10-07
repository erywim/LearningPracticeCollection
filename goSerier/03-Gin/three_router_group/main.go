package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
)


func Middleware1(c *gin.Context){
	fmt.Println("M1进入")
	c.Set("param1",123)
	c.Next()
	//使用 c.Abort() 可以中断请求传播
	fmt.Println("M1退出")
}

func M2(c *gin.Context){
	fmt.Println("M2进入")
	p1, ok := c.Get("param1")
	if !ok{
		fmt.Println("参数不存在")
		c.Next()
		return
	}
	fmt.Printf("p1: %v\n", p1)
	c.Next()
	fmt.Println("M2退出")
}




func main(){
	engine := gin.Default()

	userGroup := engine.Group("/user")
	userGroup.Use(M2,Middleware1)
	AddGroupPath(userGroup)
	engine.Run("8888")
}

func Info(c *gin.Context){
	fmt.Printf("c.Request.Method: %v\n", c.Request.Method)
	fmt.Println("info calling.....")
}

func AddGroupPath(group *gin.RouterGroup){
	group.GET("info",)
	group.POST("info")
	group.PUT("info")
	//...
}
