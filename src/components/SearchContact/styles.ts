import styled from 'styled-components'
import variablesColors from '../../Styles/variables-colors'

const ContainerSearchContact = styled.div`
  display: flex;
  align-items: center;
  //margin: 0 auto;
`

export const InputContact = styled.input`
  height: 46px;
  width: 440px;
  padding: 8px 16px;
  font-size: 16px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: 1px solid ${variablesColors.lineColor};
  border-right: none;
  color: ${variablesColors.greyFont};
  background-color: ${variablesColors.black};
  outline-style: none;

  &:focus {
    color: ${variablesColors.white};
  }
`

export const ButtonContact = styled.button`
  width: 48px;
  height: 46px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  color: ${variablesColors.greyFont};
  background-color: ${variablesColors.black};
  border: 1px solid ${variablesColors.lineColor};
  border-left: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
  transition: all ease 0.4s;

  &:hover {
    color: ${variablesColors.white};
  }
`

export default ContainerSearchContact
