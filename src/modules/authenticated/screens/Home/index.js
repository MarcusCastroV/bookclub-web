import { Flex } from '@chakra-ui/react'
// import { useSelector } from 'react-redux'
import { NavBar } from 'components/organisms'

export const HomeScreen = () => {
 // const userStore = useSelector((state) => state.user)
  return (
    <Flex>
      <NavBar />
    </Flex>
  )
}
