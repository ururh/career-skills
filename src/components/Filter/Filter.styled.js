import s from 'styled-components'

export const DivFilter = s.div`
display:flex;
gap:18px;
margin-bottom:50px;`

export const DivInput = s.div`
display:flex;`

export const SelectFilter = s.select`
border-radius: 14px;
background: #F7F7FB;
display: flex;
padding: 14px 160px 14px 18px;
justify-content: center;
align-items: center;
gap: 32px;
` 

export const OptionFilter = s.option`
max-height: 252px;
padding: 14px 8px 14px 18px;
margin-bottom: 4px;
flex-shrink: 0;
border-radius: 14px;
border: 1px solid rgba(18, 20, 23, 0.05);
background: #FFF;
box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
color: rgba(18, 20, 23, 0.20);
font-size: 16px;
font-weight: 500;
line-height: 20px;
`

export const SelectPrice = s.select`
display: flex;
width: 125px;
padding: 14px 18px;
align-items: flex-start;
gap: 32px;
border-radius: 14px;
background: #F7F7FB;`

export const InputFrom = s.input`
display: flex;
width: 160px;
height: 48px;
padding: 14px 41px 14px 24px;
align-items: center;
flex-shrink: 0;
border-radius: 14px 0px 0px 14px;
border-right: 1px solid rgba(138, 138, 137, 0.20);
background: #F7F7FB;`

export const InputTo = s.input`
display: flex;
width: 160px;
height: 48px;
padding: 14px 63px 14px 24px;
align-items: center;
flex-shrink: 0;
border-radius: 0px 14px 14px 0px;
background: #F7F7FB;`

export const ButtonSearch = s.button`
display: flex;
padding: 14px 44px;
justify-content: center;
align-items: center;
border-radius: 12px;
background: #3470FF;
color: var(--white, #FFF);
font-size: 14px;
font-weight: 600;
line-height: 20px;`
