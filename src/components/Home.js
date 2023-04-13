import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='home'>
      <figure>
        <div>
          <h4>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </h4>
          <button className='btn btn-primary'>
            <Link to='/capstone-proj/reserve'>Reserve a table</Link>
          </button>
        </div>

        <img alt='by Lily Banse on Unsplash' src="https://source.unsplash.com/-YHSwy6uqvk" />
      </figure>

    </div>
  )
}

export default Home