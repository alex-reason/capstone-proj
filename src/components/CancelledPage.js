import { useAvailabilityContext } from "../hooks/useAvailabilityContext";
import { useNavigate } from 'react-router-dom';

const CancelledPage = () => {
  const { cancelCode } = useAvailabilityContext()
  const navigate = useNavigate();

  if (!cancelCode){
    navigate('/capstone-proj/reserve')
  }

  return (
    <section className='canceled'>
    <h3 className='reserve__heading'>Confirmed Cancellation</h3>
    <p>Your reservation has been cancelled.</p>
  </section>
  )
}

export default CancelledPage