import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function MobileNavContext({ toggleDropdown, servicesItems, activeDropdown }) {
    return (
        <div className="pt-2 w-full pb-3 space-y-1 px-2">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-200/10 transition-colors duration-200">Home</Link>

            <div>
                <button
                    onClick={() => toggleDropdown('mobileServices')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-200/10 transition-colors duration-200"
                >
                    Services
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'mobileServices' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'mobileServices' && (
                    <div className="pl-6 py-2 space-y-2">
                        {servicesItems.map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                className="flex items-center px-3 py-2 text-sm rounded-md text-gray-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-neutext-neutral-50 dark:hover:bg-gray-200/10 transition-colors duration-200"
                            >
                                <span className="mr-2 text-purple-500">{item.icon}</span>
                                <div>
                                    <div className="font-medium">{item.title}</div>
                                    <div className="text-xs text-neutral-500 dark:text-neutral-500">{item.description}</div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>

            <Link href="/aboutus" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-200/10 transition-colors duration-200">About</Link>
            <Link href="/contactus" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-200/10 transition-colors duration-200">Contact</Link>

            <button className="mt-2 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200">
                Get Started
            </button>
        </div>
    )
}

export default MobileNavContext