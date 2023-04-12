import { FormControl, FormErrorMessage } from "@chakra-ui/react";

const FormInput = ({ error, label, ...props}) => {
    return (
        <span>
            <FormControl isInvalid={error}>
                <label htmlFor={props.htmlFor}>{label}</label>
                <input {...props} />
                <FormErrorMessage className="error">{error}</FormErrorMessage>
            </FormControl>  
        </span>
    )
}

export default FormInput