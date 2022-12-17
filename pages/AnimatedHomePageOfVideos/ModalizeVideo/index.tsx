import { IVideo } from '../Videos/type'
import { MutableRefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { Modalize } from 'react-native-modalize'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { Container, Thumbnail, Icon, Title, Data, ContainerShare, IconShare } from './style'
import { FadeInDown } from 'react-native-reanimated'
import limitText from '../../../utils/limitText'
import ContainerData from './ContainerData'
import { Share } from 'react-native'

interface Iprops {
    video: IVideo
    modalize: MutableRefObject<IHandles>
}

const ModalizeVideo: FC<Iprops> = ({ modalize, video }) => {
    const theme = useTheme()

    return (
        <Modalize
            ref={modalize}
            snapPoint={RFPercentage(75)}
            modalHeight={RFPercentage(90)}
            modalStyle={{ backgroundColor: theme.backgroundColor }}
            handleStyle={{
                width: RFPercentage(10),
                backgroundColor: theme.primary
            }}
        >
            {video && (
                <Container>
                    <Thumbnail source={{ uri: video.thumbnail }} entering={FadeInDown.delay(200).duration(600)}/>
                    <ContainerData index={1} valueToCopy={video.title}>
                        <Icon name="title" size={24}/>
                        <Title>{limitText(video.title, 29)}</Title>
                    </ContainerData>
                    <ContainerData index={2} valueToCopy={String(video.views)}>
                        <Icon name="visibility" size={24}/>
                        <Data>{video.views} visualizações</Data>
                    </ContainerData>
                    <ContainerData index={3} valueToCopy={String(video.likes)}>
                        <Icon name="thumb-up" size={24}/>
                        <Data>{video.likes} likes</Data>
                    </ContainerData>
                    <ContainerShare onPress={async () => (
                        await Share.share({
                            title: video.title,
                            url: `https://video-example.com/${video.id}`,
                            message: `https://video-example.com/${video.id}`
                        }, {
                            dialogTitle: video.title
                        })
                    )} entering={FadeInDown.delay(400).duration(600)}>
                        <IconShare name="share" size={24}/>
                    </ContainerShare>
                </Container>
            )}
        </Modalize>
    )
}

export default ModalizeVideo