import { HiMiniMagnifyingGlass } from 'react-icons/hi2'
import ContainerSearchContact, { IconSearch, InputContact } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../Redux/store'
import { changeTerm } from '../../Redux/filter/slice'

const SearchContact = () => {
  const dispatch = useDispatch()
  const { searchTerm } = useSelector(
    (state: RootReducer) => state.filterReducer
  )

  return (
    <ContainerSearchContact>
      <InputContact
        type="text"
        placeholder="Buscar Contato"
        value={searchTerm}
        onChange={event => dispatch(changeTerm(event.target.value))}
      />
      <IconSearch>
        <HiMiniMagnifyingGlass />
      </IconSearch>
    </ContainerSearchContact>
  )
}

export default SearchContact
