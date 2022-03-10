import React from 'react'
import styled from 'styled-components'
import Repositories from 'components/Repositories'
import Search from 'components/Search'
import Issues from 'components/Issues'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
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
          <Repositories />
        </Container>
      </Main>
    </QueryClientProvider>
  )
}

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: red;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
  padding: 3.2rem;
`

export default App
