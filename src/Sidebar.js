import React, { useState } from 'react'

const SideBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const Menus = [
        { title: "My Account" },
        { title: "My Orders" },
        { title: "My Claims" },
        { title: "My Favorites" },
        { title: "Address Book", gap: true },
        { title: "Account Information" },
        { title: "Payment Information" },
        { title: "Email Preferences", },
    ];
    return (
        <div className='flex'>
    <aside class="h-screen sticky top-0">
        {/* // Fixed Sidebar */}
    </aside>
            
            <div className="hidden md:flex w-[350px] justify-end p-1 ">
                <div className='bg-amber-100 rounded-md text-gray-500 w-[250px]'>
                    <ul className="pt-6 ">
                        {Menus.map((Menu, index) => (
                            <li tabIndex={0}
                                key={index}
                                className={`w-[178px] h-[40px] left-[50px] md:py-4  font-medium text-sm   hover:bg-orange-50  m-1 flex items-center px-2 rounded-xl cursor-pointer first-letter
                                ${Menu.gap ? "mt-9 " : "mt-2"}`}
                            >
                                <span className='px-1 flex items-center'>
                                    {Menu.title}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      
    )
}

export default SideBar;