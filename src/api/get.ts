import axios from 'axios'

const customAxios = axios.create({
  baseURL: 'https://api.github.com/search/',
  params: {
    per_page: 10,
  },
})

interface Params {
  q: string
  page: number
}

// const params = {...params};

// params => params : params

export async function get(url: string, params: Params) {
  const { data } = await customAxios.get(url, {
    params,
  })
  return data
}
