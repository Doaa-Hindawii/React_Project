

import Footer from './component/Footer/Footer';
import Header from './component/Header/header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom"
import Products from './component/Products/Products'
import Details from './component/Product_Details/Details'
function App() {
  return (
    <>
     <Router>
        <Header/>
           <Switch>
           <Route path="/" exact component={Products}/>
          <Route path="/Details/:id" exact component={Details} />
           </Switch>
        <Footer/>
     </Router>
    </>
  );
}

export default App;
