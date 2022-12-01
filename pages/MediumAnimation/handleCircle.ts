import { Dispatch, SetStateAction } from 'react'
import { IPadding } from './type'

function handleCircle(index: number, paddings: Dispatch<SetStateAction<IPadding>>[]) {
    if (index === 1) {
        paddings[0]('big')
        paddings[1]('medium')
        paddings[2]('small')
    } else if (index === 2) {
        paddings[0]('medium')
        paddings[1]('big')
        paddings[2]('small')
    } else if (index === 3) {
        paddings[0]('small')
        paddings[1]('medium')
        paddings[2]('big')
    }
}

export default handleCircle