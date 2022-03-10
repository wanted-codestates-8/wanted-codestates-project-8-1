import React, { Dispatch, SetStateAction, useState } from 'react'
import styled, { css } from 'styled-components'
import { BsChevronLeft } from 'react-icons/bs'
import { VscIssues } from 'react-icons/vsc'
import { useQuery, useQueryClient, useMutation } from 'react-query'
import { get } from 'api/get'

interface RepositoriesProps {
  clickedRepo: string
  setViewSide: Dispatch<SetStateAction<boolean>>
}

export interface Items {
  repositoryName: string
  issue: {
    title: string
    html_url: string
    user: {
      login: string
    }
  }[]
}

function Issues({ setViewSide, clickedRepo }: RepositoriesProps) {
  const [page, setPage] = useState(1)
  const [totalPageCount, setTotalPageCount] = useState<number>(0)
  const [items, setItems] = useState<Items>({
    repositoryName: '',
    issue: [],
  })

  const fetcher = () => get('issues', { q: `repo:${clickedRepo}`, page })

  const { data, refetch } = useQuery(['issues', page], fetcher, {
    enabled: true,
    onSettled: (data, error) => {
      const totalCount =
        data.total_count > 1000 ? 100 : Math.ceil(data.total_count / 10)
      setTotalPageCount(totalCount)

      const newItems = {
        repositoryName: clickedRepo,
        issue: [] as any,
      }

      newItems.issue = data.items.map((v: any) => ({
        title: v.title,
        html_url: v.html_url,
        user: {
          login: v.user.login,
        },
      }))

      setItems(newItems)
    },
  })

  console.log(data)

  return (
    <IssuesWrapper>
      <BackButton>
        <BsChevronLeft stroke-width="2px"></BsChevronLeft>
      </BackButton>
      <RepoTitle>{items.repositoryName}</RepoTitle>
      <Tag>
        <VscIssues
          size={24}
          style={{ margin: '4px 4px 0 0', color: '#197F37' }}
        ></VscIssues>
        <div>open</div>
      </Tag>
      <IssueLists>
        {items.issue.map((item: any, idx: any) => (
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
