import {FaBloggerB} from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { BiLogInCircle, BiSun } from "react-icons/bi"
import { CiMenuKebab } from "react-icons/ci";
const MainMenu = () => {
  return (
    <nav className=" container px-5 flex items-center justify-between">
      <div className=" flex gab-2 items-center">
      <FaBloggerB className=" text-BLUE"/>
      <span className=" font-Viga text-lg">Orasia</span>
      </div>
      <ul className="  gap-4 hidden md:flex">
        <li>
            <NavLink to = "/home">Home</NavLink>
        </li>
        <li>
            <NavLink to = "/create-article">Create Article</NavLink>
        </li>
        <li className=" border border-r-BACKGROUND_DARK/18">
            <NavLink to = "/author-directory">Authors Directory</NavLink>
        </li>
        <div>
        <BiSun className =" text-BLUE text-xl"/>
        </div>
        <div>
        <BiLogInCircle className =" text-xl text-CURRENT_LINE/50 hover:text-CURRENT_LINE/80 cursor-pointer"/>
        </div>
      </ul>
      <CiMenuKebab className=" text-xl md:hidden"/>
    </nav>
  )
}

export default MainMenu
