import React, { useState } from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'

function Search() {
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <SearchWrapper>
      <SearchBar onSubmit={setSearchValue} />
    </SearchWrapper>
  )
}

const SearchWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: white;
`

export default Search
