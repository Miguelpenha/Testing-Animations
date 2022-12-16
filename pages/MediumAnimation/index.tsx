import { useState } from 'react'
import { IPadding } from './type'
import handleCircle from './handleCircle'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Circles } from './style'
import Circle from './Circle'

function MediumAnimation() {
  const [padding1, setPadding1] = useState<IPadding>('big')
  const [padding2, setPadding2] = useState<IPadding>('medium')
  const [padding3, setPadding3] = useState<IPadding>('small')

  function onPress(index: number) {
    handleCircle(index, [setPadding1, setPadding2, setPadding3])
  }

  return (
    <ContainerPd>
      <HeaderBack>Animação do Medium</HeaderBack>
      <Circles>
        <Circle index={1} onPress={onPress} padding={padding1}/>
        <Circle index={2} onPress={onPress} padding={padding2}/>
        <Circle index={3} onPress={onPress} padding={padding3}/>
      </Circles>
    </ContainerPd>
  )
}

export default MediumAnimation