import React, { MouseEvent, useState } from 'react'
import styled from 'styled-components'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { CardProps, ICard } from 'types/interface'
import { VscIssues } from 'react-icons/vsc'
import { Box, Modal } from '@mui/material'

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fit-content',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
}

export default function Card({
  card,
  starred,
  storageState,
  setStorageState,
  onClick,
}: CardProps) {
  const [modal, setModal] = useState(false)

  const handleStar = (e: MouseEvent<HTMLOrSVGElement>) => {
    e.stopPropagation()
    const index = storageState.findIndex(
      (item) => item.full_name === card.full_name
    )
    if (index >= 0) {
      storageState.splice(index, 1)
      if (storageState.length === 0) {
        setStorageState([])
      } else {
        setStorageState([...storageState])
      }
    } else if (storageState.length < 4) {
      setStorageState((prev: ICard[]) => [
        ...prev,
        {
          full_name: card.full_name,
          avatar_url: card.avatar_url,
          open_issues: card.open_issues,
          stargazers_count: card.stargazers_count,
        },
      ])
    } else {
      setModal(true)
    }
  }
  return (
    <>
      <CardWrap onClick={onClick}>
        <CardItem>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h3>{card.full_name}</h3>
            <span style={{ cursor: 'pointer' }}>
              {starred ? (
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
              <dt>{card.stargazers_count}</dt>
              <dd>
                <VscIssues
                  size={20}
                  style={{ margin: '4px 0 0 0', color: '#197F37' }}
                ></VscIssues>
              </dd>
              <dt>{card.open_issues}</dt>
            </Bottom>
            <ImgBox src={card.avatar_url} />
          </Dl>
        </CardItem>
      </CardWrap>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <h4>즐겨찾기는 최대 4개까지만 추가할 수 있습니다.</h4>
        </Box>
      </Modal>
    </>
  )
}

export const CardWrap = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 14px;
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
