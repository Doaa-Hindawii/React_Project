import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../../Axios Config/axiosInstance'

import './style.css'
export default function Products() {
  var [currentPage, setcurrentPage] = useState(1);

  const NextPage = () => {
    setcurrentPage(++currentPage);
  };
  const previousPage = () => {
    setcurrentPage(--currentPage);
  };
  const image = "https://image.tmdb.org/t/p/w500/"
  const [Products, setItems] = useState([])
  useEffect(() => {
    axiosInstance.get(`movie/popular?api_key=2727805eb49a1bef7dd6a751063548d9&page=${currentPage}`).then((res) => {
      console.log(res.data.results)
      setItems(res.data.results)

    }).catch((err) => {
      console.log(err);
    })
  }, [currentPage])


  return (
    <>
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-3">

          {Products.map((item) => {
            return (
              <div className="col" key={item.id}>
                <div className="card">
                  <img
                    src={image + item.backdrop_path}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text ">{item.description}</p>
                    <Link to={`/details/${item.id}`} className="details">Details</Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
        <div className='pagination'>
          <button className='btn' onClick={() => { previousPage() }}>Previous</button>
          <button className='btn' onClick={() => { NextPage() }}>Next</button>
        </div>
      </div>

    </>
  );
}
