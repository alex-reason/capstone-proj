import { useState } from 'react';
import Header from "./Header";
import Form from "./Form";

const Reserve = () => {
  const [currForm, setCurrForm] = useState('reserve');

  return (
    <section className='reserve'>
        <Header />

        <div className='reserve__options'>
          <button className='btn btn-secondary' onClick={() => setCurrForm('reserve')}>
            Make a reservation
          </button>
          <button className='btn btn-secondary' onClick={() => setCurrForm('cancel')}>
            Cancel a reservation
          </button>
        </div>

        <h3>Reserve a table</h3>

        <Form currForm={currForm}/>
    </section>
  )
}

export default Reserve