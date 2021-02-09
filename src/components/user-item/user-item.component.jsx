import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Moment from 'react-moment'
import './user-item.styles.css'

// Component for User information returned from API and printed out in JSX
// Include columns for, at least, the following attributes id, login, avatar image and number of followers.
const UserItem = ({ user }) => {
  return(
    <Row className='user-row'>
      <Col xs={12} md={5} className='user-login-container'>
        <a href={`${user.url}`} target='blank' className='link'>
          <h4 className='user-login-text'>{user.login}</h4>
        </a>
        <h5 className='user-details'> {`User ID:  ${user.databaseId}`}</h5>
        <p className='user-date-joined-text user-details'>{'Joined:  '}
          <Moment parse="YYYY-MM-DD HH:mm">{user.createdAt}</Moment>
        </p>
      </Col>
      <Col xs={6} md={2} className='user-avatar-container'>
        <img src={`${user.avatarUrl}`} className='avatar' alt='avatar'/>
      </Col>
      <Col xs={6} md={3} className='user-col user-bio-container'>
        { user.bio ? user.bio : 'This user did not supply a bio.'}
      </Col>
      <Col xs={12} md={2} className='user-col user-followers-container'>
        <h5 className='user-followers-text-label'>Followers:</h5>
        <h4 className='user-followers-text'> {user.followers.totalCount}</h4>
      </Col>
    </Row>
  )
}

export default UserItem
