import cn from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import headerNavLinks from '@/data/headerNavLinks'

import LanguageSwitch from '@/components/LanguageSwitch'
import Link from '@/components/Link'
import Logo from '@/components/Logo'
import ThemeSwitch from '@/components/ThemeSwitch'

import { MobileNav } from './MobileNav'

function NavItem({ href, text }) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link
      className={cn(
        'hidden rounded-lg py-1 px-2 font-medium transition-all hover:text-themeColor-500 dark:hover:text-themeColor-350 sm:inline-block sm:py-3 md:px-4',
        isActive
          ? 'text-themeColor-500 dark:text-themeColor-350'
          : 'text-typeface-primary dark:text-typeface-primary-dark'
      )}
      data-cy="nav-item"
      href={href}
    >
      <span className="relative">
        {text}
        {isActive && (
          <div className="absolute top-full mt-2 h-1 w-full rounded-2xl bg-themeColor-500 opacity-80 dark:bg-themeColor-350" />
        )}
      </span>
    </Link>
  )
}

function useIsScrollTop() {
  const [isTop, setIsTop] = useState(true)
  useEffect(() => {
    function onScroll() {
      setIsTop(window.scrollY <= 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return isTop
}

export const Navbar = () => {
  const isTop = useIsScrollTop()
  const [navShow, setNavShow] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <div
          onClick={() => {
            setOpen(false)
          }}
          aria-hidden="true"
          className="fixed inset-0 z-40 h-full w-full"
        ></div>
      )}
      <header
        className={cn(
          'sticky top-0 z-40 w-full flex-none lg:z-50',
          isTop
            ? 'dark:bg-transparent'
            : navShow
            ? 'bg-body dark:bg-body-dark'
            : 'bg-body/75  backdrop-blur dark:bg-[rgba(22,24,29,0.75)] '
        )}
      >
        <div className="relative mx-auto flex max-w-5xl items-center justify-between divide-x divide-border-primary py-2 px-4 dark:divide-border-primary-dark xl:px-0">
          <div className="flex items-center text-sm font-medium">
            <div className="sm:hidden">
              <Link href="/" aria-label={'小康'}>
                <Logo className={'ml-4 fill-brand'} size={30} />
              </Link>
            </div>
            <div className="hidden sm:block">
              {headerNavLinks.map((link, index) => (
                <NavItem key={index} href={link.href} text={link.title} />
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <ThemeSwitch />
            <LanguageSwitch open={open} setOpen={setOpen} />
            <MobileNav navShow={navShow} setNavShow={setNavShow} />
          </div>
        </div>
      </header>
    </>
  )
}