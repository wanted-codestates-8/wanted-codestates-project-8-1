import React, { useState } from 'react'
import styled from 'styled-components'
import { HiSearch } from 'react-icons/hi'
import { ISearchBar } from 'types/interface'

function SearchBar({ onSubmit }: ISearchBar) {
  const [editingValue, setEditingValue] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(editingValue)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={editingValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEditingValue(e.target.value)
        }
        placeholder="Search Repository"
      />
      <Button type="submit">
        <HiSearch />
      </Button>
    </Form>
  )
}

const Input = styled.input`
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  background-color: white;
`
const Button = styled.button`
  font-size: 2rem;
  background-color: transparent;
`
const Form = styled.form`
  display: flex;
  overflow: hidden;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e5e5e5;
  background-color: white;
  border-radius: 20px;
`

export default SearchBar
