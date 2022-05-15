// import Product from "./component/Product"
import './App.css';
// import Display from "./component/Display";
import DisplayOne from "./component/DisplayOne";
import Main from "./views/Main";
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path = "/" element = { <Main/>} />
        <Route path = "/product/:id" element = {<DisplayOne/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
