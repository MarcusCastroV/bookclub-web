/* eslint-disable camelcase */
import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const BookCard = ({ cover_url, name, author }) => {
  return (
    <Flex flexDir="column" alignItems="center" justifyContent="center" mr="16px">
      <Flex
        backgroundImage={cover_url}
        backgroundPosition="center"
        backgroundSize="cover"
        h="230px"
        w="154px"
        borderRadius="12px"
      />
      <Text mt="8px" fontSize="12px" fontWeight="600">
        {name}
      </Text>
      <Text mt="4px" fontSize="10px">
        {author?.name}
      </Text>
    </Flex>
  )
}
