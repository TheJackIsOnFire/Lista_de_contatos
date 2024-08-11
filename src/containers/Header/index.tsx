import ButtonsHeader from '../../components/ButtonsHeader'
import BtnBack from '../../components/ButtonsHeader/Buttons/Links/Back'
import SearchContact from '../../components/SearchContact'
import ContainerHeader from './styles'

type Props = {
  showFilters: boolean
}

const Header = ({ showFilters }: Props) => {
  return (
    <ContainerHeader>
      {showFilters ? (
        <>
          <ButtonsHeader />
          <SearchContact />
        </>
      ) : (
        <BtnBack />
      )}
    </ContainerHeader>
  )
}

export default Header
