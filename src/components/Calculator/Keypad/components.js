import styled from 'styled-components'

export const KeypadWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(5, 1fr);
  grid-area: k;

  margin: 0 auto;
`
