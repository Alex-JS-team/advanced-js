import React from 'react';

export default function Form(props) {
  return (
    <form>
      <input type="text"  onChange={props.inputValue} placeholder="Set name.." />
        <button  onClick={props.getUsers} type="button">Search</button>
    </form>
  )
}