/* react-spring animations
import Mount from './ReactSpring/Mount'
import Drag from './ReactSpring/Drag'
import Loading from './ReactSpring/Loading'
import Star from './ReactSpring/Star'
import Number from './ReactSpring/Number'
import DraggableList from './ReactSpring/DraggableList'
*/

import Box1 from './Framer/Box1'
import Box2 from './Framer/Box2'
import Box3 from './Framer/Box3'
import Box4 from './Framer/Box4'
import Box5 from './Framer/Box5'

import styled, { css } from 'styled-components'

const Wrapper = styled.section`
    padding: 4rem;
    margin: 2rem;
    background-color: ${({ bg }) => (bg ? bg : 'papayawhip')};
    ${({ is3D }) =>
        is3D &&
        css`
            background-color: white !important;
            box-shadow: 1rem 1rem 2rem black !important;
        `}
`

const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    color: palevioletred;
`

const CircleWrapper = styled(Wrapper)`
    border-radius: 100%;
    width: 50rem;
    height: 50rem;
    margin: 0 auto;
    text-align: center;
`

function App() {
    return (
        <div className='app'>
            {/* <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
        <Box5 /> */}
            <header>
                <Wrapper>
                    <Title>Hello Styled-Components</Title>
                </Wrapper>
                <Wrapper bg='white'>
                    <Title>Hello World</Title>
                </Wrapper>
                <Wrapper is3D={true}>
                    <Title>3D aye</Title>
                </Wrapper>
                <CircleWrapper is3D={true}>I am a cube</CircleWrapper>
            </header>
        </div>
    )
}
export default App
