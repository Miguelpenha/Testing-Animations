import { IMovie } from '../../type'
import { FC } from 'react'
import { ZoomIn, FadeInDown } from 'react-native-reanimated'
import { Container, Thumbnail, Data, Title, Numbers, ContainerNumber, IconNumber, Number } from './style'
import limitText from '../../../../utils/limitText'
import useAnimation from './useAnimation'
import useAverage from './useAverage'

interface Iprops {
    movie: IMovie
    index: number
    onPress: () => void
}

const Movie: FC<Iprops> = ({ movie, index, onPress }) => {
    const animation = useAnimation(index, onPress)
    const average = useAverage(movie)
    
    return (
        <Container {...animation}>
            <Thumbnail
                source={{ uri: movie.image }}
                entering={ZoomIn.delay(300+(index*100)).duration(300)}
            />
            <Data entering={FadeInDown.delay(300+(index*100)).duration(500)}>
                <Title>{limitText(movie.title, 35)}</Title>
                <Numbers>
                    <ContainerNumber>
                        <IconNumber name="thumbs-up-down" size={20}/>
                        <Number>{`${movie.votes} votos`}</Number>
                    </ContainerNumber>
                    <ContainerNumber>
                        <IconNumber name={`thumb-${movie.average >= 7 ? 'up' : 'down'}`} size={20}/>
                        <Number>{average}</Number>
                    </ContainerNumber>
                </Numbers>
            </Data>
        </Container>
    )
}

export default Movie