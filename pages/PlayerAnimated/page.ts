import { IPage } from '../../types'

const page: IPage = {
    title: 'Player animado',
    description: 'Um player de música com um carrossel para poder escolher a música, possui botões de pausa, proxima e anterior. Além disso possui as letras da músicas, que acompanha a música, quando é segurada ela copia a frase atual, e quando a a letra é clicada, é aberto um modalize com a letra completa, onde ela acompanha a letra atual da música, quando uma frase é clicada, ela pula pra essa frase. Quando a foto da música é clicada, é aberto um modalize com informações sobre a música, como nome, autor, duração, idioma e álbum',
    url: 'https://github.com/Miguelpenha/Testing-Animations/tree/main/pages/PlayerAnimated',
    libs: [
        'React Native Modalize',
        'React Native Reanimated',
        'React Native Snap Carousel'
    ]
}

export default page