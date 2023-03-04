import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Button, Link } from 'components'

export const ResetPasswordScreen = () => {

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
          <Text.ScreenTitle mt="48px">Nova senha</Text.ScreenTitle>
          <Text mt="24px">
            Digite o código enviado e uma nova senha nos campos abaixo:
          </Text>
          <Input mt="24px" placeholder="ex: 0000" />
          <Input.Password mt="24px" placeholder="Nova senha" />
          <Input.Password mt="24px" placeholder="Confirmar nova senha" />
          <Button mb="12px" mt="24px">Salvar</Button>
          <Link.Action
            flexDir={['column', 'row']}
            mt='8px'
            text="Não recebeu o código?"
            actionText="Clique aqui para reenviar."
          />
        </Flex>
        
      </Flex>
      <Flex
        w={['0px', '0%', '0%','60%']}
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
