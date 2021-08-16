import { useState } from 'react'
import { motion } from 'framer-motion'

const Box1 = () => {
    const [isAnimating, setIsAnimating] = useState(false)

    return (
        <div className='box-container'>
            <motion.div
                initial={{
                    opacity: 0.5
                }}
                animate={{
                    x: isAnimating ? 460 : 0,
                    opacity: isAnimating ? 1 : 0.5,
                    rotate: isAnimating ? 360 : 0,
                    scale: isAnimating ? 0.7 : 1
                }}
                transition={{
                    // type: 'tween',
                    // duration: 5,
                    type: 'spring',
                    stiffness: 230,
                    damping: 20
                }}
                className='box'
                onClick={() => setIsAnimating(prev => !prev)}
            ></motion.div>
        </div>
    )
}

export default Box1
