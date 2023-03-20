import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'
import { CategoryCard, BookCard } from 'components/molecules'
import { getCategories, getBooksByCategory } from 'services/api/request'

export const CategoryList = () => {
  const [selected, setSelected] = useState()
  const { data } = useQuery('categories', getCategories)
  const bookQuery = useQuery(
    ['booksById', selected],
    () => getBooksByCategory(selected),
    {
      enabled: !!selected
    }
  )

  useEffect(() => {
    if (!selected && data?.data) {
      setSelected(data?.data[0].id)
    }
  }, [data])
  return (
    <Flex
      flexDir="column"
      mt="48px"
      h="400px"
      paddingX={['24px', '48px', '80px', '112px']}
    >
      <Text.ScreenTitle> Categorias </Text.ScreenTitle>
      <Flex
        overflowX={['scroll', 'auto']}
        flexDir="row"
        mt="12px"
        css={{
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {data?.data &&
          data?.data.map((item) => (
            <CategoryCard
              key={`book_${item.id}`}
              selected={selected === item.id}
              onClick={() => setSelected(item.id)}
              {...item}
            />
          ))}
      </Flex>
      <Flex
        overflowX={['scroll', 'auto']}
        flexDir="row"
        pb="48px"
        mt="12px"
        css={{
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {bookQuery?.data &&
          bookQuery?.data?.data.map((item) => (
            <BookCard key={`book_${item.id}`} {...item} />
          ))}
      </Flex>
    </Flex>
  )
}
