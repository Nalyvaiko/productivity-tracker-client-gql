import { gql } from 'urql'

export const IssuesQuery = gql`
  query Query {
    issues {
      content
      createdAt
      id
      name
      status
    }
  }
`
