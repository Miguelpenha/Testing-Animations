import { Dispatch, SetStateAction, FC } from 'react'
import { Title } from './style'
import { FadeInDown } from 'react-native-reanimated'
import InputFind from './InputFind'

interface IProps {
    setFind: Dispatch<SetStateAction<string>>
}

const Header: FC<IProps> = ({ setFind }) => {
    return (
        <>
            <Title entering={FadeInDown}>Testando Animações</Title>
            <InputFind setFind={setFind}/>
        </>
    )
}

export default Header