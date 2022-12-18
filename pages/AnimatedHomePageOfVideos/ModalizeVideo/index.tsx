import { IVideo } from '../Videos/type'
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
    video: IVideo
    modalize: MutableRefObject<IHandles>
}

const ModalizeVideo: FC<Iprops> = ({ modalize, video }) => {
    const data = useData(video)

    return (
        <Modalize
            ref={modalize}
            {...modalizeConfig()}
        >
            {video && (
                <Container>
                    <Thumbnail uri={video.thumbnail}/>
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
                    <Share video={video}/>
                </Container>
            )}
        </Modalize>
    )
}

export default ModalizeVideo