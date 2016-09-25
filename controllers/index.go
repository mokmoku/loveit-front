package controllers

import (
	"../render"
	"net/http"
)

func Home(w http.ResponseWriter, r *http.Request) {
	err := render.Render(w, "index.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func Item(w http.ResponseWriter, r *http.Request) {
	err := render.Render(w, "index.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
