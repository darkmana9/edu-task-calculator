import styled from "styled-components"

export const DisplayWrapper = styled.div`
   grid-area: d;
`
export const DisplayInput = styled.input`
   width: 100%;
   border: 0;
   border-bottom: 1px solid;
   background-color: transparent;
   text-align: right;
   margin-bottom:  ${({ theme }) => theme.spaces[4]}px;
   font-size:  ${({ theme }) => theme.fontSizes[7]}px;
   color:  ${({ theme }) => theme.colors.fontColor};
`


