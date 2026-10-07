package main

import (
	"fmt"
	"io"
	"net/http"
)


func index(w http.ResponseWriter, r *http.Request){
	fmt.Println("method:",r.Method)
	fmt.Println("rawURL:",r.URL.String())

	if r.Method != "GET"{
		body, _ := io.ReadAll(r.Body)
		fmt.Println(string(body))
	}

	fmt.Println(r.Header)
	w.Write([]byte("hello world"))
}


func main(){
	http.HandleFunc("/index",index)
	fmt.Println("http server running.....")

	// 第一个参数也可以仅填写端口，例如 `:8888`，表明绑定本机所有地址的8888端口
	http.ListenAndServe("127.0.0.1:8888",nil)
}




