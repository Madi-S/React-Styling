import * as React from 'react'
import { useEffect, useState } from 'react'
import {
    motion,
    useViewportScroll,
    useSpring,
    useTransform
} from 'framer-motion'


const ContentPlaceholder = () => {
    return <p style={{fontSize: '2rem'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod repudiandae maiores eius sequi earum animi sunt aliquam, illo officia nobis culpa molestiae debitis doloremque cumque, ullam nostrum natus eum numquam voluptatum odit. Alias facere reprehenderit autem dolorem, cumque voluptas vitae omnis! Debitis expedita, ipsa, voluptas dolor omnis dolorem exercitationem a magnam suscipit et asperiores maxime. Incidunt et eaque quia iusto esse neque ratione aperiam vitae delectus aliquam? Alias dolore eos tenetur incidunt assumenda minima, vero maiores repellendus rerum ducimus praesentium! Maiores voluptas deleniti error accusamus nam eligendi consequatur recusandae. Consequuntur hic labore ea iusto eaque rem voluptatum aliquam excepturi libero debitis qui magnam quos, deserunt repellat modi omnis. Delectus quasi in commodi, provident iure vitae hic tempore consectetur culpa nesciunt at reiciendis libero unde repellat quod nam non iste consequatur quibusdam. Earum in praesentium tenetur? Cum, laudantium saepe! Aspernatur similique quos culpa nesciunt minus autem, quo excepturi eaque quidem voluptatum doloremque molestiae accusamus qui id commodi adipisci a suscipit ducimus aperiam fuga illo nobis consectetur laboriosam nostrum. Explicabo amet dolorem est porro id laudantium doloribus, ad ipsam error exercitationem eum ex aperiam possimus rerum distinctio asperiores dignissimos quis. Nemo molestias minima maxime reiciendis maiores amet, at quam fuga repellat veniam similique beatae. Unde incidunt porro odio minima mollitia atque officiis sint quos, facere ad, optio obcaecati! Quidem quae obcaecati quis at, quam alias voluptatem omnis, ab et laudantium unde sapiente dolores repudiandae. Amet laboriosam tenetur, dolorum nostrum unde ipsa cupiditate aut cumque architecto pariatur sint ex enim accusantium ullam natus! Ullam laboriosam fugiat, ex, qui hic pariatur ipsam saepe minima harum mollitia illo quia architecto ad cum culpa ipsa. Architecto culpa ea tenetur corporis fuga recusandae voluptatem incidunt eos, aliquam, tempora tempore exercitationem sapiente commodi necessitatibus deserunt odit blanditiis modi cumque rem quos, nulla eveniet vel iusto suscipit. Iste molestias, unde aperiam voluptatibus vel dolorem aliquam inventore ipsa impedit quasi, magni a explicabo, illo et alias fugiat? Laudantium illo, voluptatem deserunt corrupti atque voluptate quos unde optio, mollitia quisquam vero, quo nobis? Nobis, esse officiis earum molestiae blanditiis exercitationem natus praesentium autem sapiente ipsum est ex, provident unde dolores quas dicta? Id, cupiditate ullam officia sit deserunt impedit cum quod suscipit ea nemo culpa nobis adipisci omnis autem quia quae fuga, unde similique earum animi! Libero nostrum autem beatae, esse commodi vel labore tempora quod tenetur at animi in cumque accusamus odit officia explicabo blanditiis praesentium! Velit accusamus fugit repellendus earum! Iure quo autem non nobis saepe officiis? Amet necessitatibus excepturi incidunt, illum non voluptatibus quos consequatur in error optio tempore itaque ducimus nobis ab, pariatur quis quaerat! Temporibus officiis facilis asperiores vel quae totam incidunt eius? Quas, aspernatur? Illum harum dicta quo suscipit aliquid molestiae inventore ab iusto nam odit minus temporibus commodi ipsum, incidunt recusandae eius, quidem tenetur optio ipsa itaque exercitationem ea facere. Eos numquam odit dolorum neque error voluptatum dignissimos soluta cum distinctio. Veniam, voluptates reiciendis? Voluptatibus reiciendis fugit quia aliquam veritatis nobis quasi illum assumenda est ipsam? Delectus veritatis voluptatum minus suscipit? Repellat, incidunt eos.</p>
}

const CircleIndicator = () => {
    const [isComplete, setIsComplete] = useState(false)
    const { scrollYProgress } = useViewportScroll()
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1])
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 })

    useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange])

    return (
        <>
            <ContentPlaceholder />
            <svg className='progress-icon' viewBox='0 0 60 60'>
                <motion.path
                    fill='none'
                    strokeWidth='5'
                    stroke='white'
                    strokeDasharray='0 1'
                    d='M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0'
                    style={{
                        pathLength,
                        rotate: 90,
                        translateX: 5,
                        translateY: 5,
                        scaleX: -1 // Reverse direction of line animation
                    }}
                />
                <motion.path
                    fill='none'
                    strokeWidth='5'
                    stroke='white'
                    d='M14,26 L 22,33 L 35,16'
                    initial={false}
                    strokeDasharray='0 1'
                    animate={{ pathLength: isComplete ? 1 : 0 }}
                />
            </svg>
        </>
    )
}

export default CircleIndicator
