import HeroSection from '../components/home/HeroSection'
// import WhoWeAre from '../components/home/WhoWeAre'
import WhyChoose from '../components/home/WhyChoose'
import FacultyAchievement from '../components/home/FacultyAchievement'
import PopularCourses from '../components/home/PopularCourses'
import Achievements from '../components/home/Achievements'

import Challenges from '../components/home/Challenges'
import CollaborativeNetwork from '../components/home/CollaborativeNetwork'
import UpcomingBatches from '../components/home/UpcomingBatches'
import PlacementStories from '../components/home/PlacementStories'
import FollowUs from '../components/home/FollowUs'
import Services from '../components/home/Services'
import GoogleReviews from '../components/home/GoogleReviews'
import ContactSection from '../components/home/ContactSection'
import MapSection from '../components/home/MapSection'
import './Home.css'

function Home() {
  return (
    <main className="home">
      {/* Hero and primary introduction */}
      <HeroSection />
      {/* <WhoWeAre /> */}
      <WhyChoose />
       <FacultyAchievement />

      {/* Courses and learning opportunities */}
      <PopularCourses />
      <UpcomingBatches />

      {/* Faculty expertise and learner outcomes */}
      <Achievements />
     
      <Challenges />
      <PlacementStories />

      {/* Industry network and services */}
      <CollaborativeNetwork />
      <Services />
      <GoogleReviews />

      {/* Community and contact information */}
      <FollowUs />
      <ContactSection />
      <MapSection />
    </main>
  )
}

export default Home
