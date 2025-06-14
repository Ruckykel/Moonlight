import FeaturesSection from './FeaturesSection'
import Footer from './Footer'
import Hero from './Hero'
import KnowSection from './KnowSection'
import Media from './Media'
import Navbar from './Navbar'
const Home = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <Hero/>
      <FeaturesSection />
      <KnowSection />
      <Media/>
      <Footer />
    </div>
  )
}

export default Home