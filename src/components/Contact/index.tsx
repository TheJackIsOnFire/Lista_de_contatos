import ContainerContact, { UserData, Data, Buttons, Button } from './styles'

const Contact = () => {
  return (
    <ContainerContact>
      <Data>
        <li>
          <label htmlFor="name">Nome:</label>
          <UserData id="name">Jack</UserData>
        </li>
        <li>
          <label htmlFor="email">E-mail:</label>
          <UserData id="email">jackdaymon@gmail.com</UserData>
        </li>
        <li>
          <label htmlFor="tel">Celular:</label>
          <UserData id="tel">(35) 998726945</UserData>
        </li>
      </Data>
      <Buttons>
        <Button>Editar</Button>
        <Button>Remover</Button>
      </Buttons>
    </ContainerContact>
  )
}

export default Contact
