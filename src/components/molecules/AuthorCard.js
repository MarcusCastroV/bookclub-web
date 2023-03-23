/* eslint-disable camelcase */
import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'
import { useNavigate } from 'react-router-dom'

export const AuthorCard = ({ id, avatar_url, name }) => {
  const navigate = useNavigate()
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      mr={["36px", "16px"]}
      mb="16px"
      onClick={() => navigate(`/author-detail/${id}`)}
    >
      <Flex
        backgroundImage={avatar_url}
        backgroundPosition="center"
        backgroundSize="cover"
        h={['180px', '230px']}
        w={['120px', '154px']}
        borderRadius={['8px', '12px']}
      />
      <Text
        noOfLines={1}
        maxWidth={['120px', '154px']}
        textAlign="center"
        mt="8px"
        fontSize="12px"
        fontWeight="600"
      >
        {name}
      </Text>
    </Flex>
  )
}
