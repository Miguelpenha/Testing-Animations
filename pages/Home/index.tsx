import ContainerPd from '../../components/ContainerPd'
import { FlatList, ListRenderItemInfo } from 'react-native'
import options from './options'
import { optionsContainerStyle, Title } from './style'
import { ZoomInDown } from 'react-native-reanimated'
import { IOption } from './type'
import Option from './Option'

function Home() {
  return (
    <ContainerPd>
      <FlatList
        data={options}
        contentContainerStyle={optionsContainerStyle}
        keyExtractor={(option: IOption, index: number) => String(index)}
        ListHeaderComponent={<Title entering={ZoomInDown}>Testando Animações</Title>}
        renderItem={({ item: option, index }: ListRenderItemInfo<IOption>) => (
          <Option index={index} page={option.page} title={option.title}/>
        )}
      />
    </ContainerPd>
  )
}

export default Home