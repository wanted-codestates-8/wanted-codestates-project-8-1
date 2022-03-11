import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import styled from 'styled-components'
import { BackButton } from './Issues'
import SearchBar from './SearchBar'
import { useQuery, useQueryClient, useMutation } from 'react-query'
import { get } from 'api/get'
import Card, { CardProps } from './Card'

interface RepositoriesProps {
  setViewSide: Dispatch<SetStateAction<boolean>>
}

function Search({ setViewSide }: RepositoriesProps) {
  const [searchValue, setSearchValue] = useState<string>('')
  const [page, setPage] = useState(1)
  const storage: CardProps['data'][] = JSON.parse(
    localStorage.getItem('favorite') || '[]'
  )

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
    return data?.map((data: any) => {
      const starred =
        storage.findIndex((item) => item.full_name === data.full_name) >= 0
      return <Card starred={starred} key={data.full_name} data={data} />
    })
  }

  return (
    <SearchWrapper>
      <BackButton2 onClick={() => setViewSide((prev) => !prev)}>
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
  padding: 3.2rem;
  background-color: white;
`

const BackButton2 = styled(BackButton)`
  margin-bottom: 2rem;
`

export default Search
