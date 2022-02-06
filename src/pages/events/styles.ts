import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 1rem;
  background-color: '#F9F9FB';
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  padding: 10rem;
`
