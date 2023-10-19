"use client"

import Link from "next/link"
import { useSelector } from "react-redux"
import type { RootState } from "@/store/store"


export const Navbar = () => {
  const count = useSelector((state:RootState)=> state.counter.value)
  return (
    <>
    <header>
      <nav className="flex justify-between w-full p-4 bg-black">
        <div className="logo">
          <Link href="/" className="text-white">
            Arihant Jain
          </Link>
        </div>

        <div className="cart">
        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{count}</span>
        </div>
      </nav>
    </header>
    </>
  )
}
