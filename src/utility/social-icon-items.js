/* eslint-disable react/react-in-jsx-scope */
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const DEFAULT_ICON_SIZE = 30;
const DEFAULT_TEXT_CLASS = "flex justify-between items-center w-full text-gray-300";

const list = [
    {
        name: "LinkedIn",
        to: '/',
        listClass: "w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600",
        textClass: DEFAULT_TEXT_CLASS,
        icon:  <FaLinkedin size={DEFAULT_ICON_SIZE} />
    },
    {
        name: "GitHub",
        to: '/',
        listClass: 'w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]',
        textClass: DEFAULT_TEXT_CLASS,
        icon: <FaGithub size={DEFAULT_ICON_SIZE} />,
    },
    {
        name: "Email",
        to: '/',
        listClass: 'w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]',
        textClass: DEFAULT_TEXT_CLASS,
        icon: <HiOutlineMail size={DEFAULT_ICON_SIZE} />,
    },
    {
        name: "Resume",
        to: '/',
        listClass: 'w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#404343]',
        textClass: DEFAULT_TEXT_CLASS,
        icon: <BsFillPersonLinesFill size={DEFAULT_ICON_SIZE} />,
    },
];

export default list;