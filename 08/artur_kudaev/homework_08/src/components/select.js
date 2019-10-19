import React from 'react';

export default function Select(props) {
    let uniqueAge = [...new Set(props.items.map(el=>el.age))];

    function filterByAge(e) {
      return props.func(e.target.value)
    }

    return (

        <select onChange={filterByAge}>
          <option>All</option>
          {
            uniqueAge.map((el, i)=> {
              return <option key={i}>{el}</option>
            })
          }
        </select>
    )
}