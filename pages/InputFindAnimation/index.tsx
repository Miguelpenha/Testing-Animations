import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import page from './page'
import InputFind from './InputFind'

function InputFindAnimation() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="height" enabled>
        <ContainerPd>
          <HeaderBack page={page}>Animação de campo de pesquisa</HeaderBack>
          <InputFind/>
        </ContainerPd>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default InputFindAnimation