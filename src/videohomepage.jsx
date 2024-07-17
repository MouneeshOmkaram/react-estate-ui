import Searchbar from '../components/searchbar/searchbar';
import '../homePages.scss';


function Homepagevideo() {
  return (
    <div className="homepage">
      <div className='textContainer'>
        <div className="wrapper">
          <h1>Explore, Discover, and Secure Your Perfect Home

          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores blanditiis consectetur quidem quasi quae obcaecati esse recusandae aperiam pariatur, sunt architecto eligendi explicabo neque repellat deserunt soluta sapiente est.

          </p>
          <Searchbar/>
          <div className="boxes">
            <div className="box">
              <h1>18+</h1>
              <h2>Years of experience</h2>
            </div>
            <div className="box">
              <h1>250</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='imgContainer'>
        <video src="/stock1.mp4" autoplay loop muted></video>
      </div>
    </div>
  );
}

export default Homepagevideo;