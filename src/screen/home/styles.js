import styled from "styled-components"

import { COLORS } from "../../utils/colors"

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${COLORS.MAINBACKGROUND};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardBox = styled.div`
  width: 90%;
  height: 90vh;
  background-color: ${COLORS.CARDBACKGROUND};
  border-radius: 5px;
  overflow: hidden;
`

export const ImgBox = styled.header`
  width: 100%;
  height: 27vh;
`

export const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
`

export const InfoBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center; 
`

export const TitleBox = styled.div`
  width: 80%;
  font-size: 26px;
  margin-top: 40px;
  color: ${COLORS.WHITE}; 
`

export const DescriptionBox = styled.div`
  width: 90%;
  margin-top: 15px;
  color: ${COLORS.MAINPARAGRAPH};
`

export const DateBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
`

export const CompaniesBox = styled.div`
  color: ${COLORS.WHITE};
  font-size: 25px;
  text-transform: uppercase;
  p {
    margin: 0;
    text-transform: uppercase;
    color: ${COLORS.MAINPARAGRAPH};
    font-size: 12px;
  }
`



export const TemplatesBox = styled.div`
  color: ${COLORS.WHITE};
  font-size: 25px;
  margin-top: 25px;
  text-transform: uppercase;
  p {
      margin: 0;
      text-transform: uppercase;
      color: ${COLORS.MAINPARAGRAPH};
      font-size: 12px;
  }
`

export const QueriesBox = styled.div`
  color: ${COLORS.WHITE};
  font-size: 25px;
  margin-top: 25px;
  text-transform: uppercase;
  p {
      margin: 0;
      color: ${COLORS.MAINPARAGRAPH};
      font-size: 12px;
  }
`
