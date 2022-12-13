import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import { Title, Button, TextButton } from './style'

function Home() {
  const navigation = useNavigation()

  return (
    <ContainerPd scroll>
      <Title>Testando Animações</Title>
      <Button onPress={() => navigation.navigate('MediumAnimation')}>
        <TextButton>Animação Medium</TextButton>
      </Button>
      <Button onPress={() => navigation.navigate('InputFindAnimation')}>
        <TextButton>Animação de campo de pesquisa</TextButton>
      </Button>
      <Button onPress={() => navigation.navigate('PlayerAnimated')}>
        <TextButton>Player animado</TextButton>
      </Button>
      <Button onPress={() => navigation.navigate('NumberAnimated')}>
        <TextButton>Número animado</TextButton>
      </Button>
      <Button onPress={() => navigation.navigate('WordAnimation')}>
        <TextButton>Animação de palavras</TextButton>
      </Button>
      <Button onPress={() => navigation.navigate('AnimatedHomePageOfVideos')}>
        <TextButton>Página inicial animada de vídeos</TextButton>
      </Button>
    </ContainerPd>
  )
}

export default Home