import { useState } from 'react';
import BookingForm from "./BookingForm";

const Reserve = () => {
  const [currForm, setCurrForm] = useState('reserve');

  return (
    <section className='reserve'>
        <div className='reserve__options'>
          <button className={currForm === 'reserve' ? 'btn btn-secondary btn-active' : 'btn btn-secondary'} onClick={() => setCurrForm('reserve')}>
            Make a reservations
          </button>
          <button className={currForm === 'cancel' ? 'btn btn-secondary btn-active' : 'btn btn-secondary'} onClick={() => setCurrForm('cancel')}>
            Cancel a reservation
          </button>
        </div>
        
        <BookingForm currForm={currForm}/>
    </section>
  )
}

export default Reserve

