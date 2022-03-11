import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styled from 'styled-components'
import { BsChevronLeft } from 'react-icons/bs'
import { VscIssues } from 'react-icons/vsc'
import { QueryFunctionContext, useQuery } from 'react-query'
import { get } from 'api/get'
import PaginationModule from './PaginationModule'
import { ClassesObject } from 'types/interface'

interface IssuesProps {
  clickedRepo: string
  setClasses: Dispatch<SetStateAction<ClassesObject>>
}

interface IIssues {
  repositoryName: string
  issue: {
    title: string
    html_url: string
    user: {
      login: string
    }
  }[]
}

function Issues({ clickedRepo, setClasses }: IssuesProps) {
  const [page, setPage] = useState(1)
  const [totalPageCount, setTotalPageCount] = useState<number>(0)
  const [items, setItems] = useState<IIssues>({
    repositoryName: '',
    issue: [],
  })

  const fetcher = (ctx: QueryFunctionContext) =>
    get('issues', {
      q: `repo:${ctx.queryKey[1]} is:issue`,
      page,
    })

  useQuery([page, clickedRepo], fetcher, {
    enabled: true,
    onSettled: (data, error) => {
      const totalCount =
        data.total_count > 1000 ? 100 : Math.ceil(data.total_count / 10)
      setTotalPageCount(totalCount)

      const newItems = {
        repositoryName: clickedRepo,
        issue: [],
      }

      newItems.issue = data.items.map((v: IIssues['issue'][0]) => ({
        title: v.title,
        html_url: v.html_url,
        user: {
          login: v.user.login,
        },
      }))

      setItems(newItems)
    },
  })

  const onPageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }

  useEffect(() => {
    return () => {
      setItems({
        repositoryName: '',
        issue: [],
      })
    }
  }, [])

  return (
    <IssuesWrapper>
      <BackButton
        onClick={() => setClasses((prev) => ({ ...prev, sideContainer: '' }))}
      >
        <BsChevronLeft strokeWidth="2px"></BsChevronLeft>
      </BackButton>
      <RepoTitle>{items.repositoryName}</RepoTitle>
      {items.issue.length !== 0 && (
        <Tag>
          <VscIssues
            size="2.4rem"
            style={{ margin: '4px 4px 0 0', color: '#197F37' }}
          />
          <div>open</div>
        </Tag>
      )}
      <IssueLists>
        {items.issue.map((item, idx) => (
          <IssueList key={idx}>
            <VscIssues
              size="2.4rem"
              style={{
                margin: '4px 4px 0 0',
                color: '#197F37',
                flexShrink: 0,
              }}
            />
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
      {totalPageCount > 0 && (
        <PaginationModule
          totalPageCount={totalPageCount}
          page={page}
          onChange={onPageChange}
        />
      )}
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

  transition: opacity 0s 0.5s;

  @media (min-width: 768px) {
    transition: opacity 0.5s 0s;
    opacity: 0;
  }
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
  color: #197f37;
  border: solid 1px #197f37;
`
export default Issues
