import React, { useState } from 'react'
import styled from 'styled-components'
import { HiSearch } from 'react-icons/hi'

interface ISearchBar {
  onSubmit: (value: string) => void
}

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
      />
      <Button type="submit">
        <HiSearch />
      </Button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  overflow: hidden;
  width: fit-content;
  padding: 10px;
  border: 1px solid #e5e5e5;
  background-color: white;
  border-radius: 20px;
`
const Input = styled.input`
  width: 30rem;
  padding: 0;
  border: none;
  outline: none;
  background-color: white;
`
const Button = styled.button`
  font-size: 2rem;
  background-color: transparent;
`

export default SearchBar
