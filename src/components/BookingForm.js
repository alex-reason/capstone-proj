import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from 'yup';
import { useAvailabilityContext } from "../hooks/useAvailabilityContext";
import { FormInput, FormCancel, FormSelect } from './form-components';

const BookingForm = ({ currForm }) => {
    const navigate = useNavigate();
    const { availableTimes, availableDates, updateData, resetData } = useAvailabilityContext();
    const occasionsArr = ['birthday', 'anniversary', 'graduation', 'others'];

    useEffect(() => {
        resetData()
    }, [])

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            numPeople: "",
            occasion: "",
            availDate: "",
            availTime: ""
        },

        onSubmit: values => {
            console.log(values);
            formik.handleReset();
            updateData({ user: formik.values.firstName, chosenTime: formik.values.availTime, chosenDate: formik.values.availDate })
            navigate('/capstone-proj/confirmation');
        },

        validationSchema: yup.object().shape({
            firstName: yup.string().required("required"),
            lastName: yup.string(),
            email: yup.string().email("please enter a valid email").required("required"),
            numPeople: yup.number().min(1, 'please enter a number more than 1').max(15, 'we can only seat    up to 15 people').required("required"),
            occasion: yup.string(),
            availDate: yup.string().required('please choose a date'),
            availTime: yup.string().required('please choose a time'),
        }),
    });

    const reserveForm = (
        <form className='form' onSubmit={formik.handleSubmit}>
            <div className='form__name'>
                <FormInput
                    error={formik.errors.firstName}
                    label='First'
                    htmlFor='firstName'
                    onChange={formik.handleChange}
                    name='firstName'
                    id='firstName'
                    value={formik.values.firstName}
                    aria-label='first name'
                    required
                />
                <FormInput
                    error={formik.errors.lastName}
                    label='Last'
                    htmlFor='lastName'
                    onChange={formik.handleChange}
                    name='lastName'
                    id='lastName'
                    value={formik.values.lastName}
                />
            </div>

            <div className='form__details'>
                <FormInput
                    error={formik.errors.email}
                    label='Email Address'
                    htmlFor='email'
                    type='email'
                    name='email'
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    required
                />

                <FormInput
                    error={formik.errors.numPeople}
                    label='No. of People'
                    htmlFor='numPeople'
                    type='number'
                    name='numPeople'
                    id='numPeople'
                    min='1'
                    max='15'
                    onChange={formik.handleChange}
                    value={formik.values.numPeople}
                    required
                />

                <FormSelect
                    error={formik.errors.occasion}
                    label='Occasion'
                    htmlFor="occasion"
                    id='occasion'
                    name='occasion'
                    {...formik.getFieldProps('occasion')}
                >
                    {occasionsArr.map(event => (<option value={event} key={event}>{event}</option>))}
                </FormSelect>
            </div>

            <div className='form__schedule'>
                <FormSelect
                    testId="date"
                    error={formik.errors.availDate}
                    htmlFor="availDate"
                    label='Date'
                    id='availDate'
                    name='availDate'
                    value={formik.values.availDate}
                    onChange={formik.handleChange}
                    required
                >
                    {availableDates.map(availability => <option value={availability} key={availability}>{availability}</option>)}
                </FormSelect>

                <FormSelect
                    testId="time-error-msg"
                    error={formik.errors.availTime}
                    htmlFor="availTime"
                    label='Time'
                    id='availTime'
                    name='availTime'
                    value={formik.values.availTime}
                    onChange={formik.handleChange}
                    required
                >
                    {availableTimes.map(availability => <option value={availability} key={availability}>{availability}</option>)}

                </FormSelect>
            </div>

            <div className='form__confirm'>
                <p>Details</p>
                {formik.values.numPeople && <p>Table for {formik.values.numPeople}</p>}
                {formik.values.availDate && <p>{formik.values.availDate}</p>}
                {formik.values.availTime && <p>{formik.values.availTime}</p>}
            </div>

            <button className='btn btn-primary' type='submit' aria-label='confirm reservation'>Confirm Reservation</button>
        </form >
    )

    return (
        <>
            <h3 className='reserve__heading'>{currForm === 'reserve' ? 'Reserve a Table' : 'Cancel Reservation'}</h3>
            {currForm === 'reserve' ? reserveForm : <FormCancel />}
        </>
    )
}

export default BookingForm