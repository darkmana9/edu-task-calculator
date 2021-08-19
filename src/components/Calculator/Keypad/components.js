import styled from 'styled-components'

export const KeypadWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(5, 1fr);
  grid-area: k;
  margin: 0 auto;
`
export const KeypadButton = styled.button`
  width: ${({theme}) => theme.button.size[0]}px;
  height: ${({theme}) => theme.button.size[0]}px;
  margin: ${({theme}) => theme.button.margin}px;
  border-radius: ${({theme}) => theme.button.borderRadius}px;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  @media (max-width: ${({ theme }) => theme.size.xs}px) {
    font-size: ${({ theme }) => theme.fontSizes[2]}px;
    width: ${({theme}) => theme.button.size[1]}px;
    height: ${({theme}) => theme.button.size[1]}px;
  }

`
