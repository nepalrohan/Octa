
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "./ui/input";
import { Label } from "./ui/label";





const MostPopular = ()=>{

    return (
      <div>
        <div className='text-center mb-16 '>
  <h1 className='font-extrabold text-3xl text-slate-800 dark:text-gray-200'>Most Popular Products</h1>
  <p className='text-gray-500 dark:text-gray-300'></p>
</div>
        <div className='grid grid-cols-3 gap-6'>



        <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  


            </div>
            </div>
    )
}



export default MostPopular;