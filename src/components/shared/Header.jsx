import React from 'react'
import { HiOutlineSearch, HiOutlineLogout } from 'react-icons/hi'
import { FcBullish } from 'react-icons/fc'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants'
import { FaBrain } from "react-icons/fa";

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Header() {
	const { pathname } = useLocation()

	return (
		<div className="bg-neutral-900 h-20 w-full flex items-center justify-between px-4 border-b border-gray-200">
			{/* Left side: Logo */}
			<div className="flex items-center gap-2">
				<FaBrain fontSize={30} className='text-green-700'/>
				<span className="text-neutral-200 text-lg">HackBattle</span>
			</div>

			{/* Right side: Navigation links */}
			<div className="flex gap-4 ml-auto">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<Link
						key={link.key}
						to={link.path}
						className={classNames(
							pathname === link.path ? 'bg-green-700 text-white' : 'text-neutral-400 hover:text-green-500',
							'flex items-center gap-2 px-3 py-2 text-base rounded-sm'
						)}
					>
						<span className="text-xl">{link.icon}</span>
						{link.label}
					</Link>
				))}
			</div>
		</div>
	)
}
