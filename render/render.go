package render

import (
	"net/http"
	"io/ioutil"
	"fmt"
)

func Render(w http.ResponseWriter, template string) error {
	contents, err := ioutil.ReadFile(template)
	if err != nil {
		return err
	}
	fmt.Fprintf(w, string(contents))

	return nil
}

