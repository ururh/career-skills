import s from 'styled-components'

export const Img = s.img`
min-width:274px;
height:268px;
border-radius: 14px;
background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 0%, rgba(18, 20, 23, 0.00) 100%), #F3F3F2;
`
export const TextSpan = s.span`
color: #121417;
font-size: 16px;
font-weight: 500;
line-height: 24px;`

export const BlueSpan = s.span`
color: #3470FF;`

export const DivMain = s.div`
    display: flex;
    justify-content: space-between;`

export const InfoSpan = s.span`
color: rgba(18, 20, 23, 0.50);
font-size: 12px;
line-height: 18px;
    border-right: solid 1px rgba(18, 20, 23, 0.50);
    padding:0 6px 0 0 ;
&:not(:first-child) {
    padding: 0 6px;
  }`

export const ButtonLearnMore = s.button`
margin-top: 28px;
width: 274px;
height: 44px;
justify-content: center;
align-items: center;
flex-shrink: 0;
border-radius: 12px;
background: #3470FF;
color: var(--white, #FFF);
font-size: 14px;
font-weight: 600;
line-height: 20px;`

export const ButtonLike = s.button`
position: absolute;
top: 14px;
right: 14px;
backgroundColor: transparent;
border: none;
cursor: pointer;
zIndex: 2;
`


