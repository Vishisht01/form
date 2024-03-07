import {
  Box,
  Center,
  ChakraProvider,
  Container,
  Heading,
  theme
} from "@chakra-ui/react"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container maxW={"-moz-fit-content"} display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
      <Heading>User Details</Heading>
      <Box backgroundColor={"lightgray"} width={"50%"} borderRadius={"1rem"} p={5}>
        <Heading size={"md"}>Basic Details</Heading>
      </Box>
    </Container>
  </ChakraProvider>
)
