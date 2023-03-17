import { Flex, Image } from '@chakra-ui/react'
import { SearchBar, UserMenu } from 'components'

export const NavBar = () => {
  return (
    <Flex
      w="100vw"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX={['24px', '48px', '80px', '112px']}
      paddingTop={['24px']}
    >
      <Image src="/img/logo.svg" alt="BookClub Logo" w="160px" height="48px" />
      <SearchBar />
      <UserMenu />
    </Flex>
  )
}
