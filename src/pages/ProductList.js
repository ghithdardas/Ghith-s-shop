import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { mobile } from './../responsive'

const Container = styled.div``
const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: '0px 20px', display: 'flex', flexDirection: 'column' })}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: '0px' })}
`

const Select = styled.select`
  outline: none;
  padding: 8px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })}
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option value='white'>White</Option>
            <Option value='black'>Black</Option>
            <Option value='red'>Red</Option>
            <Option value='blue'>Blue</Option>
            <Option value='yellow'>Yellow</Option>
            <Option value='green'>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option value='xs'>XS</Option>
            <Option value='s'>S</Option>
            <Option value='m'>M</Option>
            <Option value='l'>L</Option>
            <Option value='xl'>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
