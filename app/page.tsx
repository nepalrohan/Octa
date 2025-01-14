import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import MostPopular from "@/components/MostPopular"
import RecentProducts from "@/components/RecentProducts";
export const metadata = {
  title:"Octa"
}

export default function Home() {
  return (
    <div >
      <HomePage/>
      <MostPopular/>
      <RecentProducts/>
      <Footer/>
 
    </div>
  );
}
