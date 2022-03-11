export interface ClassesObject {
  sideContainer: string
  toShow: string
  desktop: string
}

export interface ICard {
  full_name: string
  avatar_url: string
  stargazers_count: number
  open_issues: number
}

export interface CardProps {
  card: ICard
  starred: boolean
  storageState: ICard[]
  setStorageState: Dispatch<SetStateAction<ICard[]>>
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

interface IssuesProps {
  clickedRepo: string
  setClasses: Dispatch<SetStateAction<ClassesObject>>
}

interface IIssue {
  total_count: number
  items: {
    title: string
    html_url: string
    user: {
      login: string
    }
  }[]
}

export interface IPagination {
  totalPageCount: number
  page: number
  onChange: (e: React.ChangeEvent<unknown>, page: number) => void
}

export interface RepositoriesProps {
  setClasses: Dispatch<SetStateAction<ClassesObject>>
  storageState: ICard[]
  setStorageState: Dispatch<SetStateAction<ICard[]>>
  setClickedRepo: Dispatch<SetStateAction<string>>
}

export interface SearchProps {
  storageState: ICard[]
  setStorageState: Dispatch<SetStateAction<ICard[]>>
  setClasses: Dispatch<SetStateAction<ClassesObject>>
}

export interface IRepo {
  full_name: string
  owner: {
    avatar_url: string
  }
  stargazers_count: number
  open_issues: number
}

export interface ISearchBar {
  onSubmit: (value: string) => void
}
