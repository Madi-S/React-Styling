import { motion } from 'framer-motion'

const Box2 = () => {
    return (
        <div className='box-container'>
            <motion.div
                className='box'
                whileHover={{
                    scale: 1.2,
                    opacity: 0.55,
                    transition: { duration: .1 }
                }}
                whileTap={{
                    scale: 0.8,
                    opacity: 1
                }}
                // drag='x'
                // drag='y'
                drag
                dragConstraints={{
                    top: -50,
                    left: -50,
                    right: 50,
                    bottom: 50,
                }}
            >CLICK ME</motion.div>
        </div>
    )
}

export default Box2
