import React, { MouseEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface NavLinkProps {
  href: string
  children: JSX.Element | string
  exact?: boolean
  className?: string
}

const NavLink = ({ href, children, exact, ...props }: NavLinkProps) => {
  const navigate = useNavigate()
  const location = useLocation()
  const isActive = exact ? location.pathname === href : location.pathname.startsWith(href)

  if (isActive) {
    props.className += ' active'
  }

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    navigate(href)
  }

  return (
    <a {...props} href={href} onClick={handleClick}>
      {children}
    </a>
  )
}

export default NavLink
