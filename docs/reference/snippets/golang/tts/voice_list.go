package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {

	url := "https://openapi.surreal-ai.com/v1/tts/voice.list"
	method := "GET"

	client := &http.Client{}
	req, err := http.NewRequest(method, url, nil)

	if err != nil {
		fmt.Println(err)
		return
	}
	req.Header.Add("Authorization", "bee03bed6352400383d9a51ba325af2f")

	res, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		return
	}
	defer res.Body.Close()

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(string(body))
}
