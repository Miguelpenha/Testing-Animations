import { useState, useEffect } from 'react'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import page from './page'
import InputFind from './InputFind'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { AnimatedNumber } from './style'

function NumberAnimated() {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        setTimeout(() => (
            setNumber(250)
        ), 500)
    }, [])

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior="height" enabled>
                <ContainerPd>
                    <HeaderBack page={page}>Número animado</HeaderBack>
                    <InputFind onChangeText={text => Number(text) >= 0 && setNumber(Number(text))}/>
                    <Animated.View entering={FadeInDown.delay(500).duration(500)}>
                        <AnimatedNumber time={25} value={number}/>
                    </Animated.View>
                </ContainerPd>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default NumberAnimated