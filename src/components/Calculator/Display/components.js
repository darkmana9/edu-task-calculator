import styled from "styled-components"

export const DisplayWrapper = styled.div`
  grid-area: d;
`
export const DisplayInput = styled.input`
   width: 100%;
   margin-bottom: 20px;
   border: 0;
   border-bottom: 1px solid;
   background-color: transparent;
   font-size: 40px;
   text-align: right;
    color:  ${({ theme }) => theme.colors.fontColor};
`


