import { forwardRef, useState } from "react";
import { Input, InputProps } from ".";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IconButton } from "@chakra-ui/react";

export interface PasswordInputProps extends InputProps { };

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({ ...props }, ref) => {
    const [visible, setVisible] = useState(false),
        handleToggleVisibility = () => setVisible(state => !state);

    return (
        <Input
            {...props}
            ref={ref}
            type={visible ? "text" : "password"}
            inputRightElement={(
                <IconButton
                    aria-label="Visibility"
                    icon={!visible ? <FiEye /> : <FiEyeOff />}
                    onClick={handleToggleVisibility}
                    background="transparent"
                    _hover={{
                        background: "transparent"
                    }}
                />
            )}
        />
    )
});

PasswordInput.displayName = "PasswordInput";