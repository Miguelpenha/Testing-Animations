import { IImage } from './type'
import uuid from 'react-native-uuid'

const urlImage = 'https://e-cdns-images.dzcdn.net/images/cover/b69d3bcbd130ad4cc9259de543889e30/380x380-000000-80-0-0.jpg'

const images: IImage[] = []

for (let count = 0;count < 5;count++) {
    images.push({
        url: urlImage,
        artist: 'Drake',
        duration: '3:18',
        album: 'Scorpion',
        language: 'English',
        id: uuid.v4().toString(),
        music: `God's Plan ${count+1}`
    })
}

export default images