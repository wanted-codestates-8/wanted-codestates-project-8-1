import React, { useState } from 'react'
import styled from 'styled-components'
import { useQuery, useQueryClient, useMutation } from 'react-query'
import { get } from 'api/get'

function Repositories() {
  const [page, setPage] = useState(1)
  const [q, setQ] = useState('wanted')
  const fetcher = () => get('repositories', { q, page })

  const data = useQuery(['repositories', page], fetcher, {
    onSettled: (data, error) => {},
  })

  // console.log(data)

  return (
    <RepositoryWrapper>
      <button
        onClick={() => {
          setPage((prev) => prev + 1)
        }}
      >
        page up
      </button>
    </RepositoryWrapper>
  )
}

const RepositoryWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: green;
`

export default Repositories
