import styled from 'styled-components';

export const HomeContainerWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const ProfileImgContainerWrapper = styled.div`
  height: 40%;
  padding: 10px;
`;

export const ProfileImgContainer = styled.div`
    width: 80%;
    height: 80%;
    border-radius: 70%;
    overflow: hidden;
    margin-left: 25px;
`;

export const Profileimg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HomeLeftContainer = styled.div`
  width: 30%;
  height: 100%;
  box-shadow: 0px 0px 5px gray;
`;
export const HomeRightContainerWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
export const HomeRightContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
`;

export const RightBox = styled.div`
    width: 50%;
    height: 300px;
    background-color: white;
    border-radius: 3%;
    margin: 30px 10px 10px 20px;
    box-shadow: 0px 0px 2px gray;
`;

export const BoxTitle = styled.div`
  height: 20%;
  font-size: x-large;
  font-weight: bold;
`;
export const BoxContent = styled.div`
  height: 70%;
`;

export const TitleBox = styled.div`
    height: 10%;
    font-size: x-large;
    font-weight: bold;
    padding: 20px;
`;