import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import TableComponent from '../../components/table/table.component'
import github from '../../assets/githubimg.png'
import './dashboard.styles.css'

// Dashboard component which contains both tables
const Dashboard = (props) => (
  <Container className='dashboard-container'>
    <Image fluid className='github-image'src={github} alt='github'/>
    <Row className='dashboard-row'>
      <TableComponent>Prolific Users of 2020</TableComponent>
    </Row>
    <Row className='dashboard-row'>
      <TableComponent>Hottest Repos of 2020</TableComponent>
    </Row>
  </Container >
)

export default Dashboard
