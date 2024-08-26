

const Sidebar = () => {
  return (
    <div className="min-w-[15%] gap-8 px-2 py-2  flex flex-col items-center border-r-2 " >
           <h1 className="text-4xl  mt-4 font-bold text-[#035FE0]" >Voracity</h1>
           <div className="items flex flex-col gap-3 ">
            { ["Inbox","Task","Calendar","Updates"].map((item,index)=>{
                return <a href="#" className="hover:bg-gray-200 font-medium transition-all p-1 rounded-sm " key={index} >{item}</a>
            })  }
           </div>
    </div>
  )
}

export default Sidebar