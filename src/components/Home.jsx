import useFetch from '../custom-hook/useFetch';
import BlogList from './BlogList';
import Loading from './../custom-hook/Loading';

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <Loading />}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
