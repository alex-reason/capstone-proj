import { FormControl, FormErrorMessage } from "@chakra-ui/react";

const FormSelect = ({ error, label, children, ...props }) => {
    return (
        <span>
            <FormControl isInvalid={error}>
                <label htmlFor={props.htmlFor}>{label}</label>
                <select {...props} value={props.value}>
                    {children}
                </select>
                <FormErrorMessage className="error">{error}</FormErrorMessage>
            </FormControl>
        </span>
    )
}

export default FormSelect