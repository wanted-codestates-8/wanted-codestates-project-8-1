import React from 'react'
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

function Issues() {
  return (
    <IssuesWrapper>
      <BackButton>
        <BsChevronLeft strokeWidth="2px"></BsChevronLeft>
      </BackButton>
      <RepoTitle>{data.repositoryName}</RepoTitle>
      <Tag>
        <VscIssues
          size={24}
          style={{ margin: '4px 4px 0 0', color: '#197F37' }}
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
  padding-top: 20px;
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
`
const IssueList = styled.li`
  border: solid 1px rgba(0, 0, 0, 0.3);
  margin: 10px 0;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: start;
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
  border: solid 1px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  width: 80px;
  padding: 0 0 2px 0;
  margin-top: 20px;
`
export default Issues
