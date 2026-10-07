package main

import (
	"fmt"
	"io"
	"os"

	"github.com/gin-gonic/gin"
)


func main(){
	engine := gin.Default()
	// 手动提取参数
	defaultQueryParam(engine)
	//使用bind 函数提取参数
	engine.Run(":7891")
}

func bindingFuncParam(engine *gin.Engine){
	/*
	1. 绑定查询参数
	*/
	engine.GET("/binding/query",func(ctx *gin.Context) {
		type User struct{
			Name string `form:"name"`
			Age int `form:"age"`
		}
		var user User
		err := ctx.ShouldBindQuery(&user)
		fmt.Println(user,err)
	})

	/*
	2. 绑定路径参数
	*/
	engine.GET("/binding/user/:id/:name",func(ctx *gin.Context) {
		type User struct{
			Name string `uri:"name"`
			Age int `uri:"id"`
		}
		var user User
		err := ctx.ShouldBindUri(&user)
		fmt.Println(user,err)
	})

	/*
	3. 绑定form表单
	*/
	engine.POST("/binding/form",func(ctx *gin.Context) {
		type User struct{
			Name string `form:"name"`
			Age int `form:"age"`
		}
		var user User
		err := ctx.ShouldBind(&user)
		fmt.Println(user,err)
	})

	/*
	4. 绑定json参数
	*/
	engine.POST("/binding/json",func(ctx *gin.Context) {
		type User struct{
			Name string `json:"name"`
			Age int `json:"age"`
		}
		var user User
		err := ctx.ShouldBindJSON(&user)
		fmt.Println(user,err)
	})

	/*
	5. 绑定header参数
	*/
	engine.POST("/binding/header",func(ctx *gin.Context) {
		type User struct{
			Name string `header:"Name"` // header参数通常会大写
			Age int `header:"Age"`
		}
		var user User
		err := ctx.ShouldBindHeader(&user)
		fmt.Println(user,err)
	})	
}


func defaultQueryParam(engine *gin.Engine) {
	/*
	1. 查询参数
	*/
	engine.GET("/index", func(ctx *gin.Context) {
		name := ctx.Query("name")
		// 如果参数不存在则使用默认值
		age := ctx.DefaultQuery("age", "123")
		//数组参数
		hobby := ctx.QueryArray("hobby")
		fmt.Println(name, age, hobby)
	})

	/*
		2. 路径参数
	*/
	engine.GET("/users/:id", func(ctx *gin.Context) {
		id := ctx.Param("id")
		fmt.Println(id)
	})

	/*
		3. form表单参数
	*/
	engine.POST("/users/update", func(ctx *gin.Context) {
		age := ctx.PostForm("age")
		name, err := ctx.GetPostForm("name")
		if err {
			fmt.Println("name param misssing....")
			return
		}

		fmt.Println(age, name)
	})

	/*
		4. 文件上传。表单参数常用于文件上传处
	*/
	engine.POST("/uploadFile", func(ctx *gin.Context) {
		fileHeader, err := ctx.FormFile("file")
		if err != nil {
			return
		}

		//方式一
		fmt.Printf("fileHeader.Filename: %v\n", fileHeader.Filename) //文件名
		fmt.Printf("fileHeader.Size: %v\n", fileHeader.Size)         //文件大小

		file, _ := fileHeader.Open()
		byteData, _ := io.ReadAll(file)
		os.WriteFile("./xxx.jpg", byteData, 0666)

		//方式二 单文件
		err = ctx.SaveUploadedFile(fileHeader, "./xxx/yyy/zzz.jpg") //直接保存文件，路径不存在会自动创建
		if err != nil {
			fmt.Println(err)
		}
	})
	//方式二  多文件
	engine.GET("/uploadMuilFile", func(ctx *gin.Context) {
		form, err := ctx.MultipartForm()
		if err != nil {
			fmt.Println(err)
			return
		}

		for _, fileHeaders := range form.File {
			for _, fileheader := range fileHeaders {
				ctx.SaveUploadedFile(fileheader, "upload/"+fileheader.Filename)
			}
		}
	})
}