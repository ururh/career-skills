import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
position: relative;
overflow: auto;
  width: 541px;
  height: 700px;
  background-color: white;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
scrollbar-width: 4px;
  scrollbar-color: #888888 #f5f5f5;
`;

export const CloseButton = styled.button`
  position: absolute;
top: 16px;
right: 16px;
`;

export const ImgModal = styled.img`
width:461px;
height:248px;
border-radius: 14px;
margin-bottom:14px;
`

export const TextModal = styled.span`
color: #121417;
font-size: 18px;
font-weight: 500;
line-height: 24px;`

export const BlueModal = styled.span`
color: #3470FF;
`

export const ListModal = styled.ul`
margin-top:8px;
`

export const Info = styled.span`
color: rgba(18, 20, 23, 0.50);
font-size: 12px;
line-height: 18px;
    border-right: solid 1px rgba(18, 20, 23, 0.50);
    padding:0 6px 0 0 ;
&:not(:first-child) {
    padding: 0 6px;
  }`

export const Description = styled.p`
color: #121417;
font-size: 14px;
line-height: 20px;
margin-top:14px;
margin-bottom:24px;`

export const SpanModal = styled.span`
color: #121417;
font-size: 14px;
line-height: 20px;
margin-top:24px;`

export const UlSomeInfo = styled.ul`
margin-bottom:24px;`

export const UlFirstInfo = styled.ul`
margin-top:8px;
display: flex;
flex-wrap: wrap;
gap: 4px;`

export const KeySpan = styled.span`
border-radius: 35px;
background: #F9F9F9;
raiting
display: flex;
padding: 7px 14px;
justify-content: center;
align-items: center;
color: #363535;
font-size: 14px;
line-height: 18px;
letter-spacing: -0.24px;
margin-right:8px;
margin-bottom:8px;`

export const LinkRental = styled.a`
display: inline-flex;
padding: 12px 50px;
justify-content: center;
align-items: center;
border-radius: 12px;
background: #3470FF;
color: var(--white, #FFF);
font-size: 14px;
font-weight: 600;
line-height: 20px;
margin-top: 31px;`