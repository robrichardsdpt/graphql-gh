import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import Button from 'react-bootstrap/Button'
import RepoItem from '../repo-item/repo-item.component'
import './repo-query.styles.css'

// Apollo/GraphQL query to GH
// Find the top 5 repositories with the most stars created last month.
const GET_HOT_REPOS = gql`
  {
    search(query: "created:2020-01-01..2020-12-31 stars:>2000", type: REPOSITORY, first: 5) {
      nodes {
        ... on Repository {
          databaseId
          name
          createdAt
          description
          url
          stargazers(first: 5){
            totalCount
         }
         owner {
           login
           avatarUrl
           url
         }
        }
      }
    }
  }
`
// Create a button with an id of “hot_repo” that upon click will refresh the content of a tablelike div with the top 5 repositories with the most stars created last month.
export const GetHotRepoQuery = () => {
// Sends API data to RepoItem component to populate JSX
return(
  <div>
    <Query query={GET_HOT_REPOS} >
      {({ data, error, loading, refetch }) => {
          if (loading) return <div>loading...</div>
          if (error) return console.log(JSON.stringify(error))
          return <div>
          {
            data.search.nodes.map(repo => (
              <RepoItem key={repo.name} repo={repo}/>
            ))
          }
            <Button id='hot_repo' className='repo-button' variant='info' size='lg' block onClick={()=> refetch()}>Update Repos</Button>
          </div>
        }
      }
    </Query>
  </div>)
}
