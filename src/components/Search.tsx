import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import styled from 'styled-components'
import { BackButton } from './Issues'
import SearchBar from './SearchBar'
import { useQuery } from 'react-query'
import { get } from 'api/get'
import Card, { CardProps } from './Card'
import { Pagination, PaginationItem } from '@mui/material'
import PaginationModule from './PaginationModule'

export interface IItems {
  full_name: string
  avatar_url: string
  stargazers_count: number
  open_issues: number
}

interface RepositoriesProps {
  setViewSide: Dispatch<SetStateAction<boolean>>
  storageState: IItems[]
  setStorageState: Dispatch<SetStateAction<IItems[]>>
}

function Search({
  setViewSide,
  storageState,
  setStorageState,
}: RepositoriesProps) {
  const [searchValue, setSearchValue] = useState<string>('')
  const [page, setPage] = useState(1)
  const [items, setItems] = useState<IItems[]>([])
  const [totalPageCount, setTotalPageCount] = useState(0)

  const fetcher = () =>
    get('repositories', { q: `${searchValue} in:name`, page })

  const { data, refetch } = useQuery(['repositories', page], fetcher, {
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
    if (searchValue.trim() !== '') {
      refetch()
    }
  }, [searchValue, page, refetch])

  const showCards = () => {
    return items?.map((data: any) => {
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
      <BackButton2 onClick={() => setViewSide((prev) => !prev)}>
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
  height: fit-content;
  padding: 3.2rem;
  background-color: white;
`

const BackButton2 = styled(BackButton)`
  margin-bottom: 2rem;
`

export default Search
