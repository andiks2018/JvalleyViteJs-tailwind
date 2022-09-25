import Home from './src/pages/Home';
import './style.css';
let page = window.location.pathname
let app = document.getElementById("app")

switch(page){
    case "/":
        Home()
        break
    default:
        app.innerHTML=`
            <h1>Page not Found</h1>
        `
}