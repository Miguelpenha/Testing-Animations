import { IMovie } from '../type'
import { MutableRefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { Modalize } from 'react-native-modalize'
import { Container } from './style'
import modalizeConfig from './modalizeConfig'
import Share from './Share'
import Thumbnail from './Thumbnail'
import Data from './Data'
import useData from './useData'

interface Iprops {
    movie: IMovie
    modalize: MutableRefObject<IHandles>
}

const ModalizeMovie: FC<Iprops> = ({ modalize, movie }) => {
    const data = useData(movie)

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
                    <Share movie={movie}/>
                </Container>
            )}
        </Modalize>
    )
}

export default ModalizeMovie