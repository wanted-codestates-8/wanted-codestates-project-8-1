import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import Repositories from 'components/Repositories'
import Search from 'components/Search'
import Issues from 'components/Issues'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ClassesObject, ICard } from 'types/interface'

function App() {
  const [classes, setClasses] = useState<ClassesObject>({
    sideContainer: '',
    toShow: 'search',
    desktop: window.innerWidth >= 768 ? 'desktop' : '',
  })
  const [storageState, setStorageState] = useState<ICard[]>(
    JSON.parse(localStorage.getItem('favorite') || '[]')
  )
  const [clickedRepo, setClickedRepo] = useState<string>('')

  const throttled = useRef(false)

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

  window.onresize = () => {
    if (!throttled.current) {
      if (window.innerWidth >= 768) {
        setClasses({ ...classes, desktop: 'desktop', sideContainer: '' })
      } else {
        setClasses({ ...classes, desktop: '' })
      }

      throttled.current = true
      setTimeout(() => {
        throttled.current = false
      }, 100)
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Main>
        <Container className={classes.desktop}>
          <Repositories
            setClasses={setClasses}
            storageState={storageState}
            setStorageState={setStorageState}
            setClickedRepo={setClickedRepo}
          />
        </Container>
        <SideContainer
          className={`${classes.sideContainer} ${classes.desktop}`}
        >
          {classes.toShow === 'search' && (
            <Search
              storageState={storageState}
              setStorageState={setStorageState}
              setClasses={setClasses}
            />
          )}
          {classes.toShow === 'issues' && (
            <Issues clickedRepo={clickedRepo} setClasses={setClasses} />
          )}
        </SideContainer>
      </Main>
    </QueryClientProvider>
  )
}

const Main = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 3.2rem;
  transition: width 0.5s ease-out;

  &.desktop {
    width: 50%;
  }
`

const SideContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 100%;
  transition: width 0.5s ease-out, left 0.5s ease-out;

  &.slide-in {
    left: 0;
  }

  &.desktop {
    width: 50%;
    left: 50%;
    width: 50%;
  }
`

export default App
