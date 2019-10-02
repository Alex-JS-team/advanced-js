import React from 'react'
import { array, func } from 'prop-types'
import FilterOption from './FilterOption'

const propTypes = {
  ages: array,
  setAgeFilter: func
}

const FilterSelect = ({ ages, setAgeFilter }) => (
  <select
    className='custom-select mb-3'
    onChange={e => setAgeFilter(parseInt(e.target.value))}
  >
    <option defaultValue>Select age to filter by</option>
    {ages.map((age, index) => <FilterOption key={index} index={index} age={age} />)}
  </select>
)

FilterSelect.propTypes = propTypes

export default FilterSelect
