import { useState } from 'react'
import { Flex, Image } from '@chakra-ui/react'
import { SearchBar, UserMenu, UserModal } from 'components'
import { useNavigate } from 'react-router-dom'

export const NavBar = ({ query, setQuery }) => {
  const [showModal, setShowModal] = useState()

  const navigate = useNavigate()
  const onCloseModal = () => {
    setShowModal(null)
  }
  return (
    <Flex
      w="100vw"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX={['24px', '48px', '80px', '112px']}
      paddingTop={['24px']}
    >
      <Image
        src="/img/logo.svg"
        alt="BookClub Logo"
        w={['100px', '160px']}
        height="48px"
        cursor="pointer"
        onClick={() => navigate('/home')}
      />
      <Flex display={['none', 'flex']}>
        <SearchBar query={query} setQuery={setQuery} />
      </Flex>
      <UserMenu setShowModal={setShowModal}/>
      {showModal === 'user' && <UserModal onClose={onCloseModal} />}
    </Flex>
  )
}
