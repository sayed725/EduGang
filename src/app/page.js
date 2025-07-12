import College from "@/components/college/college"
import Hero from "@/components/hero/hero"
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
    </div>
  )
}