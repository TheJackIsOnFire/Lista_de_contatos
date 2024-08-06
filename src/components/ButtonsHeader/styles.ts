import styled from 'styled-components'
import variablesColors from '../../Styles/variables-colors'

const ContainerButtons = styled.div`
  display: flex;
`

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${variablesColors.lineColor};
  color: ${variablesColors.greyFont};
  background-color: ${variablesColors.black};
  cursor: pointer;
  transition: all ease 0.4s;

  &:hover {
    border-color: ${variablesColors.white};
    color: ${variablesColors.white};
  }
`

export default ContainerButtons
