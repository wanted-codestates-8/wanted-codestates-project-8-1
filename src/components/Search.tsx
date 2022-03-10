import React, { useState, useEffect } from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import styled from 'styled-components'
import { BackButton } from './Issues'
import SearchBar from './SearchBar'
import { useQuery, useQueryClient, useMutation } from 'react-query'
import { get } from 'api/get'
import Card from './Card'
function Search() {
  const [searchValue, setSearchValue] = useState<string>('')
  const [page, setPage] = useState(1)
  const fetcher = () =>
    get('repositories', { q: `${searchValue} in:name`, page })
  const { data, refetch } = useQuery(['repositories', page], fetcher, {
    enabled: false,
    select: (data) => {
      return data.items.map((v: any) => ({
        full_name: v.full_name,
        avatar_url: v.owner.avatar_url,
        stargazers_count: v.stargazers_count,
        open_issues: v.open_issues,
      }))
    },
  })

  useEffect(() => {
    if (searchValue !== '') {
      refetch()
    }
  }, [searchValue])

  const showCards = () => {
    return data?.map((data: any) => <Card key={data.full_name} data={data} />)
  }
  return (
    <SearchWrapper>
      <BackButton2>
        <BsChevronLeft strokeWidth="2px"></BsChevronLeft>
      </BackButton2>
      <SearchBar
        refetch={refetch}
        onSubmit={setSearchValue}
        searchValue={searchValue}
      />
      {showCards()}
    </SearchWrapper>
  )
}
// full_name,
// owner.avatar_url,
// stargazers_count,
// open_issues

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
