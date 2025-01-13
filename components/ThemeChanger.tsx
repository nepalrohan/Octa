"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { Button } from "@/components/ui/button"
import { useState } from "react"



 export function ThemeChanger() {
  const { setTheme } = useTheme()
const [theme , setT] = useState<boolean>(true);

  return (

        <Button
        onClick={() =>{
          setT(!theme);
          if(theme){
            setTheme("light");

          }else{
          setTheme("dark");

          }
        }}
          size="icon"
         className='shadow-none text-slate-900 dark:text-gray-200  '
          >
          <Moon className=" h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Sun className=" absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        
        </Button>
     
     
  )
}







export function ThemeProvider({
    children,
    ...props
  }: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
  }