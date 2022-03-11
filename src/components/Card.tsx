import React, { useState } from 'react'
import styled from 'styled-components'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsRecordCircle } from 'react-icons/bs'
import { IItems } from './Search'
import { VscIssues } from 'react-icons/vsc'

export interface CardProps {
  data: IItems
  starred: boolean
}

export default function Card({ data, starred }: CardProps) {
  const [clickedStar, SetClickedStar] = useState(starred)

  const handleStar = () => {
    SetClickedStar(!clickedStar)
    const container: CardProps['data'][] = JSON.parse(
      localStorage.getItem('favorite') || '[]'
    )
    const index = container.findIndex(
      (item) => item.full_name === data.full_name
    )

    if (index >= 0) {
      container.splice(index, 1)
      if (container.length === 0) {
        localStorage.removeItem('favorite')
      } else {
        localStorage.setItem('favorite', JSON.stringify(container))
      }
    } else if (container.length < 4) {
      container.push({
        full_name: data.full_name,
        avatar_url: data.avatar_url,
        open_issues: data.open_issues,
        stargazers_count: data.stargazers_count,
      })

      localStorage.setItem('favorite', JSON.stringify(container))
    } else {
      alert('즐겨찾기는 최대 4개까지만 추가할 수 있습니다.')
    }

    console.log(container, 'container')
  }

  return (
    <CardWrap>
      <CardItem>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h3>{data.full_name}</h3>
          <span style={{ cursor: 'pointer' }}>
            {clickedStar ? (
              <AiFillStar size={20} color={'6C84EE'} onClick={handleStar} />
            ) : (
              <AiOutlineStar size={20} onClick={handleStar} />
            )}
          </span>
        </div>

        <Dl>
          <Bottom>
            <dd>
              <AiOutlineStar
                size={20}
                style={{ margin: '4px 0 0 0', color: '#fdcb6e' }}
              />
            </dd>
            <dt>{data.stargazers_count}</dt>
            <dd>
              <VscIssues
                size={20}
                style={{ margin: '4px 0 0 0', color: '#197F37' }}
              ></VscIssues>
            </dd>
            <dt>{data.open_issues}</dt>
          </Bottom>
          <ImgBox src={data.avatar_url} />
        </Dl>
      </CardItem>
    </CardWrap>
  )
}

const CardWrap = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 14px;
  // border: 1px solid black;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
`
const CardItem = styled.div`
  width: 100%;
  h3 {
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  h5 {
    width: 60%;
    margin-top: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const Dl = styled.dl`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  dt {
    margin-right: 8px;
  }
  dd {
    margin-right: 8px;
    display: flex;
    align-items: center;
  }
`
const Bottom = styled.div`
  display: flex;
`

const ImgBox = styled.img`
  width: 30px;
  height: 30px;
  background-color: #6c84ee;
  border-radius: 50%;
`
