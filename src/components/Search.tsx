import React, { useState, useEffect } from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import styled from 'styled-components'
import { BackButton } from './Issues'
import SearchBar from './SearchBar'
import { useQuery } from 'react-query'
import { get } from 'api/get'
import Card, { CardProps } from './Card'
import { Pagination, PaginationItem } from '@mui/material'

export interface IItems {
  full_name: string
  avatar_url: string
  stargazers_count: number
  open_issues: number
}

function Search() {
  const [searchValue, setSearchValue] = useState<string>('')
  const [page, setPage] = useState(1)
  const [items, setItems] = useState<IItems[]>([])
  const [totalPageCount, setTotalPageCount] = useState(0)
  const storage: CardProps['data'][] = JSON.parse(
    localStorage.getItem('favorite') || '[]'
  )

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
        storage.findIndex((item) => item.full_name === data.full_name) >= 0
      return <Card starred={starred} key={data.full_name} data={data} />
    })
  }

  return (
    <SearchWrapper>
      <BackButton2>
        <BsChevronLeft strokeWidth="2px"></BsChevronLeft>
      </BackButton2>
      <SearchBar onSubmit={setSearchValue} />
      {items.length > 0 && showCards()}
      {totalPageCount > 0 && (
        <Pagination
          count={totalPageCount}
          page={page}
          color="primary"
          onChange={onPageChange}
          size="large"
          sx={{
            overflow: 'auto',
          }}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              sx={{
                fontSize: '1.8rem',
              }}
            />
          )}
        />
      )}
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
