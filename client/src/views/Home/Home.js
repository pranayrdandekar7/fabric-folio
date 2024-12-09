
import MainCarousel from "../../components/HomeCarousel/MainCarousel.js/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import Navbar from "../../components/Navbar/Navbar";
import MENS_KURTAS from "../../data.js/Mens-Kurtas";
import WOMENS_KURTAS from "../../data.js/Womens-Kurtas";

import "./Home.css"

const Home = ( ) => {

  return (
    <>
  
    <Navbar/>
    <MainCarousel />
    <div className="space-y-4 py-4 flex flex-col justify-center px-3 lg:px-5">
      {/* <h3 className="text-2xl font-bold ml-8 border-b-2  w-48 border-teal-400 "> MEN'S KURTA</h3> */}
    <HomeSectionCarousel data={MENS_KURTAS}  sectionName="MEN'S KURTA "/>
    <HomeSectionCarousel data={ WOMENS_KURTAS }sectionName = "WOMEN'S KURTA"/>
    <HomeSectionCarousel/>
    </div>
    <h1 className="text-bold">you are in home page</h1>
    </>
  )
} 

export default Home ;