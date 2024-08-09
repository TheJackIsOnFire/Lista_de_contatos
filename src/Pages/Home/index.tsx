import ContactList from '../../containers/ContactList'
import Header from '../../containers/Header'
import ContainerHome from './styles'

const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <ContactList />
    </ContainerHome>
  )
}

export default Home
