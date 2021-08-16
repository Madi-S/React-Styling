import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import logo from './logo.svg'

const Drag = () => {
    const logoPos = useSpring({ x: 0, y: 0 })
    const bindLogoPos = useDrag(params => {
        logoPos.x.set(params.offset[0])
        logoPos.y.set(params.offset[1])
    })
    const pPos = useSpring({ x: -10, y: 10 })
    const bindPPos = useDrag(params => {
        pPos.x.set(params.offset[0])
        pPos.y.set(params.offset[1])
    })

    return (
        <>
            <animated.div
                className='logo'
                {...bindLogoPos()}
                style={{
                    y: logoPos.y,
                    x: logoPos.x
                }}
            >
                <img src={logo} alt='logo' />
            </animated.div>

            <animated.p
                {...bindPPos()}
                style={{
                    y: pPos.y,
                    x: pPos.x
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis aut eaque inventore porro sequi voluptatem, itaque,
                quam nesciunt neque quia asperiores a reprehenderit dolorum iure
                modi ex? Fugit, facere pariatur.
            </animated.p>
        </>
    )
}

export default Drag
