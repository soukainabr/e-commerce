import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProduct = async () => {
    setLoading(true);
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    setProduct(await response.json());
    setLoading(false);
    console.log(product);
  };
  const dispatch = useDispatch();
  const addProduct  = (product) =>{
    dispatch(addCart(product));
  }
  useEffect(() => {
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Skeleton height={75} />
            <Skeleton height={25} width={150} />
            <Skeleton height={50} />
            <Skeleton height={150} />
            <div style={{ display: 'flex', gap: '6px' }}>
              <Skeleton height={50} width={100} />
              <Skeleton height={50} width={100} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img src={product.image} alt={product.title} height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>Add to Card</button>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to Card
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-10">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
