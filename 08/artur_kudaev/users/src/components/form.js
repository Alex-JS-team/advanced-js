import React from 'react';

export default function Form(props) {
  return (
    <form className={window.location.origin === window.location.origin + '/favorite' ? 'hide' : ''}>
      <input type="text"  onChange={props.inputValue} placeholder="Set name.." />
        <button  onClick={props.getUsers} type="button">Search</button>
    </form>
  )
}