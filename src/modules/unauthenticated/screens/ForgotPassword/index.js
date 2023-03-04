import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Button } from 'components'
import { useNavigate } from 'react-router-dom'

export const ForgotPasswordScreen = () => {
  const navigate = useNavigate()
  return (
    <Flex flexDir="row" w="100vw" h="100vh">
      <Flex
        zIndex="1"
        alignItems={['center', 'flex-start']}
        justifyContent="center"
        padding={['24px', '48px', '80px', '112px']}
        flexDir="column"
        w={['100%', '100%', '100%', '40%']}
        h="100%"
      >
        <Flex flexDir="column" w={['100%', '100%', '100%', '416px']}>
          <Image
            src="/img/logo.svg"
            alt="BookClub Logo"
            w="160px"
            height="48px"
          />
          <Text.ScreenTitle mt="48px">Esqueceu senha</Text.ScreenTitle>
          <Text mt="24px">
            Digite abaixo seu e-mail que enviaremos um código de recuperação de
            senha:
          </Text>
          <Input mt="24px" placeholder="email@example.com" />
          <Button onClick={() => navigate ('/reset-password')} mt="24px">Avançar</Button>
        </Flex>
      </Flex>
      <Flex
        w={['0px', '0%', '0%', '60%']}
        h="100%"
        backgroundImage="url('/img/auth_background.svg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderTopLeftRadius="32px"
        borderBottomLeftRadius="32px"
        zIndex="0"
      />
    </Flex>
  )
}
