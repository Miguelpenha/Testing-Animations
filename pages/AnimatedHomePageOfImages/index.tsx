import useImages from './useImages'
import usePropsRefreshControl from '../../hooks/usePropsRefreshControl'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Images, ContainerColumns, ColumnImages} from './style'
import { RefreshControl } from 'react-native'
import ImageAnimated from './ImageAnimated'
import Loading from '../../components/Loading'

function AnimatedHomePageOfImages() {
    const { imagesRow1, imagesRow2, getImages } = useImages()
    const propsRefreshControl = usePropsRefreshControl(getImages)

    return (
        <ContainerPd>
            <HeaderBack>Página inicial animada de imagens</HeaderBack>
            {(imagesRow1.length > 0 || imagesRow2.length > 0) ? (
                <Images refreshControl={<RefreshControl {...propsRefreshControl}/>} contentContainerStyle={{paddingBottom: '40%'}}>
                    <ContainerColumns>
                        <ColumnImages>
                            {imagesRow1.map((image, index) => <ImageAnimated key={index} image={image} index={index}/>)}
                        </ColumnImages>
                        <ColumnImages>
                            {imagesRow2.map((image, index) => <ImageAnimated key={index} image={image} index={index}/>)}
                        </ColumnImages>
                    </ContainerColumns>
                </Images>
            ) : (
                <Loading/>
            )}
        </ContainerPd>
    )
}

export default AnimatedHomePageOfImages