import { FormControl, FormErrorMessage } from "@chakra-ui/react";

const FormSelect = ({ testId, error, label, children, ...props }) => {
    return (
        <span>
            <FormControl isInvalid={error} className='select'>
                <label htmlFor={props.htmlFor}>{label}</label>
                <select {...props} defaultValue='none'>
                    <option value='none' hidden>Select an option</option>
                    {children}
                </select>
                <FormErrorMessage className="error" testID={testId}>{error}</FormErrorMessage>
            </FormControl>
        </span>
    )
}

export default FormSelect