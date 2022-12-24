import ContainerPd from '../../components/ContainerPd'
import { Title } from './style'
import { ZoomInDown } from 'react-native-reanimated'
import OptionsList from './OptionsList'
import options from './options'

function Home() {
  return (
    <ContainerPd>
      <Title entering={ZoomInDown}>Testando Animações</Title>
      <OptionsList options={options}/>
    </ContainerPd>
  )
}

export default Home