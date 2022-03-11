import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import AddButton from '../assets/addButton.svg'
import Card from './Card'
import { IItems } from './Search'

interface RepositoriesProps {
  setViewSide: Dispatch<SetStateAction<boolean>>
  storageState: IItems[]
  setStorageState: Dispatch<SetStateAction<IItems[]>>
}

const Repositories = ({
  setViewSide,
  storageState,
  setStorageState,
}: RepositoriesProps) => {
  const showCards = () => {
    return storageState?.map((data: any) => {
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
        onClick={() => setViewSide(true)}
      />
    </RepositoryWrapper>
  )
}

const color = {
  primary: '#112155',
  secondary: '#6C84EE',
}

const RepositoryWrapper = styled.section`
  width: 100%;
  height: 100%;
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

const Title = styled.img`
  display: block;
`

const Subtitle = styled.h3`
  margin: 16px 0;
`

const Dummy = styled.article`
  width: 100%;
  height: 140px;
  margin: 16px 0;
  border: 2px solid black;
  border-radius: 24px;
  transition: background-color 0.2s ease-out;

  :hover {
    background-color: ${color.secondary};
  }
`

const AddBtn = styled.img`
  display: block;
  width: 6rem;
  height: 6rem;
  margin: 2rem auto;
`

export default Repositories
