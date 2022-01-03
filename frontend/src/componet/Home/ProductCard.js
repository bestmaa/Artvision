import React from 'react'
import {Link,Outlet} from 'react-router-dom';
import Rating from 'react-rating-stars-component'

function ProductCard({data}) {
    
    const ratingOpting={
        edit:false,
        color:"rgba(20,20,20,0.1)",
        activeColor:"red",
        value:data.ratings, 
        isHalf:true,
    }
    return (
        <Link className='Card' to={`/product/${data._id}`} >
            <Outlet />
            <img src={data.images[0].url} alt="" />
            <p>{data.name}</p>
            <div>
                <Rating {...ratingOpting}/>
                <span>({data.numberOfReviws} Reviews)</span>
            </div>
            <span>{data.price}</span>
        </Link>
    )
}

export default ProductCard
