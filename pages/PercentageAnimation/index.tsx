import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import PercentageAnimated from './PercentageAnimated'

function PercentageAnimation() {
    return (
        <ContainerPd>
            <HeaderBack>Animação de porcentagem</HeaderBack>
            <PercentageAnimated time={1500} percentage={90} radius={60} stroke={12}/>
        </ContainerPd>
    )
}

export default PercentageAnimation