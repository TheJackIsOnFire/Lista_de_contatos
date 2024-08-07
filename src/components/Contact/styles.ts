import styled from 'styled-components'
import variablesColors from '../../Styles/variables-colors'

const ContainerContact = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid ${variablesColors.lineColor};
  border-radius: 8px;
  background-color: ${variablesColors.black2};
  padding: 16px;
  justify-content: space-between;
  transition: all ease 0.4s;

  &:hover {
    border-color: ${variablesColors.white};
  }
`

export const Data = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 16px;

  li {
    width: max-content;
    margin-bottom: 8px;
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid transparent;

    &:hover {
      border-color: ${variablesColors.lineColor};
      background-color: ${variablesColors.black3};
    }

    label {
      margin-right: 8px;
    }
  }
`
export const UserData = styled.span``

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`

export const Button = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: ${variablesColors.black};
  background-color: ${variablesColors.white};
  transition: all ease 0.2s;

  &:hover {
    filter: brightness(80%);
  }
`

export default ContainerContact
