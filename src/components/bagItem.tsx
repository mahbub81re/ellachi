"use client"
import Image from 'next/image'
import React, { useState } from 'react'

export default function BagItem() {

    const [itemnumber, setItemnumber] =useState(0);
  return (
      <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <Image
                      alt="Neil image"
                      height="32"
                      src="/products/1.png"
                      width="32"
                      className="rounded-full"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Apple</p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">{itemnumber}*300={itemnumber*300}</p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                     <div className="flex flex-row justify-center">
                        <button disabled={itemnumber<1} className="w-8 h-8 bg-lime-500" onClick={()=>setItemnumber(itemnumber-1)}>-</button>
                        <input className="w-10 h-8 " defaultValue={itemnumber} type="number" name="count"></input>
                        <button disabled={itemnumber>5} className="w-8 h-8 bg-lime-500" onClick={()=>setItemnumber(itemnumber+1)}>+</button>
                     </div>
                  </div>
                </div>
              </li>
  )
}
