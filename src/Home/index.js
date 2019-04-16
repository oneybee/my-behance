import React from 'react'
import styled, { css } from 'styled-components'
import { Row, Column } from 'ruucm-blocks'

const Wrap = styled.div`
  background: white;
`
const Header = styled.div`
  background: white;
  font-weight: 500;
  text-align: center;

  box-shadow: 0 0 4px rgba(25, 25, 25, 0.1);
  box-sizing: border-box;
  height: 60px;
`
const HeaderMenu = styled.span`
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  padding: 0 15px;

  position: sticky;
  top: 40px;
  :hover {
    color: #0057ff;
  }
`

const RowWrap = styled.div`
  padding-top: 50px;
  margin: 0 50px;
`

const Home = () => {
  return (
    <Wrap>
      <Header>
        <HeaderMenu>최고의 Behance</HeaderMenu>
        <HeaderMenu>선별된 갤러리</HeaderMenu>
        <HeaderMenu>크레이티브 툴</HeaderMenu>
        <HeaderMenu>학교 및 조직</HeaderMenu>
      </Header>

      <RowWrap>
        <Row>
          <Column col="4">1</Column>
          <Column col="4">2</Column>
          <Column col="4">3</Column>
        </Row>
      </RowWrap>
    </Wrap>
  )
}

export default Home
