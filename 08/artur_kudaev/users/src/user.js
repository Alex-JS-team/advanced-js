import React from 'react';

export default function User (props) {
  return (

      <div className="card" style={{'width': '18rem'}}>
        <img src={props.img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text">{props.login}</p>
          </div>
      </div>

  )
}