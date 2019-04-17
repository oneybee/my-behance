import React from 'react'
import styled, { css } from 'styled-components'
import { Row, Column } from 'ruucm-blocks'
import img001 from '../Img/1.jpg'
import img002 from '../Img/2.jpg'

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
  position: sticky;
  top: 0px;
  z-index: 2;
`
const HeaderMenu = styled.span`
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  padding: 0 15px;

  position: relative;
  top: 20px;
  :hover {
    color: #0057ff;
  }
`

const HPositionRel = styled.div`
  position: relative;
  height: 220px;
  padding-bottom: 30px;
`

const HWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const H1 = styled.div`
  font-size: 70px;
  font-weight: 900;
`
const H2 = styled.div`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`

const RowWrap = styled.div`
  padding-top: 50px;
  margin: 0 50px;
`

const ColumnStyle = styled.div`
  margin: 10px;
  position: relative;
`
const ColumnIn = styled.div`
  width: 100%;
  height: 100%;
`
const Image = styled.img`
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
`

const ImageHoverWrap = styled.div`
  bottom: 0;
  position: absolute;
  padding: 30px 15px 18px;
  background: linear-gradient(180deg, transparent 0, rgba(0, 0, 0, 0.6) 81%);
  cursor: pointer;
`

const ImageHover = styled.div`
  /* margin-top: auto; */
  /* top: 0; */
  width: 100%;
  color: white;
  :hover {
    text-decoration: underline;
  }
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

      <HPositionRel>
        <HWrap>
          <H1>최고의 Behance</H1>
          <H2>오늘의 큐레이터 추천 프로젝트</H2>
        </HWrap>
      </HPositionRel>

      <RowWrap>
        <Row>
          <Column col="4">
            <ColumnStyle>
              <ColumnIn>
                <Image src="https://mir-s3-cdn-cf.behance.net/projects/404/23c50b78953779.5cb5858c3aee6.jpg" />
                <ImageHoverWrap>
                  <ImageHover>Cienne</ImageHover>
                </ImageHoverWrap>
              </ColumnIn>
            </ColumnStyle>
          </Column>
          <Column col="4">
            <ColumnStyle>
              <Image src="https://mir-s3-cdn-cf.behance.net/projects/404/28b5cb78504619.Y3JvcCwzMDAwLDIzNDYsMCwzMjY.png" />
            </ColumnStyle>
          </Column>
          <Column col="4">
            <ColumnStyle>
              <Image src="https://mir-s3-cdn-cf.behance.net/projects/404/23c50b78953779.5cb5858c3aee6.jpg" />
            </ColumnStyle>
          </Column>

          <Column col="4">
            <ColumnStyle>
              <Image src="https://mir-s3-cdn-cf.behance.net/projects/404/28b5cb78504619.Y3JvcCwzMDAwLDIzNDYsMCwzMjY.png" />
            </ColumnStyle>
          </Column>
          <Column col="4">
            <ColumnStyle>
              <Image src="https://mir-s3-cdn-cf.behance.net/projects/404/23c50b78953779.5cb5858c3aee6.jpg" />
            </ColumnStyle>
          </Column>
          <Column col="4">
            <ColumnStyle>
              <Image src="https://mir-s3-cdn-cf.behance.net/projects/404/28b5cb78504619.Y3JvcCwzMDAwLDIzNDYsMCwzMjY.png" />
            </ColumnStyle>
          </Column>

          <Column col="4">
            <ColumnStyle>
              <Image src="https://mir-s3-cdn-cf.behance.net/projects/404/23c50b78953779.5cb5858c3aee6.jpg" />
            </ColumnStyle>
          </Column>
          <Column col="4">
            <ColumnStyle>
              <Image src="https://mir-s3-cdn-cf.behance.net/projects/404/28b5cb78504619.Y3JvcCwzMDAwLDIzNDYsMCwzMjY.png" />
            </ColumnStyle>
          </Column>
          <Column col="4">
            <ColumnStyle>
              <Image src="https://mir-s3-cdn-cf.behance.net/projects/404/23c50b78953779.5cb5858c3aee6.jpg" />
            </ColumnStyle>
          </Column>
        </Row>
      </RowWrap>
    </Wrap>
  )
}

export default Home
