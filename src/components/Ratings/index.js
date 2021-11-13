import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateValueProperty } from '../../core/value/value.actions';
import "../../styles/Rating.scss";

const Rating = ({valueId, value}) => {
    const dispatch = useDispatch();
    const [stars, setStars] = useState(value ? value : 0);
    return (
      <div id="rating">
          {[0,1,2,3,4].map((star,idx) => (
                <span
                    key={idx}
                    onClick={() => (
                        stars === idx+1 ? (
                            setStars(0)
                            ) : (
                            setStars(idx+1), 
                            dispatch(updateValueProperty({valueId, value: idx+1}))
                        ))}
                    className={stars >= idx+1 ? "colorized" : ""}
                >
                *
                </span>
          ))}
      </div>
    );
};

export default Rating;