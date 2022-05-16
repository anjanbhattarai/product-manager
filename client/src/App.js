// import Product from "./component/Product"
import './App.css';
// import Display from "./component/Display";
import DisplayOne from "./component/DisplayOne";
import Main from "./views/Main";
import Update from './component/Update';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path = "/" element = { <Main/>} />
        <Route path = "/product/:id" element = {<DisplayOne/>} />
        <Route path = "/product/edit/:id" element = {<Update/>} />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
