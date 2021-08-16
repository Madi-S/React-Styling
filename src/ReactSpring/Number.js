import { useState } from 'react'
import { useSpring, animated } from 'react-spring'

function Number() {
    const [flip, setFlip] = useState(false)
    const { number } = useSpring({
        reset: true,
        reverse: flip,
        from: { number: 0 },
        number: 100,
        delay: 400,
        onRest: () => setFlip(!flip)
    })

    return <animated.div>{number.to(n => n.toFixed(2))}</animated.div>
}

export default Number
