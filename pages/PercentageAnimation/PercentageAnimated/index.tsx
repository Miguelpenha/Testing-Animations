import { FC, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { useAnimatedProps, useDerivedValue, useSharedValue, withTiming, FadeIn } from 'react-native-reanimated'
import { StyleSheet } from 'react-native'
import { Container, Chart, Circle, Percentage } from './style'
import { Svg } from 'react-native-svg'

interface Iprops {
    time: number
    radius: number
    stroke: number
    percentage: number
}

const PercentageAnimated: FC<Iprops> = ({ time, radius, stroke, percentage }) => {
    const theme = useTheme()
    const theta = useSharedValue(2*Math.PI)
    const innerRadius = radius-stroke/2
    const circumference = 2*Math.PI*innerRadius
    const invertedPercentage = (100-percentage)/100
    const animate = useDerivedValue(() => 2*Math.PI*invertedPercentage, [percentage])

    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: withTiming(theta.value * innerRadius, {
            duration: time
        })
    }), [percentage])

    useEffect(() => {
        theta.value = animate.value
    }, [percentage])

    return (
        <Container>
            <Chart style={StyleSheet.absoluteFillObject}>
                <Svg style={StyleSheet.absoluteFill}>
                    <Circle
                        cx={radius}
                        cy={radius}
                        r={innerRadius}
                        fill="transparent"
                        strokeWidth={stroke}
                        strokeLinecap="round"
                        stroke={theme.primary}
                        animatedProps={animatedProps}
                        strokeDashoffset={2*Math.PI*(innerRadius*0.5)}
                        strokeDasharray={`${circumference} ${circumference}`}
                    />
                </Svg>
                <Percentage entering={FadeIn.duration(time)}>{percentage}%</Percentage>
            </Chart>
        </Container>
    )
}

export default PercentageAnimated