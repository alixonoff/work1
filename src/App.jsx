import './App.css'
import Activity from './components/Activity/Activity'
import Banner from './components/Banner/Banner'
import Destination from './components/Destination/Destination'
import Footer from './components/Footer/Footer'
import Footerfirst from './components/FooterFrist/Footerfirst'
import Reviews from './components/Reviews/Reviews'
import Photos from './components/SharedPhotos/Photos'
import Packages from './components/TourPackages/Packages'


function App() {


  return (
    <>
      <Banner/>
      <Destination/>
      <Activity/>
      <Packages/>
      <Photos/>
      <Reviews/>
      <Footerfirst/>
      <Footer/>
    </>
  )
}

export default App
