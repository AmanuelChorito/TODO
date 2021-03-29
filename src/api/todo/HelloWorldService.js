import axios from "axios"
import { Component } from "react";

class HelloWorldService {
executeHelloWorldService(){
    return axios.get('http://localhost:8082/hello-world');
}
executeHelloWorldBeanService(){
    return axios.get('http://localhost:8082/hello-world-bean')
}
    excecutehelloWorldPathvariableServce(name){
        return axios.get(`http://localhost:8082/hello-world/path-variable/${name}`)
    }
}
export default new HelloWorldService()