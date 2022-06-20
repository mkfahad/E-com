import React from 'react'
import { SearchIcon, HeartIcon ,MenuIcon} from '@heroicons/react/outline'
import UserIcon from './assets/user.svg'
import QuickOrderIcon from './assets/shipping-fast.svg'
import ShopCartIcon from './assets/shopping_cart_empty.svg'
function Header() {
    return (
        <header >
            {/* top nav */}
            <div className='flex items-center justify-center p-1 flex-grow py-3 bg-white text-black'>
                <div tabIndex={0} className='md:hidden ml-3 cursor-pointer'>
                    <MenuIcon className='h-5'/>
                </div>
                <div tabIndex={0} className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                    <h3 className='text-black w-[185px] font-normal text-xl cursor-pointer'>PROD-YOU</h3>
                </div>
                {/* search */}
                <div className='hidden sm:flex border-2 border-gray-200 items-center h-10 w-[450px] cursor-pointer bg-emerald-800 hover:bg-emerald-900'>
                    <input className='p-2 h-full w-6 flex-grow flex-shrink focus:outline-none' type='text' placeholder='Search by product,category or brand' />
                    <SearchIcon className='h-12 p-4 text-white' />
                </div>
                {/* right hand side */}
                <div className='flex items-center text-xs space-x-6 mx-6'>
                    <div tabIndex={0} className='hidden md:inline flex-col items-center cursor-pointer'>
                        <img src={UserIcon} alt="usericons" className='h-4 w-full' />
                        <p className='text-gray-700'>Hello Jonathan</p>
                    </div>
                    <div tabIndex={0} className='hidden md:inline cursor-pointer'>
                        <img src={QuickOrderIcon} alt="usericons" className='h-4 w-full' />
                        <p className='text-gray-700'>Quick Order</p>
                    </div>
                    <div tabIndex={0} className='hidden md:inline cursor-pointer'>
                        <HeartIcon className='h-4 text-gray-700 w-full' />
                        <p className='text-gray-700'>Favorites</p>
                    </div>
                    <div tabIndex={0} className='md:hidden cursor-pointer'>
                        <SearchIcon className='text-black h-5' />
                    </div>
                    <div tabIndex={0} className='cursor-pointer'>
                        <img src={ShopCartIcon} alt="usericons" className='h-4 w-full' />
                        <p className='text-gray-700'>Cart</p>
                    </div>
                </div>
            </div>
            <div className='hidden md:flex border-gray-200 border-2 items-center justify-center space-x-14 p-2 pl-3 bg-sky-700 text-black text-sm'>
                <p tabIndex={0} className='hidden sm:inline cursor-pointer'>Best sellers</p>
                <p tabIndex={0} className='hidden sm:inline cursor-pointer'>Home & Kitchen</p>
                <p tabIndex={0} className='hidden sm:inline cursor-pointer'>Groceries</p>
                <p tabIndex={0} className='hidden sm:inline cursor-pointer'>Health & Beauty</p>
                <p tabIndex={0} className='hidden sm:inline cursor-pointer'>Prime</p>
                <p tabIndex={0} className='hidden sm:inline cursor-pointer'>Electronics</p>
                <p tabIndex={0} className='hidden sm:inline cursor-pointer'>New Releases</p>
            </div>
        </header >
    )
}

export default Header