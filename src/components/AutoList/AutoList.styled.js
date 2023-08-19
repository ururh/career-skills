import s from 'styled-components'

export const AutoListContainer = s.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 29px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ContainerCatalog = s.div`
display: flex;
flex-direction: column;
`