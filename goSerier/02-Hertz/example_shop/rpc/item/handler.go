package main

import (
	"context"
	"fmt"
	"log"
	item "shop/kitex_gen/shop/item"
	"shop/kitex_gen/shop/stock"
	"shop/kitex_gen/shop/stock/stockservice"

	"github.com/cloudwego/kitex/client"
)

// ItemServiceImpl implements the last service interface defined in the IDL.
type ItemServiceImpl struct{
	stockCli stockservice.Client
}

func NewStcokClient(addr string)(stockservice.Client,error){
	return stockservice.NewClient("shop.stock",client.WithHostPorts(addr))
}

// GetItem implements the ItemServiceImpl interface.
func (s *ItemServiceImpl) GetItem(ctx context.Context, req *item.GetItemReq) (resp *item.GetItemResp, err error) {
	resp = item.NewGetItemResp()
	resp.Item = item.NewItem()
	resp.Item.Id = req.Id
	resp.Item.Title = "hello kitex"
	resp.Item.Description = "hello world,this's new language."

	stockReq := stock.NewGetItemStockReq()
	stockReq.ItemId = req.GetId()
	stockResp,err := s.stockCli.GetItemStock(context.Background(), stockReq)
	if err != nil {
		fmt.Println("123123123")
		log.Fatal(err)
	}
	resp.Item.Stock = stockResp.GetStock()
	return
}
