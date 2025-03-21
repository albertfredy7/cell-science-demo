"use client"

import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { name: "Company", href: "/company" },
  { name: "Science", href: "/science" },
  { name: "Product / Pipeline", href: "/pipeline" },
  { name: "Publications", href: "/publications" },
  { name: "Career", href: "/career" },
  { name: "Team", href: "/team" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()

  return (
    <header id='top' className='bg-white  lg:bg-transparent z-50 fixed  w-full'>
      <div className='top-0 w-full bg-white/10  backdrop-blur-md z-50 xl:max-w-6xl 2xl:max-w-7xl mx-auto'>
        <div className='mx-auto flex h-16 items-center justify-between px-4'>
          <Link href='/' className='flex items-center space-x-2'>
            <Image src={'/CellScienceLogo.png'} width={250} height={50} alt='Cell science' />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex  lg:space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link href={item.href} className={`inline-flex items-center text-base font-normal py-2 ${pathname === item.href ? 'underline text-black' : 'text-black'}`}>
                  {item.name}
                </Link>
              </div>
            ))}
            {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 ${pathname === '/contact' ? 'underline' : ''}`}
            >
              Contact
            </Link>
          </div>
          </nav>

          {/* Mobile Navigation */}
          <div className='lg:hidden'>
            {isMenuOpen ? (
              <button
                onClick={() => setIsMenuOpen(false)}
                className='text-gray-600 hover:text-black'
                aria-label='Close menu'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => setIsMenuOpen(true)}
                className='text-gray-600 hover:text-black'
                aria-label='Toggle menu'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: '100%', opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 40,
                duration: 0.3,
              }}
              className='lg:hidden fixed h-screen top-16 overflow-hidden left-0 right-0 bg-white z-40 shadow-sm'
            >
              <nav className='flex flex-col  space-y-4  py-2'>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-md px-6 font-normal transition-colors border-b hover:text-black `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href='/contact'
                  className={`text-md font-medium px-6 transition-colors hover:text-black ${pathname === '/contact' ? 'underline text-black' : 'text-gray-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button >Contact</Button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
