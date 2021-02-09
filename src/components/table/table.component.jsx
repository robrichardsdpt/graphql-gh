import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { GetHotUserQuery } from '../user-query/user-query.component'
import { GetHotRepoQuery } from '../repo-query/repo-query.component'
import './table.styles.css'

// Table Component which gets children from Dashboard and then creates table accordingly
//  Calls Queries for table data
const TableComponent = ({ children }) => {
    let jsxData
    if(children==='Prolific Users of 2020') jsxData = <GetHotUserQuery/>
    if(children==='Hottest Repos of 2020') jsxData = <GetHotRepoQuery/>
    return(
      <div className='table-container'>
        <Container fluid className='table'>
          <Row className='header-row'>
            <h1 className='table-title'>{`${children}`}</h1>
          </Row>
          <Row>
            {jsxData}
          </Row>
        </Container>
      </div>
    )
}

export default TableComponent
