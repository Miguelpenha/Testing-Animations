import { FC, useState, useEffect } from 'react'
import { IMovie } from '../../type'
import { ZoomIn, FadeInDown } from 'react-native-reanimated'
import { Container, Thumbnail, Data, Title, Numbers, ContainerNumber, IconNumber, Number } from './style'
import limitText from '../../../../utils/limitText'
import useAnimation from './useAnimation'

interface Iprops {
    movie: IMovie
    index: number
    onPress: () => void
}

const Movie: FC<Iprops> = ({ movie, index, onPress }) => {
    const [votes, setVotes] = useState(0)
    const [average, setAverage] = useState(0)
    const animation = useAnimation(index, onPress)

    useEffect(() => {
        setTimeout(() => {
            setVotes(movie.votes)
            setAverage(movie.average)
        }, 100*index)
    }, [])
    
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
            </Data>
        </Container>
    )
}

export default Movie