import { Box, Flex, keyframes } from '@chakra-ui/react'
import { FaReact } from 'react-icons/fa'

import { useAppSelector } from '@/store'
// import VirtualList from '@/components/VirtualList'
// import VirtualList from '@/components/VirtualList2'
import VirtualList from '@/components/VirtualList3'

const About = () => {
  const { value } = useAppSelector(state => state.count)

  const rotate = keyframes`
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
  `
  const list = new Array(10000).fill(1).map((_, index) => index)
  const list3 = new Array(10000).fill(1).map((_, index) => {
    if (index % 2 === 0) {
      return "Some miscellaneous things, some of which may have been seen in other people's articles or interesting things found elsewhere."
    } else if (index % 3 === 0) {
      return "Some miscellaneous things, some of which may have been seen in other people's articles or interesting things found elsewhere. They may also be something written on a whim or unfinished pieces."
    } else {
      return index
    }
  })

  return (
    <Flex justify="center" align="center" direction="column" gap={10}>
      <Box animation={`${rotate} 4s linear infinite`} h={50}>
        <FaReact size={50} />
      </Box>
      <h1>Yu-React-template</h1>
      <Box>redux count: {value}</Box>

      <Box w={300} border='1px solid black'>
        {/* <VirtualList list={list} /> */}
        <VirtualList list={list3} />
      </Box>
    </Flex>
  )
}

export default About
