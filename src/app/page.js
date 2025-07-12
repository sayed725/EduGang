import College from "@/components/college/college"
import Hero from "@/components/hero/hero"
import ImageGallery from "@/components/imagegalary/page"
import Research from "@/components/research/research"
import Reviews from "@/components/reviews/page"
import { Button } from "@/components/ui/button"
 
export default function Home() {
  return (
    <div className="min-h-screen  bg-[#f5f5f5]">
     <div>
      <Hero/>
     </div>


     <div>
      <College/>
     </div>


     <div>
      <ImageGallery/>
     </div>



     <div>
      <Research/>
     </div>

     <div>
      <Reviews/> 
     </div>
    </div>
  )
}