import React, { Dispatch, SetStateAction } from 'react'
import styled, { css } from 'styled-components'
import { BsChevronLeft } from 'react-icons/bs'
import { VscIssues } from 'react-icons/vsc'

const data = {
  repositoryName: '레포 네임',

  issue: [
    {
      title: '[Feat]dddd',

      html_url:
        'https://github.com/wanted-codestates-8/wanted-codestates-project-8-1/issues/1',
      user: {
        login: 'chloe41297',
      },
    },
    {
      title: '[Feat]dddd',

      html_url:
        'https://github.com/wanted-codestates-8/wanted-codestates-project-8-1/issues/1',
      user: {
        login: 'chloe41297',
      },
    },
    {
      title: '[Feat]dddd',

      html_url:
        'https://github.com/wanted-codestates-8/wanted-codestates-project-8-1/issues/1',
      user: {
        login: 'chloe41297',
      },
    },
  ],
}

interface RepositoriesProps {
  setViewSide: Dispatch<SetStateAction<boolean>>
}

function Issues({ setViewSide }: RepositoriesProps) {
  return (
    <IssuesWrapper>
      <BackButton onClick={() => setViewSide((prev) => !prev)}>
        <BsChevronLeft stroke="2px"></BsChevronLeft>
      </BackButton>
      <RepoTitle>{data.repositoryName}</RepoTitle>
      <Tag>
        <VscIssues
          size={24}
          style={{ margin: '4px 4px 0 0', color: 'white' }}
        ></VscIssues>
        <div>open</div>
      </Tag>
      <IssueLists>
        {data.issue.map((item, idx) => (
          <IssueList key={idx}>
            <VscIssues
              size={24}
              style={{ margin: '4px 4px 0 0', color: '#197F37' }}
            ></VscIssues>
            <a href={item.html_url}>
              <div>
                <IssueListTitle>{item.title}</IssueListTitle>
                <IssueListSubTitle>
                  created by {item.user?.login}
                </IssueListSubTitle>
              </div>
            </a>
          </IssueList>
        ))}
      </IssueLists>
    </IssuesWrapper>
  )
}

const IssuesWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 3.2rem;
  box-sizing: border-box;
`
export const BackButton = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #6c84ee;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`
const RepoTitle = styled.h3`
  font-size: 24px;
  margin-top: 20px;
`
const IssueLists = styled.ul`
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
`
const IssueList = styled.li`
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  margin: 10px 0;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  width: 100%;
`
const IssueListTitle = styled.h4`
  font-size: 18px;
  &:hover {
    color: #0969da;
    text-decoration: underline;
  }
`
const IssueListSubTitle = styled.div`
  color: rgba(0, 0, 0, 0.3);
`
const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 80px;
  padding: 0 0 2px 0;
  margin-top: 20px;
  background-color: #6c84ee;
  color: white;
`
export default Issues
