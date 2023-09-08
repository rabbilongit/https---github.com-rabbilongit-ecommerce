import React from 'react';
import ReactDOM from 'react-dom';
import Page from './component/Page'
import Login from './component/Login'
import Spage from './component/Spage';
//import img  from './Img/bottel.jfif'
//import Counter from './component/Counter';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login2 from './component/Login2';


function App() {
  return (

    


    /*<div>
     <Spage/>
     </div>
     <Route path="/Spage/:brand/:discountPercentage/:category/:description" Component={Spage} />
*/
<Router>
      <Routes>
        <Route path="/" exact Component={Login} />
        <Route path="/Page/:name" Component={Page} />
        <Route path="/Spage/:id" Component={Spage} />
      </Routes>
    </Router>
    



    /*<div>
       {<h1>Hello, React!</h1>}
       <Login/>
       {<img src={img} alt='bottel'/>}
       </div>*/
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
