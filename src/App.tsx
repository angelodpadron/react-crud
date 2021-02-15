import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Products from './admin/components/Products';
import Main from './main/Main';
import ProductCreate from './admin/components/ProductCreate';
import ProductEdit from './admin/components/ProductEdit';


function App() {
  return (
    <div className="App">      

            <BrowserRouter>
              <Route path={'/'} exact component={Main}/>
              <Route path={'/admin/products'} exact component={Products}/>
              <Route path={'/admin/products/create'} exact component={ProductCreate}/>
              <Route path={'/admin/products/:id/edit'} exact component={ProductEdit}/>
            </BrowserRouter>
            
          
    </div>
    
  );
}

export default App;
