import React from "react"
import Link from "next/link"

function SidebarMenu() {
	return (
		<div className="bg-gray-800 text-white p-4 flex flex-col items-start">
			<div className="profile-picture-placeholder bg-gray-600 w-16 h-16 rounded-full mb-4"></div>
			<Link href="/" className="text-white hover:text-gray-400 mb-4">
				Home
			</Link>
			<div className="service-center-section mb-4">
				<div className="text-gray-400 mb-2">Service Center</div>
				<Link href="/service-center" className="text-white hover:text-gray-400">
					E-Service
				</Link>
			</div>
		</div>
	)
}

export default SidebarMenu
