import React from 'react';
import Products from './Products.json'
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';


function Productdetails() {
const{id}=useParams()
const details= Products.Products.find(item => item.id == id)
  return (
    <div>
    <div>
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden relative">
                <img src={details.photograph1} className="w-full" alt={details.name} />
            </div>
        </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <h1 className="text-xl font-semibold leading-7 text-gray-800 dark:text-white mt-2">{details.name}</h1>
                </div>
            </div>
            <div>
            <p className="xl:pr-48 text-base ml-8 lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">{details.description}</p>
            </div>
            <div className="ml-8 mt-6 flex-auto flex space-x-4">
                <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                    Buy now
                </button>
                <button className="h-10 px-6 font-semibold rounded-md border hover:bg-orange-50 border-slate-200 text-slate-900" type="button">
                    Add to Cart
                </button>
            </div>
                <div className=" ml-8 border-t border-b py-4 mt-7 border-gray-200">
                    <div data-menu className="flex justify-between items-center cursor-pointer">
                        <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Shipping and returns</p>
                    </div>
                </div>
            <div>
                <div className="ml-8 border-b py-4 border-gray-200">
                    <div data-menu className="flex justify-between items-center cursor-pointer">
                        <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Contact us</p>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Productdetails;

