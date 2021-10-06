import React from 'react'
import { Textarea } from '@chakra-ui/textarea'
import { Input } from '@chakra-ui/input'
import { Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'
import {
    FormControl,
    FormLabel,
} from "@chakra-ui/react"

function Form() {
    const [resize, setResize] = React.useState('none');
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    const buttonColors = useColorModeValue('green', 'teal');

    function onSubmit(evt) {
        evt.preventDefault()
        console.log(`Title: ${title}\nContent: ${content}`)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <FormControl isRequired mt={2}>
                    <FormLabel>Title</FormLabel>
                    <Input placeholder="Enter title here" size="md" onChange={event => setTitle(event.currentTarget.value)} value={title}/>
                </FormControl>
                <FormControl isRequired mt={6}>
                    <FormLabel>Snippet</FormLabel>
                    <Textarea placeholder="Input snip here" size="md" resize={resize} minHeight="400px" onChange={event => setContent(event.currentTarget.value)} value={content} />
                </FormControl>
                <Button mt={5} mb={5} variant="solid" colorScheme={buttonColors} type="submit">Submit</Button>
            </form>
        </>
    )
}

export default Form
