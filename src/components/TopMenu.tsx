import React from "react"
import Link from "next/link"

function TopMenu() {
	return (
		<div className="bg-gray-800 text-white p-4 flex justify-between items-center">
			<div className="logo">Logo</div>
			<div className="menu">
				<Link href="/" className="text-white hover:text-gray-400">
					Home
				</Link>
			</div>
		</div>
	)
}

export default TopMenu
