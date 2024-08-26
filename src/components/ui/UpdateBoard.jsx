import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { useState } from "react"
import { Calendar } from "./calendar"


const UpdateBoard = () => {
  const [date, setdate] = useState(Date())
  return (
    <div className="flex flex-col gap-y-5 items-center px-3 py-4 w-[20%] ">
      <div className="profile items-center justify-start bg-zinc-50 p-2 flex gap-8">
        <h3>kat2235@gmail.com</h3>
        <Avatar>
  <AvatarImage className="h-12 w-10 rounded-full" src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

      </div>
      <div className="contacts gap-x-2 gap-y-1 flex flex-wrap ">
      <div className=" items-center  p-2 flex flex-col gap-2">
        <Avatar>
  <AvatarImage className="h-12 w-12 rounded-md" src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<h3>Moncef</h3>

      </div>
      <div className=" items-center  p-2 flex flex-col gap-2">
        <Avatar>
  <AvatarImage className="h-12 w-12 rounded-md" src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<h3>John</h3>

      </div>
      <div className=" items-center  p-2 flex flex-col gap-2">
        <Avatar>
  <AvatarImage className="h-12 w-12 rounded-md" src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<h3>Linda</h3>

      </div>
      <div className=" items-center  p-2 flex flex-col gap-2">
        <Avatar>
  <AvatarImage className="h-12 w-12 rounded-md" src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<h3>Moncef</h3>

      </div>
      <div className=" items-center  p-2 flex flex-col gap-2">
        <Avatar>
  <AvatarImage className="h-12 w-12 rounded-md" src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<h3>John</h3>

      </div>
      <div className=" items-center  p-2 flex flex-col gap-2">
        <Avatar>
  <AvatarImage className="h-12 w-12 rounded-md" src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<h3>Linda</h3>

      </div>  
      </div>
      <Calendar 
      mode="single"
      selected={date}
      onSelect={setdate}
      className="rounded-md border"
    />
    <div className="events">
      <h3 className="text-lg font-medium" >Upcoming Events</h3>
       <div className="flex flex-col items-center justify-center gap-2" >
       <span className="text-5xl" >🎉</span>
       <h6>No Upcoming Events</h6>
       </div>
    </div>
    </div>
  )
}

export default UpdateBoard