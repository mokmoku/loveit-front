package routes

import(
	"../controllers"
	"github.com/zenazn/goji"
)

func Include() {
	goji.Get("/*", controllers.Home)
}
