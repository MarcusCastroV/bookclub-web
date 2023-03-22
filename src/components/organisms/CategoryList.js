import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Flex, Spinner } from '@chakra-ui/react'
import { Text } from 'components/atoms'
import { CategoryCard, BookCard } from 'components/molecules'
import { getCategories, getBooksByCategory } from 'services/api/request'

export const CategoryList = ({ title, categoryId }) => {
  const [selected, setSelected] = useState(categoryId)
  const { data } = useQuery('categories', getCategories)
  const {
    data: bookQuery, refetch,
    isLoading
  } = useQuery(['booksById', selected], () => getBooksByCategory(selected), {
    enabled: !!selected
  })

  useEffect(() => {
    if (!selected && data?.data) {
      setSelected(data?.data[0].id)
    }
  }, [data])

  useEffect(() => {
    refetch()
  }, [categoryId])
  return (
    <Flex
      flexDir="column"
      mt="48px"
      h="520px"
      paddingX={['24px', '48px', '80px', '112px']}
    >
      <Text.ScreenTitle> {title || 'Categorias'} </Text.ScreenTitle>
      {!categoryId && (
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
      )}
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
        {isLoading && (
          <Flex alignItems="center" justifyContent="center" h="230px">
            <Spinner />
          </Flex>
        )}
        {!isLoading && bookQuery && bookQuery?.data?.length === 0 && (
          <Flex alignItems="center" justifyContent="center" h="230px">
            <Text> Nenhum livro encontrado </Text>
          </Flex>
        )}
        {bookQuery &&
          bookQuery?.data.map((item) => (
            <BookCard key={`book_${item.id}`} {...item} />
          ))}
      </Flex>
    </Flex>
  )
}