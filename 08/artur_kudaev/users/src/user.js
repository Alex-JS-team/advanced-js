import React from 'react';

export default function User (props) {
  return (

      <div className="card" style={{'width': '18rem'}}>
        <img src={props.img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text">Login: {props.login}</p>
            <p>Score: {props.score}</p>
            <p>Link: <a target='_blank' rel="noopener noreferrer"  href={props.link}>{props.login}</a></p>
          </div>
      </div>

  )
}