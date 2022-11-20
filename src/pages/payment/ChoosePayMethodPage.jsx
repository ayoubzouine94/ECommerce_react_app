import React from 'react'
import { Container } from 'react-bootstrap'
import PayMethod from '../../components/checkout/PayMethod'

const ChoosePayMethodPage = () => {
  return (
    <Container style={{minHeight:'670px'}}>
        <PayMethod />
    </Container>
  )
}

export default ChoosePayMethodPage