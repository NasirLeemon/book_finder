/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Filter = ({ handleSort }) => {
  const [sortInput, setSortInput] = useState('')

 
const handleChange = (e) => {
  const value = e.target.value
  setSortInput(value)
  handleSort(value)

}

    return (
        <div className="flex items-stretch space-x-3">
            <select
              className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
              name="sortBy"
              id="sortBy"
              value={sortInput}
              onChange={handleChange}
            >
              <option value="">Sort</option>
              <option value="name_asc">Name (A-Z)</option>
              <option value="name_desc">Name (Z-A)</option>
              <option value="year_asc">Publication Year (Oldest)</option>
              <option value="year_desc">Publication Year (Newest)</option>
            </select>

          </div>
    );
}

export default Filter;
