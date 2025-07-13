import College from "@/components/college/college"
import Hero from "@/components/hero/hero"
import ImageGallery from "@/components/imagegalary/page"
import Research from "@/components/research/research"
import Reviews from "@/components/reviews/page"
import { Button } from "@/components/ui/button"
import { collections, dbConnect } from "@/lib/dbConnent"




  async function getReviews() {
  const reviewCollection = await dbConnect(collections.reviews);
  const result = await reviewCollection.find().limit(10).toArray();

  const mapped = result.map((item) => ({
    admissionId: item.admissionId,
    rating: item.rating,
    comment: item.comment,
    createdAt:
      typeof item.createdAt === "object" && "getTime" in item.createdAt
        ? item.createdAt.getTime()
        : Number(item.createdAt),
    name: item.name,
    college: item.college,
    avatar: item.avatar,
  }));

  return mapped;
}
 
export default async function Home() {

 const reviews = await getReviews();

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
      <Reviews reviews={reviews}/> 
     </div>
    </div>
  )
}