import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/products', name: 'Products', id: 3 },
        { path: '/products/:id', name: 'ProductDetails', id: 4 },
        { path: '/contact', name: 'Contact', id: 5 }
    ];

    return (
        // !open will toggle true to false and false to true
        <nav>
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                    <AiOutlineClose></AiOutlineClose> 
                     : <AiOutlineMenu></AiOutlineMenu>
                }
                
            </div>
            <ul className="md:flex">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav >
    );
};

export default NavBar;