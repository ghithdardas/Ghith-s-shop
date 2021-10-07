import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from './../responsive'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: '30vh' })}
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`
const Button = styled.button`
  padding: 10px;
  font-weight: 600;
  color: gray;
  background-color: white;
  cursor: pointer;
  border: none;
`

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to='/productlist'>
          <Button>SHOP NOW</Button>
        </Link>
      </Info>
    </Container>
  )
}

export default CategoryItem
