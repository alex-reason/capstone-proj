import { useFormik } from "formik";
import * as yup from 'yup';
import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { useContext } from 'react';
import { AvailabilityContext } from "../context/AvailabilityContext";

const Form = ({ currForm }) => {
    const { availableTimes } = useContext(AvailabilityContext)

    // form validations
    // to do: finish validations; add FormControl and FormErrormessage to inputs
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            numPeople: "",
            occassion: "",
            date: "",
            time: ""
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: yup.object().shape({
            firstName: yup.string().required("required"),
            lastName: yup.string().required("required"),
            email: yup.string().email("please enter a valid email").required("required"),
            numPeople: yup.number().required("required"),
            occassion: yup.string().required("required"),
            date: yup.date().required("required")
        }),
    });

    const cancelForm = (
        <form className='form'>
            <span className='form__cancel'>
                <label htmlFor='cancel'>Confirmation Number</label>
                <Input name='cancel' id='cancel' required />
            </span>
            <button className='btn btn-primary'>Cancel Reservation</button>
        </form>
    )

    const reserveForm = (
        <form className='form'>
            <div className='form__name'>
                <span>
                    <label htmlFor='firstName'>First</label>
                    <Input name='firstName' id="firstName" required />
                </span>
                <span>
                    <label htmlFor='lastName'>Last</label>
                    <Input name='lastName' id="lastName" />
                </span>
            </div>

            <div className='form__details'>
                <span>
                    <label htmlFor='email'>Email Address</label>
                    <Input type='email' name='email' id="email" required />
                </span>
                <span className='form__details-num'>
                    <label htmlFor='numPeople'>No. of People</label>
                    <Input type='number' name='numPeople' id="numPeople" min='1' max='15' required />
                </span>
                <span>
                    <label htmlFor="occasion">Occassion</label>
                    <select id="occasion" name="occasion">
                        <option value="birthday">
                            Birthday
                        </option>
                        <option value="anniversary">
                            Anniversary
                        </option>
                        <option value="graduation">
                            Graduation
                        </option>
                        <option value="other">
                            Other
                        </option>
                    </select>
                </span>
            </div>

            <div className='form__schedule'>
                <span>
                    <label htmlFor="date">Date</label>
                    <Input type='date' name='date' id='date' required />
                </span>
                <span>
                    <label htmlFor="time">Time</label>
                    <select name='time' id="time">
                        {availableTimes.map(time =>
                            <option>{time}</option>
                        )}
                    </select>
                </span>
            </div>

            <div className='form__confirm'>
                <p>Details</p>
                <p>put details here</p>
            </div>

            <button className='btn btn-primary'>Confirm Reservation</button>

        </form>
    )

    return (
        <>
            <h3>{currForm === 'reserve' ? 'Reserve a Table' : 'Cancel Reservation'}</h3>
            {currForm === 'reserve' ? reserveForm : cancelForm}
        </>
    )
}

export default Form