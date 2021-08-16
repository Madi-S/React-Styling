import { useSpring, animated } from 'react-spring'
import { useRef } from 'react'

const MAX_LOOP_CYCLES = 10

const Loading = () => {
    const loopCycles = useRef(0)
    const styles = useSpring({
        // loop: () => MAX_LOOP_CYCLES > loopCycles.current++,
        loop: {reverse: true},
        from: { rotateZ: 0, x: -80 },
        to: { rotateZ: 180, x: 80 },
        // cancel: true,
        // config: {duration: 400}
    })

    return (
        <animated.div
            style={{
                width: 80,
                height: 80,
                backgroundColor: '#46e891',
                borderRadius: 16,
                margin: '0 auto',
                ...styles
            }}
        />
    )
}

export default Loading
