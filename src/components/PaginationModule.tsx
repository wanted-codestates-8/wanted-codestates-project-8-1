import { Pagination, PaginationItem } from '@mui/material'
import React from 'react'

interface IPagination {
  totalPageCount: number
  page: number
  onChange: (e: React.ChangeEvent<unknown>, page: number) => void
}

function PaginationModule({ totalPageCount, page, onChange }: IPagination) {
  return (
    <Pagination
      count={totalPageCount}
      page={page}
      color="primary"
      onChange={onChange}
      hideNextButton={true}
      hidePrevButton={true}
      size="large"
      sx={{
        padding: '20px 0',
      }}
      renderItem={(item) => (
        <PaginationItem {...item} sx={{ fontSize: '1.6rem' }} />
      )}
    />
  )
}

export default PaginationModule
