import ContainerPd from '../../components/ContainerPd'
import { Title } from './style'
import { ZoomInUp } from 'react-native-reanimated'
import OptionsList from './OptionsList'
import options from './options'

function Home() {
  return (
    <ContainerPd>
      <Title entering={ZoomInUp}>Testando Animações</Title>
      <OptionsList options={options}/>
    </ContainerPd>
  )
}

export default Home