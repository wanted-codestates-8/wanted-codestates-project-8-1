import React from 'react'
import styled from 'styled-components'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsRecordCircle } from 'react-icons/bs'

interface CardProps {
  data: {
    full_name: string
    avatar_url: string
    stargazers_count: number
    open_issues: number
  }
}

export default function Card({ data }: CardProps) {
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
            <AiFillStar color={'6C84EE'} />
          </span>
        </div>

        <Dl>
          <Bottom>
            <dd>
              <AiOutlineStar size={20} />
            </dd>
            <dt>{data.stargazers_count}</dt>
            <dd>
              <BsRecordCircle size={20} />
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
  margin-bottom: 10px;
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
