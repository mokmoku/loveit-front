package main

import (
	"./routes"
	"github.com/hypebeast/gojistatic"
	"github.com/zenazn/goji"
)

func main() {
	goji.Use(gojistatic.Static("", gojistatic.StaticOptions{SkipLogging: true}))
	
	routes.Include()
	
	goji.Serve()
}
