import './App.css';
// import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import GalleryBody from './components/GalleryBody';
import GalleryH from './components/GalleryHeader';


// const imageData = [
//   {
//     id:1,
//     img:lake 
//   },
//   {
//     id:2,
//     img:lake
//   },
//   {
//     id:3,
//     img:lake
//   },
//   {
//     id:4,
//     img:lake
//   }
// ]

function App() {
  return (
    <div>
      {/* <header>
        <img className="logo" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt=""></img>
        <nav>
          <ul className='nav_links'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>More</a></li>
          </ul>

        </nav>
        <a className='cta' href='#'><button>Contact</button></a>
      </header> */}
      <GalleryH/>
      <GalleryBody/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
