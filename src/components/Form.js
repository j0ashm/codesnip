import React from 'react'
import { Textarea } from '@chakra-ui/textarea'
import { Input } from '@chakra-ui/input'
import { Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'

function Form() {
    const [resize, setResize] = React.useState('none');

    const buttonColors = useColorModeValue('green', 'teal');

    return (
        <>
            <Text mt="30" size="sm">Title</Text>
            <Input placeholder="Enter snip title here" mb="10"/>
            <Text size="sm">Content</Text>
            <Textarea placeholder="Input your code here" size="md" resize={resize} minHeight="400px"/>
            <Button mt="5" mb="5" variant="solid" colorScheme={buttonColors} loadingText="Submitting">Submit</Button>
        </>
    )
}

export default Form
