import React, { useEffect, useState } from 'react';
import Wrapper from '../admin/Wrapper';
import { Product } from '../interfaces/products';

const Main = () => {

    const [products, setProducts] = useState([] as Product[])

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/products');
                const data = await response.json()
                setProducts(data)
            }
        )();
    }, [])


    const like = async (id: number) => {
        await fetch(`http://localhost:8001/api/products/${id}/like`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        });

        setProducts(products.map(
            (p: Product) => {
                if (p.id === id) {
                    p.likes++;
                }

                return p;
            }
        ));
    }

    


    return (
        <Wrapper>               
                
                <div className="album py-5">
                    <div className="container">
                    <div className='row'>
                        {products.map(
                            (p: Product) => {
                                return(
                                        <div className="col-md-4">
                                            <div className="card bg-light mb-4 shadow-sm">
                                                <img src={p.image} height="300"/>
                                                <div className="card-body">
                                                <p className="card-text">{p.title}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                    <button type="button" className="btn btn-sm btn-outline-warning"
                                                    onClick={() => like(p.id)}
                                                    >Like</button>
                                                    </div>
                                                    <small className="text-muted">{p.likes} likes</small>
                                                </div>
                                                </div>
                                            </div>
                                        </div>                                    
                                )
                            }
                        )}
                    </div>
                    
                    </div>
                    
                </div>

            </Wrapper>
    );
};

export default Main;