import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'

function Header() {
    return (
        <Flex borderBottom="1px">
            <Box p="3" >
                <Heading size="lg">✂ codeSNIP</Heading>
                <Text size="md" pt="2">An open-source recreation of hastebin.</Text>
            </Box>
        </Flex>
    )
}

export default Header
