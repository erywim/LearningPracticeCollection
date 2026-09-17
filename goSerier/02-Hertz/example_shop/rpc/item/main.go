package main

import (
	"log"
	item "shop/kitex_gen/shop/item/itemservice"
)

func main() {

	itemServiceImpl := new(ItemServiceImpl)
	stockCli,err  := NewStcokClient("0.0.0.0:8890")
	if err!=nil{
		log.Fatal(err)
	}
	itemServiceImpl.stockCli = stockCli

	svr := item.NewServer(itemServiceImpl)

	err = svr.Run()
	if err != nil {
		log.Println(err.Error())
	}
}
