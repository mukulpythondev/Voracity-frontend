import { Search } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card"
import { Button } from "./button"
import { format } from "date-fns"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React from "react"
import { Toggle } from "@/components/ui/toggle"

const Dashboard = () => {
  const data=[{
    title:"Work Projects",
    description:"Project related mails and updates.",
    unopened:4,
    urgent:2
  },
  {
    title:"Meeting",
    description:"Invitation and Schedule updates",
    unopened:2,
    urgent:8
  },
  {
    title:"Personal",
    description:"personal mails and notifications",
    unopened:4,
    urgent:2
  }]
  const mailsData=[{
    title:"Invitation from an unknown sender:Moncef Kat intros Fri ",
    description:"Summary: This is the call invitation from Moncef for an introductory meeting with Kat. No additional detail are provided. The meeting is scheduled on 9 Aug 2024",
    btntext:"Add to calendar- waiting for action"
  },{
    title:"Project Update:Q3 Deliverable ",
    description:"Linda from Project Management inform the team about the Q3 deliverables and deadlines ",
    btntext:"Preview: PDF file"
  },
  {
    title:"Family Reunion: RSVP for the event",
    description:"Summary: John is inviting the family members to family reunion and request rsvp by Augest 20 ",
    btntext:"Add to calender- waiting for the action"
  }]
  const [date, setDate] = React.useState(Date())
  return (
    <div className="h-full overflow-y-auto py-3 px-3 flex flex-col gap-y-5 min-w-[65%]" >
       <div className="input relative">
        <input className="w-full py-2 px-2 pr-10  border-blue-400 border-2" placeholder="Hyper Search"  type="text" />
        <Search className="absolute right-3 top-2 text-sm" />
       </div>
       <div className="cards flex gap-4">
      {data.map((item,index)=>{
        return   <Card key={index} >
        <CardHeader>
          <CardTitle className="font-semibold" >{item.title} </CardTitle>
        </CardHeader>
        <CardContent>
          <p> {item.description} </p>
        </CardContent>
        <CardFooter className="flex gap-2 text-sm" >
          <p> {item.unopened}  unopened</p>
          <p>{item.urgent} urgent</p>
        </CardFooter>
      </Card>
      })}

        </div>
        <div className="emailcards py-2 px-3 ">
          <div className="options flex items-center  gap-x-10">
            <Toggle aria-label="Toggle bold">Contact</Toggle>
            <Toggle aria-label="Toggle bold">Category</Toggle>
            <Toggle aria-label="Toggle bold">Urgency</Toggle>
            <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
            <Toggle aria-label="Toggle bold">Read/unread</Toggle>

            <Button variant="outline" >Apply</Button>
          </div>
            <div className="card-container gap-y-4 mt-2 flex-col flex w-full">
            {mailsData.map((card,index)=>{
            return <Card className="w-full" key={index} >
            <CardHeader>
              <CardTitle className="font-semibold" >{card.title} </CardTitle>
            </CardHeader>
            <CardContent>
              <p> {card.description} </p>
            </CardContent>
            <CardFooter className="flex gap-2 text-sm" >
               <Button variant="outline" > {card.btntext} </Button>
            </CardFooter>
          </Card>
          })}
            </div>
        </div>
       </div>

  )
}

export default Dashboard