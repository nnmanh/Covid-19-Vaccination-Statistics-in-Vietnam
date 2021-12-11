import styled from 'styled-components';
import ImgBg from './sen-jam.jpg';
import ImgBg2 from './pic2.jpg'

export const HeaderContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 90vh;
  background-position: center;
  background-size: cover;
`;

export const HeaderContainer2 = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg2});
  height: 90vh;
  background-position: center;
  background-size: cover;
`;

export const HeaderContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeaderItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  width: 900px;
  color: #fff;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const HeaderH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;

export const HeaderP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  font-family: Arial, Helvetica, sans-serif;
`;

