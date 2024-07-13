'use client';

import { headerLinks } from '../../constants/index'
import Link  from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { UrlObject } from 'url';

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className='md:flex-between flex w-full flex-col items-start gap-10 md:flex-row'>
      {headerLinks.map((link) => {
        const isActive = pathname == link.route
        return (
          <li key={link.route}
          className={`${ isActive && 'text-primary-500'} flex-center p-medium-16 whitespace-nowrap`}>
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems