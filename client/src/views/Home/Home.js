
import MainCarousel from "../../components/HomeCarousel/MainCarousel.js/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css"

const Home = () => {
  return (
    <>
  
    <Navbar/>
    <MainCarousel/>
    <HomeSectionCarousel/>
    <HomeSectionCarousel/>
    <HomeSectionCarousel/>
    <h1 className="text-bold">you are in home page</h1>
    </>
  )
} 

export default Home ;