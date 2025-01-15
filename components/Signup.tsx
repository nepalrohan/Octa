import React from 'react'
import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const Signup = () => {
  return (
    <SigninDialog/>

  )
}

export default Signup


export function SigninDialog (){

    return     <Dialog >
    <DialogTrigger  asChild>
    <Button  className='px-6 hover:shadow-lg rounded-full hover:bg-customdark dark:hover:bg-gray-200 bg-customdark text-gray-200 font-bold dark:text-customdark dark:bg-gray-200 py-1 '>Signin</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px] bg-gray-200 z-50 dark:text-customdark">
      <DialogHeader>
        <DialogTitle className='text-center font-bold text-xl'>Sign-in to Octa</DialogTitle>
      
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right font-medium">
            Email
          </Label>
          <Input id="email" type='email' placeholder="example@gmail.com" className="col-span-3 " />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="password" className="text-right font-medium">
            Password
          </Label>
          <Input id="password" type='password' placeholder="********" className="col-span-3 " />
        </div>
      </div>
      <DialogFooter className='flex items-center justify-center'>
        <Button className='rounded-full hover:bg-customdark bg-customdark text-gray-200 font-bold mx-auto' type="submit">Signin</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>

}




