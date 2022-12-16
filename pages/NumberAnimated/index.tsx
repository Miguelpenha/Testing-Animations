import { useState, useEffect } from 'react'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import InputFind from './InputFind'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { AnimatedNumber } from './style'

function NumberAnimated() {
    const [number, setNumber] = useState(0)

    useEffect(() => setNumber(250), [])

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior="height" enabled>
                <ContainerPd>
                    <HeaderBack>Número animado</HeaderBack>
                    <InputFind onChangeText={text => Number(text) >= 0 && setNumber(Number(text))}/>
                    <Animated.View entering={FadeInDown.duration(500)}>
                        <AnimatedNumber time={25} value={number}/>
                    </Animated.View>
                </ContainerPd>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default NumberAnimated