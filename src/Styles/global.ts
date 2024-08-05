import { createGlobalStyle, styled } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
`
export const ContainerAlignCenter = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`

export default GlobalStyle
