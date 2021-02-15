import React, { useEffect, useState } from 'react'
import Wrapper from '../Wrapper';
import {Product} from '../../interfaces/products'
import { Link } from 'react-router-dom';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
      (
          async () => {
              const response = await fetch('http://localhost:8000/api/products');
              const data = await response.json();
              setProducts(data)
              //For connection testing purposes
              console.log(data)
          }
      )()
  }, []);


  const del = async (id: number) => {
    if (window.confirm('You are about to delete this product. Proced?')){
      await fetch(`http://localhost:8000/api/products/${id}`, {method: 'DELETE'});
      setProducts(products.filter((p: Product) => p.id != id));
    }
  }

  return(
      <Wrapper>
          <div className="pt-3 pb-2 mb-3 border-bottom">
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to='/admin/products/create' className="btn btn-sm btn-outline-secondary">Add</Link>
                </div>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Likes</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

              {products.map(
                        (p: Product) => {
                            return (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td><img className='img-thumbnail' width='200' src={p.image}/></td>
                                    <td>{p.title}</td>
                                    <td>{p.likes}</td>
                                    <td>
                                    <div className='btn-group mr-2'>
                                        <Link to = {`/admin/products/${p.id}/edit`} className='btn btn-sm btn-outline-secondary'>
                                          Edit
                                        </Link>
                                      </div>
                                      <div className='btn-group mr-2'>
                                        <a href='#' className='btn btn-sm btn-outline-secondary' 
                                        onClick={() => del(p.id)}>
                                          Delete
                                        </a>
                                      </div>
                                    </td>
                                </tr>
                            )
                        })}                                 
              </tbody>
            </table>
          </div>
      </Wrapper>
  )
}

export default Products;