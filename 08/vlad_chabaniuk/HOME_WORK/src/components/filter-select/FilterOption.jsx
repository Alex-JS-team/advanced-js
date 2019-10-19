import React from 'react'
import { number } from 'prop-types'

const propTypes = {
  age: number,
  index: number
}

const FilterOption = ({ age, index }) => <option key={index} value={age}>{age}</option>

FilterOption.propTypes = propTypes

export default FilterOption
