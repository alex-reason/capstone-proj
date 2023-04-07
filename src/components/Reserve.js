import Header from "./Header"
import Form from "./Form"
const Reserve = () => {
  return (
    <section className='reserve'>
        <Header />

        <div className='reserve__options'>
          <button className='btn btn-secondary'>
            Make a reservation
          </button>
          <button className='btn btn-secondary'>
            Cancel a reservation
          </button>
        </div>

        <Form />
    </section>
  )
}

export default Reserve