import { Container, Row, Col, Table } from 'react-bootstrap'
import api_client from './api_client'
import { useState, useEffect } from 'react'
import ProfessionalRow from './ProfessionalRow'

export default function ProfessionalList() {

  const [professionals, setProfessionals] = useState([])

  useEffect(() => {
    console.log('inside use effect')
    api_client.get('/professionals')
      .then(response => {
        setProfessionals(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <h1>Professionals</h1>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              { professionals.map(professional => <ProfessionalRow key={professional.id} professional={professional}/>) }
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}
