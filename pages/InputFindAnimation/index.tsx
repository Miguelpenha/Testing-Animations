import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import InputFind from './InputFind'

function InputFindAnimation() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="height" enabled>
        <ContainerPd>
          <HeaderBack>Animação de campo de pesquisa</HeaderBack>
          <InputFind/>
        </ContainerPd>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default InputFindAnimation