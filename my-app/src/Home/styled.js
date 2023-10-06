import styled from 'styled-components';

export const HomeContainerWrapper = styled.div`
  display: flex;
  height: 100vh;
`;
export const SideTitleBox = styled.div`
    height: 10%;
    padding: 50px 25% 30px 20%;
`;
export const SideTitle = styled.div`
  width: fit-content;
  padding: 5px 10px 5px 10px;
  background-color: white;
  font-size: 50px;
  font-weight: bolder;
  border-radius: 15px;
  color:  #2a7ce1;
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
    margin-left: 10%;
`;

export const Profileimg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HomeLeftContainer = styled.div`
  width: 30%;
  height: 100%;
  box-shadow: 0px 0px 4px gray;
  z-index: 0;
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
    background-color: #f5f8fc;
    border-radius: 5%;
    margin: 30px 15px 10px 30px;
    box-shadow: 0.5px 2px 4px #d3d8db;
`;

export const BoxTitleContainer = styled.div`
  height: 20%;
  padding-left: 5%;
  padding-top: 5%;
  padding-bottom: 5%;
`;
export const BoxTitle = styled.div`
  font-size: large;
  font-weight: bold;
  background-color: #2a7ce1;
  padding: 8px;
  border-radius: 8px;
  width: fit-content;
  color: white;
`;

export const BoxContent = styled.div`
  height: 70%;
  text-align: start;
  padding-left: 7%;
  font-size: 18px;
`;

