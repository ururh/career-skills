import styled from 'styled-components';
import img from '../../image/car-home.jpg';

export const Background = styled.section`
  background-image: url(${img});
  background-size: cover;
  background-position: center; 
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 150px;
`;

export const TextHome = styled.h1`
font-size: 40px;
font-weight: 800;
line-height: 24px;
color: #160fd3;`
