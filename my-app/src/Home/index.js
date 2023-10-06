import React from 'react';
import {
    HomeContainerWrapper,
    HomeLeftContainer,
    HomeRightContainer,
    RightBox,
    ProfileImgContainerWrapper,
    ProfileImgContainer,
    Profileimg,
    SideTitle,
    SideTitleBox, HomeRightContainerWrapper, BoxTitle,
    BoxTitleContainer, BoxContent
} from "./styled";
import Profile from '../asset/profile.jpg';
const Home = () => {
    return (
        <HomeContainerWrapper>
            <HomeLeftContainer>
                <SideTitleBox>
                    <SideTitle>SoYoung</SideTitle>
                </SideTitleBox>
                <ProfileImgContainerWrapper>
                    <ProfileImgContainer>
                        <Profileimg src={Profile}/>
                    </ProfileImgContainer>
                </ProfileImgContainerWrapper>
                <div>
                    <p>개발자가 되는 중입니다</p>
                </div>
            </HomeLeftContainer>
            <HomeRightContainerWrapper>
                <HomeRightContainer>
                    <RightBox>
                        <BoxTitleContainer>
                            <BoxTitle>🍀잘하고 싶어요🍀</BoxTitle>
                        </BoxTitleContainer>
                        <BoxContent>Java Script, React, TypeScript</BoxContent>
                    </RightBox>
                    <RightBox>
                        <BoxTitleContainer>
                            <BoxTitle>🚩목표🚩</BoxTitle>
                        </BoxTitleContainer>
                        <BoxContent>개발자로 밥 벌어먹고 살기!<br/><br/>여러 사람들에게 도움을 줄 수 있는 개발자가 되기</BoxContent>
                    </RightBox>
                </HomeRightContainer>
                <HomeRightContainer>
                    <RightBox>
                        <BoxTitleContainer>
                            <BoxTitle>❤좋아하는 것❤</BoxTitle>
                        </BoxTitleContainer>
                        <BoxContent>이 세상의 모든 강아지들, 영화관에서 보는 영화<br/><br/>멍하니 바다 구경, 마라탕에 문어완자 많이 </BoxContent>
                    </RightBox>
                    <RightBox>
                        <BoxTitleContainer>
                            <BoxTitle>💥도전하고 싶은 것💥</BoxTitle>
                        </BoxTitleContainer>
                        <BoxContent>수영, 혼자서 배낭여행, 번지점프</BoxContent>
                    </RightBox>
                </HomeRightContainer>
            </HomeRightContainerWrapper>
        </HomeContainerWrapper>
    );
};

export default Home;