import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from './../responsive'

const Container = styled.div`
  height: 60vh;
  //background-color: #fcf5f5;
  background-image: url('https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_960_720.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  object-fit: cover;
  /* transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
  } */
  ${mobile({ backgroundImage: 'none', backgroundColor: '#fcf5f5' })}
`
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  color: white;
  ${mobile({ color: '#000' })}
`

const Desc = styled.div`
  font-size: 26px;
  font-weight: 300;
  margin-bottom: 20px;
  color: white;
  ${mobile({ textAlign: 'center', color: '#000', fontWeight: 'bold' })}
`

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: '70%' })}
`

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  outline: none;
`

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
