import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Repositories from 'components/Repositories'
import Search, { IItems } from 'components/Search'
import Issues from 'components/Issues'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  const [viewSide, setViewSide] = useState(false)
  const [storageState, setStorageState] = useState<IItems[]>(
    JSON.parse(localStorage.getItem('favorite') || '[]')
  )
  const [clickedRepo, setClickedRepo] = useState<string>(
    'chltjdrhd777/my-record'
  )
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
      },
    },
  })

  useEffect(() => {
    if (storageState.length === 0) {
      localStorage.removeItem('favorite')
    } else {
      localStorage.setItem('favorite', JSON.stringify(storageState))
    }
  }, [storageState])

  return (
    <QueryClientProvider client={queryClient}>
      <Main>
        <Container>
          <Repositories
            setViewSide={setViewSide}
            storageState={storageState}
            setStorageState={setStorageState}
          />
        </Container>
        <SideContainer className={viewSide ? 'slide-in' : ''}>
          <Search
            setViewSide={setViewSide}
            storageState={storageState}
            setStorageState={setStorageState}
          />
          {/* <Issues setViewSide={setViewSide} clickedRepo={clickedRepo} /> */}
        </SideContainer>
      </Main>
    </QueryClientProvider>
  )
}

const Main = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 3.2rem;
  transition: width 0.5s ease-out;

  @media (min-width: 768px) {
    width: 50%;
  }
`

const SideContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 100%;
  /* background-color: midnightblue; */
  transition: left 0.5s ease-out;

  &.slide-in {
    left: 0;
  }

  @media (min-width: 768px) {
    left: 50%;
    width: 50%;
  }
`

export default App
