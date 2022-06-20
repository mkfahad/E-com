import React from "react";
function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-red-900 text-white">
            <div className="space-y-4 text-xs text-white">
                <h5 tabIndex={0} className="font-bold">ABOUT</h5>
                <p tabIndex={0}>About Company</p>
                <p tabIndex={0}>Become a Supplier</p>
                <p tabIndex={0}>Careers</p>
                <p tabIndex={0}>Sitemap</p>
            </div>
            <div className="space-y-4 text-xs text-white">
                <h5 tabIndex={0} className="font-bold">SHOP</h5>
                <p tabIndex={0}>Home & Kitchen</p>
                <p tabIndex={0}>Groceries</p>
                <p tabIndex={0}>Health and Beauty</p>
                <p tabIndex={0}>Prime</p>
                <p tabIndex={0}>Electronics</p>
            </div>
            <div className="space-y-4 text-xs text-white">
                <h5 tabIndex={0} className="font-bold">CUSTOMER CARE</h5>
                <p tabIndex={0}>FAQs</p>
                <p tabIndex={0}>Shipping and Delivery</p>
                <p tabIndex={0}>Claims and Returns</p>
                <p tabIndex={0}>Contact Us</p>
                <p tabIndex={0}>Create New Account</p>
            </div>
            <div className=" items-center space-y-4 text-xs">
                <h5 tabIndex={0} className="font-bold text-white">SIGN UP FOR EMAIL</h5>
                <p tabIndex={0} className="text-white">Be the first to hear about promotions,new products,trends and more</p>
            <div tabIndex={0} className='flex border-2 border-gray-200 items-center h-10 cursor-pointer bg-yellow-300 hover:bg-yellow-300'>
                    <input className='p-2 h-full w-6 flex-grow flex-shrink focus:outline-none text-black' type='text' placeholder='Email Address' />
                    <p className="text-black">Subscribe</p>
            </div>
            </div>

        </div>
    )
}

export default Footer;