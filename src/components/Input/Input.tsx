import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    InputGroup,
    Input as DefaultInput,
    InputProps as DefaultInputProps,
    InputLeftElement,
    InputRightElement,
} from '@chakra-ui/react';
import { forwardRef } from 'react';

export interface InputProps extends DefaultInputProps {
    label?: string,
    helper?: string,
    error?: string,
    inputLeftElement?: JSX.Element,
    inputRightElement?: JSX.Element
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({
    label,
    helper,
    error,
    inputLeftElement,
    inputRightElement,
    colorScheme,
    width,
    maxWidth,
    isRequired,
    ...props
}, ref) => {
    return (
        <FormControl
            width={width}
            maxWidth={maxWidth}
            isInvalid={Boolean(error)}
            isRequired={isRequired}
        >
            <FormLabel
                margin={0}
                marginLeft={1}
                fontSize="sm"
                color="gray.600"
                _dark={{
                    color: "gray.200"
                }}
            >{label}</FormLabel>
            <InputGroup>
                {(!!inputLeftElement) && (
                    <InputLeftElement>{inputLeftElement}</InputLeftElement>
                )}
                <DefaultInput
                    ref={ref}
                    focusBorderColor={colorScheme}
                    borderColor="gray.400"
                    {...props}
                />
                {(!!inputRightElement) && (
                    <InputRightElement>{inputRightElement}</InputRightElement>
                )}
            </InputGroup>
            {(!!helper) && (
                <FormHelperText>{helper}</FormHelperText>
            )}
            {(!!error) && (
                <FormErrorMessage>{error}</FormErrorMessage>
            )}
        </FormControl>
    );
});

Input.displayName = 'Input';