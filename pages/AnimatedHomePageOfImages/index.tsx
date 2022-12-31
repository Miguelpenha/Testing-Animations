import useImages from './useImages'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Images, ContainerColumns, ColumnImages} from './style'
import ImageAnimated from './ImageAnimated'
import Loading from '../../components/Loading'

function AnimatedHomePageOfImages() {
    const { imagesRow1, imagesRow2 } = useImages()

    return (
        <ContainerPd>
            <HeaderBack>Página inicial animada de imagens</HeaderBack>
            {(imagesRow1.length > 0 || imagesRow2.length > 0) ? (
                <Images contentContainerStyle={{paddingBottom: '40%'}}>
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