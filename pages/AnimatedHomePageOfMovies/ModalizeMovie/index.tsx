import { IMovie } from '../type'
import { MutableRefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { Modalize } from 'react-native-modalize'
import { Container, Footer } from './style'
import modalizeConfig from './modalizeConfig'
import Action from './Action'
import Thumbnail from './Thumbnail'
import Data from './Data'
import useData from './useData'
import { FadeInDown } from 'react-native-reanimated'
import useActions from './useActions'

interface Iprops {
    movie: IMovie
    modalize: MutableRefObject<IHandles>
}

const ModalizeMovie: FC<Iprops> = ({ modalize, movie }) => {
    const data = useData(movie)
    const actions = useActions(movie)

    return (
        <Modalize
            ref={modalize}
            {...modalizeConfig()}
        >
            {movie && (
                <Container>
                    <Thumbnail uri={movie.image}/>
                    {data.map((data, index) => (
                        <Data
                            key={index}
                            index={index}
                            icon={data.icon}
                            value={data.value}
                            isTitle={data.isTitle}
                        >
                            {data.data}
                        </Data>
                    ))}
                    <Footer>
                        {actions.map((action, index) => (
                            <Action key={index} index={index} icon={action.icon} onPress={action.onPress}/>
                        ))}
                    </Footer>
                </Container>
            )}
        </Modalize>
    )
} 

export default ModalizeMovie