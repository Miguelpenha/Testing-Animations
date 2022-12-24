import { IOption } from '../type'
import { FC } from 'react'
import { FlatList } from 'react-native'
import Option from './Option'

interface Iprops {
    options: IOption[]
}

const OptionsList: FC<Iprops> = ({ options }) => {
    return (
        <FlatList
            data={options}
            keyExtractor={(option, index) => String(index)}
            renderItem={({ item: option, index }) => (
                <Option index={index} page={option.page} title={option.title}/>
            )}
        />
    )
}

export default OptionsList