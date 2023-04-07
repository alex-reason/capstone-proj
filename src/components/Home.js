import Header from "./Header";

const Home = () => {
  return (
    <div className='home'>
      <Header />

      <figure>
        <div>
          <h4>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </h4>
          <button className='btn btn-primary'>
            Reserve a table
          </button>
        </div>

        <img alt='by Lily Banse on Unsplash' src="https://source.unsplash.com/-YHSwy6uqvk" />
      </figure>

    </div>
  )
}

export default Home