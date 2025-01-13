import HomePage from "@/components/HomePage";
import MostPopular from "@/components/MostPopular"
export const metadata = {
  title:"Octa"
}

export default function Home() {
  return (
    <div >
      <HomePage/>
      <MostPopular/>
 
    </div>
  );
}
