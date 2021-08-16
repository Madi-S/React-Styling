import { useState } from 'react'
import { useTransition, animated } from 'react-spring'


function Mount() {
    const [items, setItems] = useState([])
    const itemTransition = useTransition(items, {
        from: { opacity: 0, x: -100, y: 400 },
        enter: item => async next => {
            await next({ opacity: 0.95, y: item.y, delay: item.delay })
            await next({ opacity: 1, x: 0 })
        },
        leave: item => async next => {
            await next({ opacity: 0.01, x: 100, delay: item.delay })
            await next({ opacity: 0, y: 400 })
        }
    })

    return (
        <>
            <button
                onClick={() => {
                    setItems(v =>
                        v.length
                            ? []
                            : [
                                  { y: -25, delay: 300 },
                                  { y: 0, delay: 200 },
                                  { y: 25, delay: 100 }
                              ]
                    )
                }}
            >
                {items.length ? 'Unmount' : 'Mount'}
            </button>
            <div className='container'>
                {itemTransition((style, item) =>
                    item ? <animated.div style={style} className='item' /> : ''
                )}
            </div>
        </>
    )
}

export default Mount
