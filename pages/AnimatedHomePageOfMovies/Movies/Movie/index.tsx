import { FC, useState, useEffect } from 'react'
import { IMovie } from '../../type'
import Animated, { ZoomIn, FadeInDown } from 'react-native-reanimated'
import { Container, Thumbnail, Title, Numbers, ContainerNumber, IconNumber, Number } from './style'
import limitText from '../../../../utils/limitText'
import useAnimation from './useAnimation'
import * as Clipboard from 'expo-clipboard'
import SimpleToast from 'react-native-simple-toast'

interface Iprops {
    movie: IMovie
    index: number
    onPress: () => void
}

const Movie: FC<Iprops> = ({ movie, index, onPress }) => {
    const [votes, setVotes] = useState(0)
    const [average, setAverage] = useState(0)
    const { animationContainer, animationThumbnail, animationData } = useAnimation(index, onPress, onLongPress)

    function onLongPress() {
        Clipboard.setString(`https://www.google.com/search?q=${movie.title.replace(/ /g, '+')}`)

        SimpleToast.show('Link do filme copiado!', SimpleToast.SHORT)
    }

    useEffect(() => {
        setTimeout(() => {
            setVotes(movie.votes)
            setAverage(movie.average)
        }, 100*index)
    }, [])
    
    return (
        <Container {...animationContainer()}>
            <Thumbnail
                style={animationThumbnail}
                source={{ uri: movie.image }}
                entering={ZoomIn.delay(300+(index*100)).duration(300)}
            />
            <Animated.View style={animationData} entering={FadeInDown.delay(300+(index*100)).duration(500)}>
                <Title>{limitText(movie.title, 35)}</Title>
                <Numbers>
                    <ContainerNumber>
                        <IconNumber name="thumbs-up-down" size={20}/>
                        <Number
                            time={25}
                            steps={45}
                            value={votes}
                            formatter={votes => `${votes} votos`}
                        />
                    </ContainerNumber>
                    <ContainerNumber>
                        <IconNumber name={`thumb-${average >= 7 ? 'up' : 'down'}`} size={20}/>
                        <Number
                            time={25}
                            steps={45}
                            value={average}
                            formatter={average => `${String(average) == movie.average.toFixed(0) ? movie.average : average} média`}
                        />
                    </ContainerNumber>
                </Numbers>
            </Animated.View>
        </Container>
    )
}

export default Movie