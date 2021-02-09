import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import UserItem from '../user-item/user-item.component'
import Button from 'react-bootstrap/Button'
import './user-query.styles.css'

// GraphQL/Apollo query to find the top 5 most active users by followers created over the last year (2020).
const GET_HOT_USERS = gql`
  {
    search(query: "created:2020-01-01..2020-12-31", type: USER, first: 5) {
      nodes {
        ... on User {
          databaseId
          login
          name
          avatarUrl
          bio
          createdAt
          url
          followers(first:5) {
            totalCount
          }
        }
      }
    }
  }
`
// Create a button with an id of “prolific_users” that upon click will refresh the content of a tablelike div with the top 5 most active users by followers created over the last year (2020).
// Automatically refresh the number of followers every 2 minutes (or 120000ms).
export const GetHotUserQuery = () => {
  // Passes off data to UserItem component to populate JSX
  return(
    <div>
      <Query query={GET_HOT_USERS} pollInterval={120000}>
        {({ data, error, loading, refetch }) => {
          if (loading) return <div>loading...</div>
          if (error) return console.log(JSON.stringify(error))
          return <div>{
            data.search.nodes.map(user => (
              <UserItem key={user.login} user={user}/>
            ))
          }
          <Button id='prolific_users' className='user-button' variant='info' size='lg' block onClick={()=> refetch()}>Update Users</Button>
          </div>
        }}
      </Query>
  </div>)
}
