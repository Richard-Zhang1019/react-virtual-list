import { Box, Flex, keyframes } from '@chakra-ui/react'
import { FaReact } from 'react-icons/fa'

import { useAppSelector } from '@/store'
import VirtualList from '@/components/VirtualList2'

const About = () => {
  const { value } = useAppSelector(state => state.count)

  const rotate = keyframes`
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
  `
  const list = new Array(10000).fill(1).map((_, index) => index)

  return (
    <Flex justify="center" align="center" direction="column" gap={10}>
      <Box animation={`${rotate} 4s linear infinite`} h={50}>
        <FaReact size={50} />
      </Box>
      <h1>Yu-React-template</h1>
      <Box>redux count: {value}</Box>

      <Box w={300} border='1px solid black'>
        <VirtualList list={list} />
      </Box>
    </Flex>
  )
}

export default About
