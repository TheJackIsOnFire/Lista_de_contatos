import styled from 'styled-components'
import variablesColors from '../../Styles/variables-colors'

const ContainerHeader = styled.div`
  width: 100vw;
  height: 100px;
  background-color: ${variablesColors.black2};
  border-bottom: 1px solid ${variablesColors.lineColor};
  /* display: grid;
  grid-template-columns: 280px 1fr; */
  display: flex;
  padding: 16px 40px;
  justify-content: space-between;
`

export default ContainerHeader
