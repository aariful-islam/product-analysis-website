import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Component/Blogs/Blogs';
import Dashboard from './Component/Dashboard/Dashboard';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Reviews from './Component/Reviews/Reviews';
import ShowReviewDetails from './Component/ShowReviewDetails/ShowReviewDetails';
import ShowReview from './CustomHooks/ReviewsHook';

function App() {
  const [reviews,setReviews]= ShowReview();
  return (
    <div className="App">
      {/* <ShowReview></ShowReview> */}
      
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      {
        reviews.slice(0,3).map(review => <ShowReviewDetails key={review.id} review={review}></ShowReviewDetails>)
      }
      
      {/* <ShowReviewDetails></ShowReviewDetails> */}
      <button className='bg-red'>Show more</button>
    </div>
  );
}

export default App;
