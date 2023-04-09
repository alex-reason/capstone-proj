import { useContext } from 'react';
import { AvailabilityContext } from "../context/AvailabilityContext";

const ConfirmationPage = () => {
  const { chosenTime, chosenDate } = useContext(AvailabilityContext);

  return (
    <section className='confirmed'>
      <h3 className='resersve__heading'>Confirmed Reservation</h3>
      <p className='confirmed__strong'>Your Reservation:</p>
      <p>{chosenDate && chosenDate}</p>
      <p>{chosenTime && chosenTime}</p>
      <p>a confirmation email was sent to the email address you provided.</p>
    </section>
  )
}

export default ConfirmationPage