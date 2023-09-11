import { useState } from 'react'
import useRenderItem from './useRenderItem'
import ContainerPd from '../../components/ContainerPd'
import { FlatList } from 'react-native'
import options from './options'
import Footer from './Footer'
import { optionsContainerStyle } from './style'
import Header from './Header'

function Home() {
  const [find, setFind] = useState('')
  const renderItem = useRenderItem(find)

  return (
    <ContainerPd>
      <FlatList
        data={options}
        renderItem={renderItem}
        ListFooterComponent={<Footer/>}
        contentContainerStyle={optionsContainerStyle}
        ListHeaderComponent={<Header setFind={setFind}/>}
        keyExtractor={(option, index: number) => String(index)}
      />
    </ContainerPd>
  )
}

export default Home