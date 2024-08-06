import { ContainerAlignCenter } from '../../Styles/global'
import ContactList from '../../containers/ContactList'

import Header from '../../containers/Header'
import * as Style from './styles'

const Main = () => {
  return (
    <Style.Main>
      <ContainerAlignCenter>
        <Header />
        <ContactList />
      </ContainerAlignCenter>
    </Style.Main>
  )
}

export default Main
