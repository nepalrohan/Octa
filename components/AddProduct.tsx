import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"



export default function AddProduct(){


    return(



        <div className='flex flex-col gap-2 w-full p-3 md:w-[500px]'>


<div className='flex flex-col gap-1 '>
<Label>Product Title</Label>
<Input placeholder="Enter product title" type='text' required />
</div>


<div className='flex flex-col gap-1 '>
<Label>Product Description</Label>
<Textarea rows={5} placeholder="Enter product description"  required />
</div>


<div className='flex flex-col gap-1 '>
<Label>Product Price</Label>
<Input placeholder="Enter product price" type='number' required />
</div>


<div className='flex flex-col gap-1 '>
<Label>Warrenty Time</Label>
<Input placeholder="Enter product warrenty period in months" type='number' required />
</div>


<div className='flex flex-col gap-1 '>
<Label>Delivery Time</Label>
<Input placeholder="Enter product delivery period in days" type='number' required />
</div>



<Button className='mt-4 bg-customdark text-gray-200 dark:bg-gray-200 dark:text-customdark hover:bg-customdark dark:hover:bg-gray-200'>Add Product</Button>

        </div>






    )
}