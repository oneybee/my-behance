import React from 'react'
import styled, { css } from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Row, Column } from 'ruucm-blocks'
import img001 from '../Img/1.jpg'
import img002 from '../Img/2.jpg'
import Work from '../Work'

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
const ImageHoverWrap = styled.div`
  bottom: 3px;
  position: absolute;
  padding: 30px 0 18px;
  background: linear-gradient(180deg, transparent 0, rgba(0, 0, 0, 0.6) 81%);
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  /* opacity: 0;
  transition-duration: 0.1s;
  :hover {
    opacity: 1;
    transition-duration: 0.1s;
  } */
`
const Image = styled.img`
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    .ImageHoverWrap {
      opacity: 1;
      transition-duration: 0.1s;
    }
  }
`

const HoverWrap = styled.div`
  /* margin-top: auto; */
  /* top: 0; */
  color: white;
  padding: 0 15px;
`
const HoverHeader = styled.div`
  padding-bottom: 2px;
  font-size: 16px;
  font-weight: 700;
  :hover {
    text-decoration: underline;
  }
`
const HoverName = styled.div`
  font-size: 13px;
  display: inline-block;
  :hover {
    text-decoration: underline;
  }
`
const IconWrap = styled.div`
  display: inline-block;
  position: absolute;
  right: 0;
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
                <Link to="/work">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/404/23c50b78953779.5cb5858c3aee6.jpg" />
                  <ImageHoverWrap className="ImageHoverWrap">
                    <HoverWrap>
                      <HoverHeader>Blend Station II</HoverHeader>
                      <HoverName>Futura .</HoverName>
                      <IconWrap>
                        <svg width="16" height="16" fill="white">
                          <path d="M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z" />
                        </svg>{' '}
                        576
                        <svg width="16" height="16" fill="white">
                          <path d="M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z" />
                        </svg>{' '}
                        3108
                      </IconWrap>
                    </HoverWrap>
                  </ImageHoverWrap>
                </Link>
                <Route exact path="/work" component={Work} />
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
