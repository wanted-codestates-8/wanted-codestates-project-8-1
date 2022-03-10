import React, { useState } from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import styled from 'styled-components'
import { BackButton } from './Issues'
import SearchBar from './SearchBar'

function Search() {
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <SearchWrapper>
      <BackButton2>
        <BsChevronLeft stroke-width="2px"></BsChevronLeft>
      </BackButton2>
      <SearchBar onSubmit={setSearchValue} />
    </SearchWrapper>
  )
}

const SearchWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: white;
`

const BackButton2 = styled(BackButton)`
  margin-bottom: 2rem;
`

export default Search
