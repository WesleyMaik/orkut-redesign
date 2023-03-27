import { ChakraTheme, defineStyleConfig, extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false
};

const fonts: ChakraTheme['fonts'] = {
    body: 'Roboto, Inter, system-ui, sans-serif',
    heading: 'Roboto, Inter, system-ui, sans-serif,'
};

const colors: ChakraTheme['colors'] = {
    primary: '#ED2590',
    "primary.dark": "#c91877",
    background: '#D9E6F8',
    custom_black: '#4B4B4B',
    custom_gray: '#E3EAF2',
    custom_yello: '#FACF42',
    custom_blue: '#26CAFF',
    custom_red: '#E83838'
};

const Button = defineStyleConfig({
    variants: {
        primary: {
            color: 'white',
            backgroundColor: 'primary',
            rounded: 999,
            padding: 6,
            _hover: {
                backgroundColor: 'primary.dark',
            }
        }
    }
});

const components: ChakraTheme['components'] = {
    Button
};

export const theme = extendTheme({
    config,
    fonts,
    colors,
    components
});