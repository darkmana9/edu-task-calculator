import styled from 'styled-components'

export const PageLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color:  ${({ theme }) => theme.colors.fontColor};
  max-width: 1280px;
  padding: ${({ theme }) => theme.spaces[4]}px;
  margin: 0 auto;
`

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  padding: 20px;
  color:  ${({ theme }) => theme.colors.fontColor};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  width: 100%;
  margin: 0 auto;
  max-width: 1280px;
`

export const CalculatorLayout = styled.div`
  display: grid;
  border: 1px solid;
  padding: 20px;
  grid-template-areas:
        "d h"
        "k h";
  grid-template-columns: auto 35%;
`
