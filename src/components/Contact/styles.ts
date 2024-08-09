import styled from 'styled-components'
import variablesColors from '../../Styles/variables-colors'

type Props = {
  active: boolean
}

const ContainerContact = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 80% 20%;
  border: 1px solid ${variablesColors.lineColor};
  border-radius: 8px;
  background-color: ${variablesColors.black2};
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  transition: all ease 0.4s;

  &:hover {
    border-color: ${variablesColors.white};
  }
`

export const Data = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`
export const DataInput = styled.li<Props>`
  width: 100%;
  margin: 8px 0;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${props =>
    props.active ? variablesColors.black : variablesColors.black3};
  color: ${variablesColors.white};
  transition: all ease 0.4s;
  border: 1px solid
    ${props => (props.active ? variablesColors.lineColor : 'transparent')};

  label {
    margin-right: 8px;
  }
`

export const UserData = styled.input<Props>`
  width: 85%;
  font-size: 16px;
  background-color: ${props =>
    props.active ? variablesColors.black : variablesColors.black3};
  color: ${variablesColors.white};
  border: none;
  outline-style: none;
  transition: all ease 0.4s;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 16px 0px 40px;
`

export const Button = styled.button`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 12px;
  margin: 8px 0;
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

export const BtnFavorite = styled.button`
  width: max-content;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin: 8px 0;
  background-color: ${variablesColors.black2};
  color: ${variablesColors.white};
  border: 2px solid transparent;
  border-radius: 8px;
  transition: all ease 0.4s;
  cursor: pointer;

  &:hover {
    border-color: ${variablesColors.white};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`

export const BtnIsFavorite = styled(BtnFavorite)`
  color: ${variablesColors.redHeart};
`

export default ContainerContact
