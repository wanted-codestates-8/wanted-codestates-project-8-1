import React, { useState, Dispatch, SetStateAction } from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import styled from 'styled-components'
import { BackButton } from './Issues'
import SearchBar from './SearchBar'
import { QueryFunctionContext, useQuery } from 'react-query'
import { get } from 'api/get'
import Card from './Card'
import PaginationModule from './PaginationModule'
import { ClassesObject, ICard } from 'types/interface'

interface SearchProps {
  storageState: ICard[]
  setStorageState: Dispatch<SetStateAction<ICard[]>>
  setClasses: Dispatch<SetStateAction<ClassesObject>>
}

function Search({ storageState, setStorageState, setClasses }: SearchProps) {
  const [searchValue, setSearchValue] = useState<string>('')
  const [page, setPage] = useState(1)

  const fetcher = (ctx: QueryFunctionContext) => {
    if (ctx.queryKey[1] === '') {
      return { items: [], total_count: 0 }
    }

    return get('repositories', { q: `${ctx.queryKey[1]} in:name`, page })
  }

  const { data } = useQuery([page, searchValue], fetcher, {
    staleTime: 60 * 1000,
    keepPreviousData: true,
  })

  const onPageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }

  const showCards = () => {
    if (!data) {
      return null
    }

    return data.items.map((d: any) => {
      const starred =
        storageState.findIndex((item) => item.full_name === d.full_name) >= 0

      const newItems = {
        full_name: d.full_name,
        avatar_url: d.owner.avatar_url,
        stargazers_count: d.stargazers_count,
        open_issues: d.open_issues,
      }

      return (
        <Card
          starred={starred}
          key={data.full_name}
          data={newItems}
          storageState={storageState}
          setStorageState={setStorageState}
        />
      )
    })
  }

  return (
    <SearchWrapper>
      <BackButton2
        onClick={() => setClasses((prev) => ({ ...prev, sideContainer: '' }))}
      >
        <BsChevronLeft strokeWidth="2px"></BsChevronLeft>
      </BackButton2>
      <SearchBar onSubmit={setSearchValue} />
      {data && showCards()}
      {data && (
        <PaginationModule
          totalPageCount={
            data.total_count > 1000 ? 100 : Math.ceil(data.total_count / 10)
          }
          page={page}
          onChange={onPageChange}
        />
      )}
    </SearchWrapper>
  )
}

const SearchWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 3.2rem;
  background-color: white;
`

const BackButton2 = styled(BackButton)`
  margin-bottom: 2rem;
  transition: opacity 0s 0.5s;

  @media (min-width: 768px) {
    transition: opacity 0.5s 0s;
    opacity: 0;
  }
`

export default Search
