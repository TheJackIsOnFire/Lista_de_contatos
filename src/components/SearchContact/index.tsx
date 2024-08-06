import { HiMiniMagnifyingGlass } from 'react-icons/hi2'
import ContainerSearchContact, { ButtonContact, InputContact } from './styles'
import Icons from './icons.module.css'

const SearchContact = () => {
  return (
    <ContainerSearchContact>
      <InputContact placeholder="Buscar Contato" />
      <ButtonContact>
        <HiMiniMagnifyingGlass className={Icons.button_icons} />
      </ButtonContact>
    </ContainerSearchContact>
  )
}

export default SearchContact
