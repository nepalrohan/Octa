
import {Label} from "@/components/ui/label"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import Link from 'next/link'
export default function Signin(){
    return (
        <div className='flex h-screen w-full items-center justify-center flex-col bg-white '>

<div className=' md:w-[400px] flex items-centre justify-center gap-2 flex-col bg-gray-200 p-8  dark:text-customdark rounded-xl '>

<div className='relative w-full mb-8'>
<div className='absolute  inset-0 bg-gradient-to-r  from-blue-500 to-purple-600 blur-2xl opacity-50 -z-10'>

</div>
<h1 className='font-extrabold text-2xl text-slate-800  text-center '>Signin to Octa</h1>

</div>

<div className='flex flex-col gap-1'>
<Label>Email</Label>
<Input type='email' placeholder="example@gmail.com" className='outline-none border-2 border-customdark rounded-xl ' />


</div>

<div className='flex flex-col gap-1'>
<Label>Password</Label>
<Input type='password' placeholder="********" className='outline-none border-2 border-customdark rounded-xl ' />


</div>

<h1 className='underline text-blue-700 text-sm'>Forgot Password?</h1>

<Button className='rounded-full px-6 py-3 hover:bg-customdark bg-customdark text-gray-200 '>Sign In</Button>
<p className='text-sm text-center'>Don&apos;t have an account? <Link href='/signup' className='ml-2 text-blue-700'>Signup</Link></p>
</div>
            </div>
    )
}