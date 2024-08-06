import { FaUsers } from 'react-icons/fa6'
import { HiUserAdd } from 'react-icons/hi'
import { RiUserStarFill } from 'react-icons/ri'
import ContainerButtons, { Button } from './styles'
import Icons from './icons.module.css'

const ButtonsHeader = () => {
  return (
    <ContainerButtons>
      <Button>
        <FaUsers className={Icons.button_icons} />
        Contatos
      </Button>
      <Button>
        <RiUserStarFill className={Icons.button_icons} />
        Favoritos
      </Button>
      <Button>
        <HiUserAdd className={Icons.button_icons} />
        Adicionar
      </Button>
    </ContainerButtons>
  )
}

export default ButtonsHeader
