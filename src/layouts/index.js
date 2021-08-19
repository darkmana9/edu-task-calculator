import styled from 'styled-components'

export const PageLayout = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color:  ${({ theme }) => theme.colors.fontColor};
  padding: ${({ theme }) => theme.spaces[4]}px;
`

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  width: 100%;
  margin: 0 auto;
  max-width: 1280px;
  padding: ${({ theme }) => theme.spaces[4]}px;
  color:  ${({ theme }) => theme.colors.fontColor};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`

export const CalculatorLayout = styled.div`
  display: grid;
  border: 1px solid;
  grid-template-areas:
    "d h"
    "k h"
    "e e";
  grid-template-columns: auto 35%;
  padding: ${({ theme }) => theme.spaces[4]}px;
  @media (max-width: ${({ theme }) => theme.size.med}px) {
  grid-template-areas:
    "d d"
    "k k"
    "h h"
    "e e";
  padding: ${({ theme }) => theme.spaces[1]}px;
  }
`
