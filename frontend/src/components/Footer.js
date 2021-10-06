import React from 'react'
import { Box, Link, Spacer, Text } from '@chakra-ui/layout'
import './Footer.module.css'
import { Flex } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/button'
import { HiMoon } from 'react-icons/hi'
import { BiSun } from 'react-icons/bi'
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'

function Footer() {
    const { colorMode, toggleColorMode } = useColorMode()

    const icons = useColorModeValue(<HiMoon />, <BiSun />)
    const linkColors = useColorModeValue('green.500', 'teal.300')
    return (
        <Flex borderTop="1px">
            <Box mt="5">
                <Text>Made with ❤ by <b><Link href="https://github.com/JustinOleskii" color={linkColors} isExternal>JustinOleskii</Link></b></Text>
            </Box>
            <Spacer />
            <Box mt="3">
                <IconButton icon={icons} onClick={toggleColorMode} variant="outline"/>
            </Box>
        </Flex>
        
        
    )
}

export default Footer
