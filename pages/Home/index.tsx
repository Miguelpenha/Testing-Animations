import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import { Title, Button, TextButton } from './style'

function Home() {
  const navigation = useNavigation()

  return (
    <ContainerPd>
      <Title>Testando Animações</Title>
      <Button onPress={() => navigation.navigate('MediumAnimation')}>
        <TextButton>Animação Medium</TextButton>
      </Button>
    </ContainerPd>
  )
}

export default Home