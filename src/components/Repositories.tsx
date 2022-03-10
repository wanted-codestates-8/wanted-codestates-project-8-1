import React, { useState, Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import AddButton from '../assets/addButton.svg'
import { useQuery, useQueryClient, useMutation } from 'react-query'
import { get } from 'api/get'
import Card from './Card'

interface RepositoriesProps {
  setViewSide: Dispatch<SetStateAction<boolean>>
}

const Repositories = ({ setViewSide }: RepositoriesProps) => {
  const [page, setPage] = useState(1)
  const [q, setQ] = useState('wanted')
  const fetcher = () => get('repositories', { q, page })

  const data = useQuery(['repositories', page], fetcher, {
    onSettled: (data, error) => {},
  })

  return (
    <RepositoryWrapper>
       <HeaderGit>Git</HeaderGit>
      <HeaderHere>here</HeaderHere>
      <Svg>
        <polyline points="0,20 20,20 20,40 40" />
      </Svg>

      <SavedRepo>저장된 Repository</SavedRepo>
      <Title src={Logo} alt="Logo" />
      <Subtitle>저장된 Repository</Subtitle>
      <Dummy />
      <Dummy />
      <AddBtn
        src={AddButton}
        alt="Move to search page"
        onClick={() => setViewSide(true)}
      />
      <Card />
      <Card />
      <Card />
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
  color: #6C84EE;
`

const Svg = styled.svg`
  width: ${props => props.width || "70px"};
  height: ${props => props.height || "70px"};
  fill: ${props => props.fill || "none"};
  stroke: ${props => props.stroke || "#6C84EE"};
  stroke-width: ${props => props.strokeWidth || "8"};
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
  margin: 0 auto;
`

export default Repositories
