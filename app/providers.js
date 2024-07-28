"use client"

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
// import { theme } from '../components/theme.jsx';

export function Providers({ children }) {
    return <ChakraProvider>{children}</ChakraProvider>
}