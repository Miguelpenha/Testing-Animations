import useImages from './useImages'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Images, ContainerColumns, ColumnImages} from './style'
import ImageAnimated from './ImageAnimated'

function AnimatedHomePageOfImages() {
    const { imagesRow1, imagesRow2 } = useImages()

    return (
        <ContainerPd>
            <HeaderBack>Página inicial animada de imagens</HeaderBack>
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
        </ContainerPd>
    )
}

export default AnimatedHomePageOfImages