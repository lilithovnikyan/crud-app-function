import React, {useState} from 'react';
import "./StarRating.css"
import { FaStar } from "react-icons/fa";

export default function StarRating({defaultRating, changeRating, namberRow}) {
    const [hover, setHover] = useState(null);
    function changeHandleClick(ratingValue) {
        changeRating(ratingValue, namberRow)
    }
  return (
    <div className="star-block">
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
                <label key={i}>
                    <input 
                        type="radio" 
                        name="rating" 
                        value={ratingValue} 
                        onClick={()=>changeHandleClick(ratingValue)}
                    />
                    <FaStar 
                        className="star" 
                        size={20}  
                        color={ratingValue <= (hover || defaultRating) ? "#ffc107" : "#e4e5e9"}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                    />
                </label> 
            ) 
        })}
    </div>
  )
}
