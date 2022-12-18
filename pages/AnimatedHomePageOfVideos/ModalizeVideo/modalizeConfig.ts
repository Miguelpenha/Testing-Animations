import { ModalizeProps } from 'react-native-modalize'
import { useTheme } from 'styled-components'
import { RFPercentage } from 'react-native-responsive-fontsize'

function modalizeConfig(): ModalizeProps {
    const theme = useTheme()

    return {
        snapPoint: RFPercentage(75),
        modalHeight: RFPercentage(90),
        modalStyle: { backgroundColor: theme.backgroundColor },
        handleStyle: {
            width: RFPercentage(10),
            backgroundColor: theme.primary
        }
    }
}

export default modalizeConfig