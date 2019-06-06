import React from 'react';


function Card() {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={`${process.env.PUBLIC_URL}/img/portrait5.jpg`} class="card-img-top" alt="portrait"></img>
        </div>
    );
}
export default Card;