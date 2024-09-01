import { Button } from "@/components/ui/button";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";
import {
  ArrowRightToLine,
  CalendarCheck,
  Folder,
  Layers,
  MoveRight,
  Search,
  Tag,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Badge } from "@/components/ui/badge";
import feature from "../assets/feature.svg";
import email from "../assets/email.svg";
import search from "../assets/search.svg";
const Home = () => {
  const featuresCardData = [
    {
      title: "Multi-Account Management",
      description:
        "Manage multiple email addresses in shared folders, keeping everything organized seamlessly.",
      icon: <Layers size={32} />,
    },
    {
      title: "Seamless Team Collaboration",
      description:
        "Instant email routing ensures messages reach the right hands without delay, streamlining team communication.",
      icon: <Users size={32} />,
    },
    {
      title: "Integrated Calendar & Task Management",
      description:
        "Add events and manage tasks directly in your inbox, effortlessly staying organized.",
      icon: <CalendarCheck size={32} />,
    },
    {
      title: "Seamless Email Tagging",
      description:
        "Automatic tagging by importance and urgency helps prioritize tasks instantly.",
      icon: <Tag size={32} />,
    },
    {
      title: "Quick Email Summaries",
      description:
        "Instant summaries with highlighted key details, giving you essential information at a glance.",
      icon: <Search size={32} />,
    },
    {
      title: "Unified Inbox View",
      description:
        "Gather emails from multiple accounts into a single, organized inbox for a streamlined experience.",
      icon: <Folder size={32} />,
    },
  ];

  return (
    <div className="flex flex-col w-full relative poppins-regular">
      <nav className="group flex  w-full hover:bg-slate-200 transition-all justify-between py-5 top-0 px-10 absolute bg-transparent">
        <img src={logo} alt="" />
        <Button className="flex items-center  bg-transparent  text-white border-2 border-white group-hover:text-blue-700 group-hover:border-blue-700 hover:bg-transparent hover:scale-95 transition-all duration-300 gap-2 ">
          <span className=" ">Join Now</span>{" "}
          <ArrowRightToLine className="group-hover:text-blue " />
        </Button>
      </nav>
      <div className="hero-section gap-y-5 h-[65vh] w-full  home flex flex-col justify-center items-center">
        <h1 className="text-5xl font-medium w-4/12 text-center ">
          Find What Matters, Instantly
        </h1>
        <p className="text-sm text-center w-4/12">
          Streamline your inbox and save up to 11% of the time you spend
          managing emails. We do the boring work; you focus on what truly
          matters
        </p>
        <div className="ctas flex items-center gap-4">
          <Button className="bg-transparent transition-all duration-300 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
            Learn More
          </Button>
          <Button className="transition-all duration-300 bg-blue-700 hover:bg-blue-800 text-white">
            Get Started Now
          </Button>
        </div>
      </div>
      <div className="main-content bg-slate-50 py-10 gap-16 h-fit w-full flex flex-col ">
        <div className="f1 flex  gap-y-4  flex-col items-center justify-center ">
          <Badge
            className={`border-2 border-gray-400   text-sm  text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 `}
          >
            How it works
          </Badge>
          <h1 className="text-5xl font-medium  text-center ">
            Effortless Personalisation
          </h1>
          <p className="text-sm text-gray-500 w-5/12 mt-2 text-center">
            Connect your email, describe what you want to see in your inbox, and
            we’ll take it from there. With a system tailored to your
            preferences, your inbox will be automatically organized, making your
            life easier—no extra effort required.
          </p>
        </div>
        <div className="f2 flex gap-3 items-center w-full justify-center">
          <div className="f2-left flex py-10 gap-y-4  w-4/12  flex-col  items-start  ">
            <Badge
              className={`border-2 border-gray-400   text-sm  text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 `}
            >
              FEATURE
            </Badge>
            <h1 className="text-4xl font-medium    ">
              Customizable Folder System
            </h1>
            <p className="text-sm text-gray-500  mt-2 ">
              Tell us about your workflow, and we will create folders tailored
              specifically to you. As your needs change, so do your folders,
              ensuring your inbox stays organized, no matter how complex your
              work gets.
            </p>
            <Button className="transition-all duration-300 bg-blue-700 hover:bg-blue-800 text-white">
              Get Started Now
            </Button>
          </div>
          <img src={feature} className="w-4/12 h-1/6" alt="" />
        </div>
        <div className="f3 flex flex-row-reverse gap-10 items-center w-full justify-center">
          <div className="f3-left flex py-10 gap-y-4  w-4/12  flex-col  items-start  ">
            <Badge
              className={`border-2 border-gray-400   text-sm  text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 `}
            >
              FEATURE
            </Badge>
            <h1 className="text-4xl font-medium    ">
              Real-Time Inbox Organization
            </h1>
            <p className="text-sm text-gray-500  mt-2 ">
              Voracity instantly analyzes and categorizes your emails as they
              arrive, ensuring that important messages always stand out and are
              never missed.
            </p>
            <Button className="transition-all duration-300 bg-blue-700 hover:bg-blue-800 text-white">
              Get Started Now
            </Button>
          </div>
          <img src={email} className="w-4/12 h-1/6" alt="" />
        </div>
        <div className="f4 flex gap-3 items-center w-full justify-center">
          <div className="f4-left flex  gap-y-4  w-4/12  flex-col  items-start  ">
            <Badge
              className={`border-2 border-gray-400   text-sm  text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 `}
            >
              FEATURE
            </Badge>
            <h1 className="text-4xl font-medium    ">Hyper-Search</h1>
            <p className="text-sm text-gray-500  mt-2 ">
              Find any email effortlessly with our advanced search tool. Use
              natural language to search and retrieve emails quickly, no matter
              how detailed or vague your query.
            </p>
            <Button className="transition-all duration-300 bg-blue-700 hover:bg-blue-800 text-white">
              Get Started Now
            </Button>
          </div>
          <img src={search} className="w-4/12 h-1/6" alt="" />
        </div>
        <div className="f1 flex  gap-y-4  flex-col items-center justify-center ">
          <Badge
            className={`border-2 border-gray-400   text-sm  text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 `}
          >
            {" "}
            INCLUDED{" "}
          </Badge>
          <h1 className="text-5xl font-medium  text-center ">
            Your Inbox, Your Rules
          </h1>
          <p className="text-sm text-gray-500 w-5/12 mt-2 text-center">
            ake control of your communication with features that are
            specifically designed to match your workflow, giving you the tools
            you need to stay organized and focused.
          </p>
        </div>
        <div className="cards flex flex-wrap items-center justify-center gap-10 ">
          {featuresCardData.map((card, index) => {
            return (
              <div
                className="flex p-2 gap-y-3 justify-center flex-col items-center w-3/12"
                key={index}
              >
                <h5 className="p-3  rounded-full text-white  bg-blue-600">
                  {" "}
                  {card.icon}{" "}
                </h5>
                <h3 className=" font-semibold  ">{card.title}</h3>
                <p className="text-sm opacity-80 text-center  ">
                  {" "}
                  {card.description}{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower-content items-center justify-center bg-slate-50 py-10 gap-16 h-fit w-full flex flex-col">
        <div className="control-box px-14 py-12 rounded-lg items-center flex w-9/12 bg-blue-700">
          <div className="left flex flex-col gap-3 text-white">
            <h1 className="text-5xl font-semibold w-8/12 ">
              Ready to Take Control of Your Inbox?
            </h1>
            <p className="w-9/12">
              Experience the future of email management with Voracity. Whether
              you're managing multiple accounts, collaborating with a team, or
              simply need a better way to stay organized, we got you covered.
            </p>
          </div>
          <Button className="flex gap-2 bg-white text-blue-700 hover:gap-4 hover:scale-105 transition-all duration-300 hover:bg-white ">
            Start now <MoveRight />{" "}
          </Button>
        </div>
        <div className="flex  gap-y-4  flex-col items-center justify-center ">
          <Badge
            className={`border-2 border-gray-400   text-sm  text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 `}
          >
            {" "}
            METRICS{" "}
          </Badge>
          <h1 className="text-2xl font-medium  text-center ">
            Numbers speaking for themselves
          </h1>
          <div className="stats flex ">
            <div className="s1 p-10 flex items-center flex-col">
              <h2 className="text-blue-700 text-7xl">98%</h2>
              <p className="text-sm">Candidate match rate</p>
            </div>
            <div className="s2 p-10 border-l-4 border-r-4 border-gray-600 flex items-center flex-col">
              <h2 className="text-blue-700 text-7xl">100%</h2>
              <p className="text-sm">Personalised</p>
            </div>
            <div className="s3 p-10 flex items-center flex-col">
              <h2 className="text-blue-700 text-7xl">5x </h2>
              <p className="text-sm">Faster email search</p>
            </div>
          </div>
        </div>
        <div className="accordians  gap-y-5 flex flex-col items-center w-full justify-center">
          <Badge
            className={`border-2 border-gray-400   text-sm  text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 `}
          >
            FAQ
          </Badge>
          <h1 className="text-5xl font-medium  text-center ">
            We’ve got you covered
          </h1>
          <Accordion type="single" collapsible className="w-5/12 ">
            <AccordionItem value="item-1">
              <AccordionTrigger className="gap-3">
                How does the email classification system work?
              </AccordionTrigger>
              <AccordionContent className="overflow-hidden">
                Our system uses advanced AI algorithms to automatically
                categorize your emails based on your preferences. Simply connect
                your inbox, tell us about your workflow, and our system will
                start organizing your emails into personalized folders.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="gap-3">
                Can I customize how my emails are organized?
              </AccordionTrigger>
              <AccordionContent className="overflow-hidden">
                Absolutely! You have full control over how your emails are
                categorized. You can create custom folders, adjust the rules for
                classification, and even modify existing categories to fit your
                specific needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="gap-3">
                Will the system delete any of my emails?
              </AccordionTrigger>
              <AccordionContent className="overflow-hidden">
                No, our system only categorizes and organizes your emails; it
                doesn’t delete anything. All your emails remain accessible at
                any time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="gap-3">
                How long does it take to set up?
              </AccordionTrigger>
              <AccordionContent className="overflow-hidden">
                Setup is quick and easy. Most users are up and running in less
                than a minute. Just connect your email, set your preferences,
                and you’re good to go.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="gap-3">
                Is my data secure?
              </AccordionTrigger>
              <AccordionContent className="overflow-hidden">
                We take your privacy seriously. All your data is encrypted, and
                we never share your information with third parties. Your emails
                remain secure and confidential.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="gap-3">
                What if I don’t like how my emails are being organized?
              </AccordionTrigger>
              <AccordionContent className="overflow-hidden">
                No problem! You can simply tell the system how you want your
                emails to be organized—just like you would with a human
                assistant. Our AI will adapt to your preferences, ensuring your
                inbox is always organized exactly the way you like it. And if
                you need any help, our support team is always here to assist.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="gap-3">
                Does the system work with multiple email accounts?
              </AccordionTrigger>
              <AccordionContent className="overflow-hidden">
                Yes, our system can handle multiple email accounts, allowing you
                to manage all your inboxes in one place.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
         
        </div>
        <div className="control-box px-14 py-12 rounded-lg items-center flex w-9/12 bg-blue-700">
            <div className="left flex flex-col gap-3 text-white">
              <h1 className="text-5xl font-semibold w-8/12 ">
                Ready to Take Control of Your Inbox?
              </h1>
              <p className="w-9/12">
                Experience the future of email management with Voracity. Whether
                you're managing multiple accounts, collaborating with a team, or
                simply need a better way to stay organized, we got you covered.
              </p>
            </div>
            <Button className="flex gap-2 bg-white text-blue-700 hover:gap-4 hover:scale-105 transition-all duration-300 hover:bg-white ">
              Start now <MoveRight />{" "}
            </Button>
          </div>
      </div>
      <div className="footer w-full  flex items-center bg-slate-50 justify-center">
        <div className="top w-8/12 flex items-center gap-x-28">
           <div className="1st bg-orange-300 w-4/12 flex flex-col gap-3 items-start">
            <img src={logo2} alt="" />
              <h4 className="w-10/12 text-sm"  >No more email overload, take control of your inbox, save time and be more productive</h4>
           </div>
           <div className="2nd flex flex-col gap-y-3 ">
             <h2 className="text-3xl font-semibold">Product</h2>
             <h2 className="text-3xl font-semibold">Features</h2>
             <h2 className="text-3xl font-semibold">Pricing</h2>
            
           </div>
           <div className="3rd">
             <h5>Company</h5>
             <h5>Contact us</h5>
           </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Home;
