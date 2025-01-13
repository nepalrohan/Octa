import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
const Search = () => {
  return (
    <>
     <div className="flex w-full max-w-sm items-center ">
      <Input type="text" placeholder="Search..." className="   border-slate-900 dark:border-gray-200 h-9 border-r-0   rounded-l-full  " />
      <SearchIcon  className='h-9 text-slate-900 font-bold  dark:text-gray-200  border border-slate-900 dark:border-gray-200 border-l-0 rounded-r-full pr-1.5  cursor-pointer ' />
    </div>
  
    </>
  )
}

export default Search