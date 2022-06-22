import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import axiosInstance from '../../Axios Config/axiosInstance'
import './style.css'

const Details = (props) => {
  const image = "https://image.tmdb.org/t/p/w500/"

  const params = useParams()
  const [Product, setProduct] = useState({})
  useEffect(() => {
    axiosInstance.get(`movie/${params.id}?api_key=2727805eb49a1bef7dd6a751063548d9`).then((res) => {
      console.log(res.data)
      setProduct(res.data)

    }).catch((err) => {
      console.log(err);
    })
  }, [])
  return (
    <>
        <div className='container'>
          <img
            src={image + Product.backdrop_path}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{Product.title}</h5>
            <p className="card-text text-dark">{Product.description}</p>
          </div>
        </div>
    </>

  )
}

export default Details