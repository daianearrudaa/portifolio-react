import Paragrafo from '../../components/Paragrafo'
import Avatar from '../../components/avatar'
import Title from '../../components/title'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Daiane Arruda</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        daianearrudaa
      </Paragrafo>
      <Descricao fontSize={12}>Engenheira Front-end</Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
