import React from 'react'

const SearchComponent = ({handleSubmit,search,handleOnChange}) => {
  return (
    <form>
      <input type='text' value={search} onChange={(e) => {handleOnChange(e.target.value)}}/>
      <button onClick={handleSubmit}>ok</button>
    </form>
  )
}

export default SearchComponent
