'use client';

import { PropsWithChildren } from "react";
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from "@/style/theme";

export interface ProvidersProps extends PropsWithChildren { };

export const Providers = ({ children }: ProvidersProps) => {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
        </CacheProvider>
    );
};