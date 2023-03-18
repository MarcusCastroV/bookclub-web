import { Flex } from '@chakra-ui/react'
import { BookCard } from 'components/molecules'
import { Text } from 'components'
import { useQuery } from 'react-query'
import { getHighlihtedBooks } from 'services/api/request'

export const BookList = () => {
  const { data } = useQuery('highlighted', getHighlihtedBooks)
  return (
    <Flex
      flexDir="column"
      mt="48px"
      paddingX={['24px', '48px', '80px', '112px']}
    >
      <Text.ScreenTitle> Destaques </Text.ScreenTitle>
      <Flex flexDir="row" mt="24px">
        {data?.data &&
          data?.data.map((item) => <BookCard key={`book_${item.id}`} {...item} />)}
      </Flex>
    </Flex>
  )
}