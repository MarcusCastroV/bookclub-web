import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchIcon } from '@chakra-ui/icons'

export const SearchBar = ({query, setQuery}) => {
  const navigate = useNavigate()
  const location = useLocation()

  const checkIfIsOnSearchScreen = () => {
    if(location.pathname !== '/search') {
      navigate('/search')
    }
  }
  return (
    <Flex w="478px" h="52px" bg="brand.greyLight" borderRadius="12px">
      <InputGroup>
        <InputLeftElement h="100%">
          <SearchIcon color="brand.greyDark" />
        </InputLeftElement>
        <Input
        onFocus={() => checkIfIsOnSearchScreen()}
          value={query || ''} 
          onChange={(e) =>(setQuery ? setQuery(e.target.value) : {})}
          border="none"
          w="100%"
          h="100%"
          placeholder="Digite o nome do livro ou autor"
          _placeholder={{ color: 'brand.greyDark' }}
          focusBorderColor="transparent"
        />
      </InputGroup>
    </Flex>
  )
}
