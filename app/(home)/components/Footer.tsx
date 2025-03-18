import Image from "next/image";
import Link from "next/link";
import { TextAnimate } from "./TextAnimate";

export default function Footer() {
    const navItems = [
        { name: "Company", href: "/company" },
        { name: "Science", href: "/science" },
        { name: "Product / Pipeline", href: "/pipeline" },
        { name: "Publications", href: "/publications" },
        { name: "Career", href: "/career" },
        { name: "Team", href: "/team" },
    ]

    return (
     
            <footer className="w-full p-4 sm:p-6 container mx-auto bg-background flex flex-col gap-6 sm:gap-10 items-center justify-center py-8 sm:py-14">
                {/* Main heading - responsive text size */}
                <TextAnimate type="swingDrop">
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-medium text-center">
                        Age less, Live more
                    </p>
                </TextAnimate>

                <div className="bg-foreground space-y-6 rounded-3xl p-6 sm:pt-10 md:pt-16 lg:pt-28 pb-10 lg:px-16 w-full">
                    {/* Newsletter and Address section */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-4 md:justify-between">
                        {/* Newsletter */}
                        <div className="space-y-2">
                            <p className="text-2xl sm:text-3xl md:text-4xl text-white">
                                Keep up with the latest
                            </p>
                            <p className="text-gray-500 text-sm sm:text-base">
                                Join newsletter to stay upto date on features and releases
                            </p>
                        </div>

                        {/* Address */}
                        <div className="md:text-right">
                            <h3 className="font-medium text-white text-xl sm:text-2xl mb-2">
                                CellScience Biotech Inc
                            </h3>
                            <p className="text-sm text-gray-500">
                                8 THE GREEN STE DOVER<br />
                                Delaware, United States<br />
                                PIN - 19901
                            </p>
                        </div>
                    </div>

                    {/* Logo and Navigation */}
                    <div className="rounded-2xl bg-white/10 p-4 sm:p-6 flex flex-col sm:flex-row gap-6 sm:gap-4 sm:justify-between">
                        {/* Logo */}
                        <Link href='/' className='flex items-center justify-center sm:justify-start'>
                            <Image 
                                src={'/CellScienceLogo.png'} 
                                width={250} 
                                height={50} 
                                alt='Cell science'
                                className="w-[200px] sm:w-[250px] h-auto"
                            />
                        </Link>

                        {/* Navigation Links */}
                        <div className="flex flex-wrap justify-center sm:flex-nowrap gap-4 sm:gap-6 items-center text-white text-sm sm:text-base">
                            {navItems.map((item, index) => (
                                <Link 
                                    href={item.href} 
                                    key={index}
                                    className="hover:text-gray-300 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* add a copyright aon left side and social icons on right side */}
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-600 font-helvetica">
                        © 2024 CellScience. All Right Reserved
                    </p>

                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <Link
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:opacity-80 transition-opacity"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </Link>

                        <Link
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:opacity-80 transition-opacity"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </Link>

                        <Link
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:opacity-80 transition-opacity"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </Link>

                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:opacity-80 transition-opacity"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </footer>
        
    );
}
