import { useFormik } from "formik";
import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
const Form = ({ currForm }) => {

    const cancelForm = (
        <form>
            <label htmlFor='cancel'>Confirmation Number</label>
            <Input name='cancel' id='cancel' required />
        </form>
    )

    const reserveForm = (
        <form className='form'>
            <div className='form__name'>
                <span>
                    <label htmlFor='first-name'>First</label>
                    <Input name='first-name' id="first-name" required />
                </span>
                <span>
                    <label htmlFor='last-name'>Last</label>
                    <Input name='last-name' id="last-name" />
                </span>
            </div>
{/* 
            <label htmlFor='email'>Email Address</label>
            <Input type='email' name='email' id="email" required /> */}

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
                    <Input type='time' name='time' id='time' min="09:00" max="19:00" required />
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
            {currForm === 'reserve' ? reserveForm : cancelForm}
        </>
    )

}

export default Form