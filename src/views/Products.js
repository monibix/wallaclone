import React from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar/Sidebar';
import { Link } from 'react-router-dom'

function Products() {

    const [products, setProducts] = React.useState([])

    React.useEffect(()=>{
        axios.get("http://localhost/4000/products").then(data=> setProducts(data))
    }, [])

    return (
        <div className="columns is-0">
            <div className="column is-one-fifth">
                <Sidebar />
            </div>
            <div className="column">
                <h1 className="title">Tu productos</h1>
                <h3 className="subtitle">Aquí podrás subir productos nuevos y gestionar los que ya tienes</h3>
            
                <div>
                    <table class="table">
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Editar</th>
                                <th>Borrar</th>
                            </tr>
                            <tr>

                            </tr>
                    </table>
                </div>
                
            </div>
        </div>
    )
}
export default Products;