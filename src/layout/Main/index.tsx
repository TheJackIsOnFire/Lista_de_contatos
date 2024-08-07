import ContactList from '../../containers/ContactList'

import Header from '../../containers/Header'
import ContainerMain from './styles'

const Main = () => {
  return (
    <ContainerMain>
      <Header />
      <ContactList />
    </ContainerMain>
  )
}

export default Main
