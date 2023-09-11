import { useState } from 'react'
import ContainerPd from '../../components/ContainerPd'
import { FlatList, ListRenderItemInfo } from 'react-native'
import options from './options'
import Header from './Header'
import Footer from './Footer'
import { optionsContainerStyle } from './style'
import { IOption } from './type'
import Option from './Option'

function Home() {
  const [find, setFind] = useState('')

  return (
    <ContainerPd>
      <FlatList
        data={options}
        ListHeaderComponent={<Header setFind={setFind}/>}
        ListFooterComponent={<Footer/>}
        contentContainerStyle={optionsContainerStyle}
        keyExtractor={(option, index: number) => String(index)}
        renderItem={({ item: option, index }: ListRenderItemInfo<IOption>) => {
          const isInTitle = option.title.toUpperCase().includes(find.toUpperCase())
          const isInPageName = option.page.toUpperCase().includes(find.toUpperCase())

          if (isInTitle || isInPageName) {
            return (
              <Option index={index} page={option.page} title={option.title}/>
            )
          }
        }}
      />
    </ContainerPd>
  )
}

export default Home