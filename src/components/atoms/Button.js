import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, ...props }) => (
  <ChakraButton
    fontSize="16px"
    fontWeight="bold"
    h="56px"
    borderRadius="16px"
    bg="brand.primary"
    _hover={{
      bg: 'brand.primary',
      fontSize: '16.5px'
    }}
    {...props}
  >
    {children}
  </ChakraButton>
)
