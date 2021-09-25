import React from 'react'
import { Box, Link, Text } from '@chakra-ui/layout'
import './Footer.module.css'

function Footer() {
    return (
        <Box borderTop="1px" mt="25">
            <Text mt="15">Made with ❤ by <Link href="https://github.com/JustinOleskii" color="teal.300" isExternal>JustinOleskii</Link></Text>
        </Box>
        
    )
}

export default Footer
