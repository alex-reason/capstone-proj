const FormCancel = () => {
    return (
        <form className='form'>
            <span className='form__cancel'>
                <label htmlFor='cancel'>Confirmation Number</label>
                <input name='cancel' id='cancel' required />
            </span>
            <button className='btn btn-primary'>Cancel Reservation</button>
        </form>
    )
}

export default FormCancel;