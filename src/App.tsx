import React, { useState } from 'react'
import styled from 'styled-components'
import Repositories from 'components/Repositories'
import Search from 'components/Search'
import Issues from 'components/Issues'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  const [viewSide, setViewSide] = useState(false)
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Main>
        <Container>
          <Repositories setViewSide={setViewSide} />
        </Container>
        <SideContainer className={viewSide ? 'slide-in' : ''}>
          <Search />
        </SideContainer>
        <Issues />
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
`

export default App
