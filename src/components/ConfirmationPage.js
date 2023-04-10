import { useAvailabilityContext } from "../hooks/useAvailabilityContext";
import { useNavigate } from 'react-router-dom';

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const { chosenTime, chosenDate, user } = useAvailabilityContext();
  let confirmationData = false;

  if (user && chosenDate && chosenTime) {
    confirmationData = true;
  } else {
    navigate('/reserve')
  }

  return (
    <section className='confirmed'>
      <h3 className='reserve__heading'>Confirmed Reservation</h3>
      {confirmationData && (
        <>
          <p>Thank you, {user}. Your Reservation:</p>
          <p>{chosenDate} at {chosenTime}</p>
          <p>a email with the confirmation code was sent to the email address you provided.</p>
        </>
      )}
    </section >
  )
}

export default ConfirmationPage