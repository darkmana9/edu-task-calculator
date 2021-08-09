import styled from "styled-components"

export const HistoryWrapper = styled.div`
  grid-area: h;
  margin: 0 auto;
`

export const HistoryTextArea = styled.textarea`
  resize: none;
  height: 90%;
  padding: 10px;
  margin-top: 10px;
  &::-webkit-scrollbar-thumb{
    background: #df8e93;
  };
  &::-webkit-scrollbar{
    width: 7px;
    background-color: transparent;
  };
  &::-webkit-scrollbar-track{
    -webkit-box-shadow: 5px 5px 5px -5px rgb(34 60 80 / 20%) inset;
    background-color: #f9f9fd;
  };
  font-size: 24px;


`
