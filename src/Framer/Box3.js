import { motion } from 'framer-motion'
import { useState } from 'react'

const Box3 = () => {
    const [boxes, setBoxes] = useState([1, 2, 3])

    const boxVariants = {
        lion: {
            x: 100,
            scale: 1.5
        },
        monkey: {
            y: 100,
            scale: 0.5
        }
    }

    const boxVariant = {
        hidden: {
            x: '-100vw'
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.5,
                when: 'beforeChildren',
                staggerChildren: .2,
                delayChildren: .5
            }
        }
    }

    const boxItemVariant = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }

    return (
        <div className='box-container'>
            <motion.div
                className='box'
                // variants={boxVariants}
                // initial='monkey'
                // animate='lion'
                // transition={{
                //     type: 'spring',
                //     stiffness: 230,
                //     damping: 5
                // }}
                variants={boxVariant}
                animate='visible'
                initial='hidden'
            >
                {boxes.map(box => {
                    return (
                        <motion.li
                            key={box}
                            className='box-item'
                            variants={boxItemVariant}
                        ></motion.li>
                    )
                })}
            </motion.div>
        </div>
    )
}

export default Box3
