import React, { MouseEvent } from 'react'
import styled from 'styled-components'
import AddButton from '../assets/addButton.svg'
import Card from './Card'
import { ClassesObject, RepositoriesProps } from 'types/interface'

const Repositories = ({
  setClasses,
  storageState,
  setStorageState,
  setClickedRepo,
}: RepositoriesProps) => {
  const showCards = () => {
    return storageState?.map((data) => {
      const starred =
        storageState.findIndex((item) => item.full_name === data.full_name) >= 0
      return (
        <Card
          starred={starred}
          key={data.full_name}
          card={data}
          storageState={storageState}
          setStorageState={setStorageState}
          onClick={() => handleCardClick(data.full_name)}
        />
      )
    })
  }

  const handleCardClick = (full_name: string) => {
    setClickedRepo(full_name)
    const width = window.innerWidth
    if (width > 768) {
      // desktop
      setClasses((prev: ClassesObject) => ({ ...prev, toShow: 'issues' }))
    } else {
      // mobile
      setClasses((prev: ClassesObject) => ({
        ...prev,
        toShow: 'issues',
        sideContainer: 'slide-in',
      }))
    }
  }

  const handleAddClick = (e: MouseEvent<HTMLDivElement>) => {
    const width = window.innerWidth
    if (width > 768) {
      // desktop
      setClasses((prev: ClassesObject) => ({ ...prev, toShow: 'search' }))
    } else {
      // mobile
      setClasses((prev: ClassesObject) => ({
        ...prev,
        toShow: 'search',
        sideContainer: 'slide-in',
      }))
    }
  }

  return (
    <RepositoryWrapper>
      <HeaderGit>Git</HeaderGit>
      <HeaderHere>here</HeaderHere>
      <Svg>
        <polyline points="0,20 20,20 20,40" />
      </Svg>

      <SavedRepo>저장된 Repository</SavedRepo>

      {showCards()}

      <AddBtn
        src={AddButton}
        alt="Move to search page"
        onClick={handleAddClick}
      />
    </RepositoryWrapper>
  )
}

const RepositoryWrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`

const HeaderGit = styled.span`
  font-size: 6rem;
  font-family: 'Jost', sans-serif;
  color: #112155;
  font-weight: 800;
`

const HeaderHere = styled(HeaderGit)`
  color: #6c84ee;
`

const Svg = styled.svg`
  width: ${(props) => props.width || '70px'};
  height: ${(props) => props.height || '70px'};
  fill: ${(props) => props.fill || 'none'};
  stroke: ${(props) => props.stroke || '#6C84EE'};
  stroke-width: ${(props) => props.strokeWidth || '8'};
`

const SavedRepo = styled.div`
  padding: 2rem 1rem 1rem 1rem;
  font-size: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`

const AddBtn = styled.img`
  display: block;
  width: 6rem;
  height: 6rem;
  margin: 2rem auto;
`

export default Repositories
