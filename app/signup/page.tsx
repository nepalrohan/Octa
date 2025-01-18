
import {Label} from "@/components/ui/label"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import Link from 'next/link'
export default function Signin(){
    return (
        <div className='flex h-screen w-full items-center justify-center flex-col bg-white '>

<div className='flex md:w-[400px] items-centre justify-center gap-2 flex-col bg-gray-200 p-8  dark:text-customdark rounded-xl '>

<div className='relative w-full mb-8'>
<div className='absolute  inset-0 bg-gradient-to-r  from-blue-500 to-purple-600 blur-2xl opacity-50 -z-10'>

</div>
<h1 className='font-extrabold text-2xl text-slate-800  text-center '>Signup to Octa</h1>

</div>

<div className='flex flex-col gap-1'>
<Label>Fullname</Label>
<Input type='text' placeholder="John Doe" className='outline-none border-2 border-customdark rounded-xl ' />


</div>



<div className='flex flex-col gap-1'>
<Label>Email</Label>
<Input type='email' placeholder="example@gmail.com" className='outline-none border-2 border-customdark rounded-xl ' />


</div>

<div className='flex flex-col gap-1'>
<Label>Phone Number</Label>
<Input type='text' placeholder="Contact number" className='outline-none border-2 border-customdark rounded-xl ' />


</div>

<div className='flex flex-col gap-1'>
<Label>Address</Label>
<Input type='text' placeholder="Butwal-11, Devinagar, BP_Path" className='outline-none border-2 border-customdark rounded-xl ' />


</div>

<div className='flex flex-col gap-1'>
<Label>Password</Label>
<Input type='password' placeholder="********" className='outline-none border-2 border-customdark rounded-xl ' />


</div>


<Button className='rounded-full px-6 py-3 hover:bg-customdark bg-customdark text-gray-200 '>Sign Up</Button>
<p className='text-sm text-center '>Already have an account? <Link href='/signin' className='ml-2 text-blue-700'>Signin</Link></p>
</div>
            </div>
    )
}