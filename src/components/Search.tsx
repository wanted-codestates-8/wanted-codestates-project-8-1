import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
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
  const [items, setItems] = useState<ICard[]>([])
  const [totalPageCount, setTotalPageCount] = useState(0)

  const fetcher = (ctx: QueryFunctionContext) =>
    get('repositories', { q: `${ctx.queryKey[1]} in:name`, page })

  const { refetch } = useQuery([page, searchValue], fetcher, {
    enabled: false,
    onSettled: ({ total_count, items }, error) => {
      setTotalPageCount(total_count > 1000 ? 100 : Math.ceil(total_count / 10))

      const newItems = items.map((v: any) => ({
        full_name: v.full_name,
        avatar_url: v.owner.avatar_url,
        stargazers_count: v.stargazers_count,
        open_issues: v.open_issues,
      }))

      setItems(newItems)
    },
  })

  const onPageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }

  useEffect(() => {
    return () => {
      setItems([])
    }
  }, [])

  useEffect(() => {
    if (searchValue.trim() !== '') {
      refetch()
    }
  }, [searchValue, page, refetch])

  const showCards = () => {
    return items?.map((data) => {
      const starred =
        storageState.findIndex((item) => item.full_name === data.full_name) >= 0
      return (
        <Card
          starred={starred}
          key={data.full_name}
          data={data}
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
      {items.length > 0 && showCards()}
      {totalPageCount > 0 && (
        <PaginationModule
          totalPageCount={totalPageCount}
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
