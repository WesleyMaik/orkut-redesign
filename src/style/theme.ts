import { ChakraTheme, extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false
};

const fonts: ChakraTheme['fonts'] = {
    body: 'Roboto, Inter, system-ui, sans-serif',
    heading: 'Roboto, Inter, system-ui, sans-serif,'
};

export const theme = extendTheme({
    config,
    fonts
});