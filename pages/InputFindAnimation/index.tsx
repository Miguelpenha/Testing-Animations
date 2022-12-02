import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import limitText from '../../utils/limitText'
import InputFind from './InputFind'

function InputFindAnimation() {
  const navigation = useNavigation()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="height" enabled>
        <ContainerPd>
          <HeaderBack title={limitText('Animação de campo de pesquisa', 25)} onClick={() => navigation.goBack()}/>
          <InputFind/>
        </ContainerPd>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default InputFindAnimation