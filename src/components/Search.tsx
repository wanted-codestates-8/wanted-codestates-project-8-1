import React, { useState } from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import styled from 'styled-components'
import { BackButton } from './Issues'
import SearchBar from './SearchBar'
import { QueryFunctionContext, useQuery } from 'react-query'
import { get } from 'api/get'
import Card, { CardWrap } from './Card'
import PaginationModule from './PaginationModule'
import { ClassesObject, INoItem, IRepo, SearchProps } from 'types/interface'
import { Skeleton } from '@mui/material'

function Search({ storageState, setStorageState, setClasses }: SearchProps) {
  const [searchValue, setSearchValue] = useState<string>('')
  const [page, setPage] = useState(1)

  const fetcher = (ctx: QueryFunctionContext) => {
    if (ctx.queryKey[1] === '') {
      return { items: [], total_count: -1 }
    }

    return get('repositories', { q: `${ctx.queryKey[1]} in:name`, page })
  }

  const { data, isFetching } = useQuery([page, searchValue], fetcher, {
    staleTime: 60 * 1000,
    keepPreviousData: true,
  })

  const onPageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }

  const showCards = () => {
    console.log(data)
    if (!data) {
      return null
    } else if (data.total_count === 0) {
      return <NoItem />
    }

    return data.items.map((d: IRepo, index: number) => {
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
          key={index}
          card={newItems}
          storageState={storageState}
          setStorageState={setStorageState}
        />
      )
    })
  }

  return (
    <SearchWrapper>
      <BackButton2
        onClick={() =>
          setClasses((prev: ClassesObject) => ({ ...prev, sideContainer: '' }))
        }
      >
        <BsChevronLeft strokeWidth="2px"></BsChevronLeft>
      </BackButton2>
      <SearchBar onSubmit={setSearchValue} />
      {isFetching
        ? new Array(10).fill(0).map((i, idx) => <SkeletonBox key={idx} />)
        : showCards()}
      {data && data.total_count > 0 && (
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

export const SkeletonBox = () => (
  <SkeletonWrapper>
    <Skeleton animation="wave" />
    <Skeleton animation="wave" height={18} />
    <Skeleton
      animation="wave"
      variant="circular"
      width={25}
      height={25}
      sx={{ float: 'left', marginRight: 5 }}
    />
    <Skeleton
      animation="wave"
      variant="circular"
      width={25}
      height={25}
      sx={{ float: 'left' }}
    />
    <Skeleton
      animation="wave"
      variant="circular"
      width={25}
      height={25}
      sx={{ float: 'right' }}
    />
  </SkeletonWrapper>
)

export const NoItem = ({ content }: INoItem) => (
  <NoItemWrapper>
    <span>{content || '검색 결과가 없습니다.'}</span>
  </NoItemWrapper>
)

const SearchWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 3.2rem;
  background-color: white;
  overflow-y: scroll;
`

const BackButton2 = styled(BackButton)`
  margin-bottom: 2rem;
  transition: opacity 0s 0.5s;

  @media (min-width: 768px) {
    transition: opacity 0.5s 0s;
    opacity: 0;
  }
`

const SkeletonWrapper = styled(CardWrap)`
  display: block;
  height: 93px;
  margin-right: 0;
`

export const NoItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0;
`

export default Search
