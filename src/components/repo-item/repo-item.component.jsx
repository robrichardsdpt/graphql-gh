import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Moment from 'react-moment'
import './repo-item.styles.css'

// Component for Repo information returned from API and printed out in JSX
// Include columns for, at least, the following attributes id, name, description and number of stars.
const RepoItem = ({ repo }) => {
  return(
    <Row className='repo-row'>
      <Col xs={12} md={5} className='repo-col'>
        <a href={`${repo.url}`} target='blank' className='link'>
          <h4 className='repo-name-text'>{repo.name}</h4>
        </a>
        <h5 className='repo-details'>{`Repo ID:  ${repo.databaseId}`}</h5>
        <a href={`${repo.owner.url}`} target='blank' className='link'>
          <h5 className='repo-details'>{repo.owner.login}</h5>
        </a>
        <p className='repo-details repo-created-text'>Created on: <Moment parse="YYYY-MM-DD HH:mm">{repo.createdAt}</Moment></p>
      </Col>
      <Col xs={6} md={2} className='repo-col repo-avatar-container'>
        <img src={`${repo.owner.avatarUrl}`} alt='avatar' className='avatar'/>
      </Col>
      <Col xs={6} md={3} className='repo-col repo-description-container'>
        <p className='repo-description-text'>{repo.description}</p>
      </Col>
      <Col xs={12} md={2} className='repo-stars-container'>
        <h5 className='repo-stars-text-label'>Stars: </h5>
        <h4 className='repo-stars-text'>{repo.stargazers.totalCount}</h4>
      </Col>
    </Row>
  )
}

export default RepoItem
