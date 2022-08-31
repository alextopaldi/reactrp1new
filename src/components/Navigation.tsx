import { Link } from "react-router-dom";

export function Navigation() {
    return(
        <nav className="h-[50px] flex opacity-60 justify-between bg-slate-500 items-center fixed top-0 left-0 w-[100%] hover:opacity-100">
            <span className="font-bold px-4 text-white">Shop</span>
            <span className="text-white">
                <Link className="mr-2" to='/'>Products</Link>
                <Link className="mr-4" to='/about'>About</Link>
            </span>

        </nav>
    )
}