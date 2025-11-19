import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { Problems, SolutionsTeaser, Outcomes, RoiCta } from '../components/Sections'

export default function Landing(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar/>
      <Hero/>
      <Problems/>
      <SolutionsTeaser/>
      <Outcomes/>
      <RoiCta/>
      <Footer/>
    </div>
  )
}
