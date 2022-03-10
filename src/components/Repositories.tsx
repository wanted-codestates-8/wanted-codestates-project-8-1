import React from 'react'
import styled from 'styled-components'

function Repositories() {
  return (
    <RepositoryWrapper>
      <HeaderGit>Git</HeaderGit>
      <HeaderHere>here</HeaderHere>
      <Svg>
        <polyline points="0,20 20,20 20,40 40" />
      </Svg>

      <SavedRepo>저장된 Repository</SavedRepo>
    </RepositoryWrapper>
    )
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
`

export default Repositories
