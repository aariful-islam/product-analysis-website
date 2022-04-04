import { useEffect, useState } from "react"

const ShowReview=()=>{
    const [reviews,setReviews]=useState([])
    useEffect( ()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))


    },[])
    return [reviews,setReviews]
}
export default ShowReview;