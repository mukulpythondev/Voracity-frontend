import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logo from "../assets/logo.svg";
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';

const AccountSetup = () => {
  const [step, setStep] = useState(2); // Initialize with Step 2
  const [cards, setCards] = useState([
    { id: 1, folderName: '', description: '' },
    { id: 2, folderName: '', description: '' },
    { id: 3, folderName: '', description: '' },
  ]);
  const navigate= useNavigate()
  
const handleInputChange = (id, field, value) => {
  setCards((prevCards) =>
    prevCards.map((card) =>
      card.id === id ? { ...card, [field]: value } : card
    )
  );
};

const handleEditClick = (id) => {
  setCards((prevCards) =>
    prevCards.map((card) =>
      card.id === id ? { ...card, isEditing: true } : card
    )
  );
};

const handleBlur = (id) => {
  setCards((prevCards) =>
    prevCards.map((card) =>
      card.id === id ? { ...card, isEditing: false } : card
    )
  );
};
  const handleNextStep = () => {
    setStep(step + 1); // Move to the next step
  };
const handleFinish=()=>{
  navigate('/dashboard')
}
  
  return (
    <div className="flex  w-full gap-y-10 items-center flex-col  h-screen p-6">
     <div className="top py-5 px-5 w-full flex justify-between items-center">
     <img src={logo} alt="Logo" className="mb-8" />
     <div className="badge bg-gray-200 p-3 font-semibold rounded-full text-lg mb-6">Step {step}/3</div>
     </div>
     <div className="headings px-5 self-start ">
          <h2 className="text-5xl font-bold mb-4">Account Setup</h2>
          <h5 className='text-lg font-semibold' > {step==2?"Setup your account, according to your preferneces":"Modify the suggested files"}   </h5>
          </div>
      {step === 2 && (
        <>
       
          <div className="content mt-10 flex flex-col items-center border-1 border-blue-800  rounded-lg w-9/12 py-5 px-7 shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_1px_#573CFF,0_0_10px_#573CFF,0_0_10px_#573CFF] ">
           <h3 className='text-4xl my-10 font-semibold' >Tell us about yourself, your interests, your work, and what you want to see in your inbox!</h3>
          <Textarea className="text-xl"  placeholder="Talk normally, tell me how you want me to setup your folders (no pressure you will be able to change them the next step)" />
          <Button
            className=" self-end  mt-6 bg-[#573CFF] hover:bg-[#573CFF]  transition-all duration-300 text-xl   text-white"
            onClick={handleNextStep}
          >
            Next
          </Button>
          </div>
        </>
      )}
      {step === 3 && (
  <>
    <div className="flex gap-10 items-center w-10/12">
      {cards.map((card) => (
        <div
          key={card.id}
          className="py-14 max-h-[40vh] px-5 flex flex-col  w-3/12 shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_1px_#573CFF,0_0_10px_#573CFF,0_0_10px_#573CFF] rounded-lg"
        >
          <div>
            {card.isEditing ? (
              <Input
                type="text"
                value={card.folderName}
                onChange={(e) => handleInputChange(card.id, "folderName", e.target.value)}
                onBlur={() => handleBlur(card.id)} // Stop editing when input loses focus
                autoFocus
                className="w-full h-10 text-2xl "
              />
            ) : (
              <h2
                className="text-2xl h-10 font-bold cursor-pointer"
                onClick={() => handleEditClick(card.id)} // Start editing on click
              >
                {card.folderName || "Folder"}
              </h2>
            )}
          </div>

          <Textarea
            placeholder="Folder context, this folder is for emails that contain X Y Z...."
            value={card.description}
            onChange={(e) => handleInputChange(card.id, "description", e.target.value)}
            className="w-full "
          />
          <Button
            className="self-end mt-20 bg-[#573CFF] hover:bg-[#573CFF] hover:scale-95 transition-all duration-300 text-xl text-white"
          >
            Modify
          </Button>
        </div>
      ))}
    </div>
    <Button onClick={handleFinish} className="bg-[#573CFF] hover:scale-95 duration-200 transition-all mt-10 hover:bg-[#573CFF] text-white text-2xl self-end mr-32" >Finish</Button>
  </>
)}

    </div>
  );
};

export default AccountSetup;
