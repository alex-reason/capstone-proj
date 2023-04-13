import { useState, useEffect} from 'react';
import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { useAvailabilityContext } from '../../hooks/useAvailabilityContext';

const FormCancel = () => {
    const { resetData } = useAvailabilityContext()
    const [error, setError] = useState(null);
    const [code, setCode] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        resetData()
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        if (code.length < 5 || code.length > 5) {
            setError("please enter a valid 5-digit code")
        } else {
            setError(null);
            navigate('/capstone-proj/cancelled')
        }
    };

    return (
        <form className='form' onSubmit={submitHandler}>
            <span className='form__cancel'>
                <FormControl isInvalid={error}>
                    <label htmlFor='cancel'>Confirmation Code</label>
                    <input name='cancel' id='cancel' required onChange={(e) => setCode(e.currentTarget.value)} />
                    <FormErrorMessage className='error'>{error}</FormErrorMessage>
                </FormControl>

            </span>
            <button className='btn btn-primary' type='submit' aria-label='cancel reservation'>Cancel Reservation</button>
        </form>
    );
}

export default FormCancel;