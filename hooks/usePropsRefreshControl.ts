import { useState } from 'react'
import { useTheme } from 'styled-components'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { RefreshControlProps } from 'react-native'

function usePropsRefreshControl(load: () => Promise<void>,offSet: number = 0) {
    const [refreshing, setRefreshing] = useState(false)
    const theme = useTheme()

    async function onRefresh() {
        setRefreshing(true)
    
        await load()
    
        setRefreshing(false)
    }
    
    return {
        onRefresh,
        refreshing,
        colors: [theme.primary],
        progressViewOffset: RFPercentage(offSet),
        progressBackgroundColor: theme.secondary
    } as RefreshControlProps
}

export default usePropsRefreshControl