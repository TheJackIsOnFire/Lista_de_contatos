import ButtonsHeader from '../../components/ButtonsHeader'
import SearchContact from '../../components/SearchContact'
import ContainerHeader from './styles'

const Header = () => {
  return (
    <ContainerHeader>
      <ButtonsHeader />
      <SearchContact />
    </ContainerHeader>
  )
}

export default Header
