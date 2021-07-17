import React from 'react'

import * as S from "./styles"
import ImageHeader from "../../img/image-header-mobile.jpg"

const Home = () => {
    return (
        <S.Container>
            <S.CardBox>
                <S.ImgBox>
                    <S.HeaderImage src={ImageHeader} alt="" />
                </S.ImgBox>
                <S.InfoBox>
                    
                        <S.TitleBox>
                            Get insights that help your business grow.
                        </S.TitleBox>
                        <S.DescriptionBox>
                            Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                            experience, and overall efficiency.
                        </S.DescriptionBox>
                    <S.DateBox>
                        <S.CompaniesBox>
                            10k+ 
                            <p>companies</p>
                        </S.CompaniesBox>
                        <S.TemplatesBox>
                            314 
                            <p>templates</p>
                        </S.TemplatesBox>
                        <S.QueriesBox>
                            12m+ 
                            <p>queries</p>
                        </S.QueriesBox>
                    </S.DateBox>
                </S.InfoBox>
            </S.CardBox>
        </S.Container>
    )
}

export default Home