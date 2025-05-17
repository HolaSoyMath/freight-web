'use client'

import * as React from 'react'
import { LogOut } from 'lucide-react'

import { SidebarMenuButton, useSidebar } from '@/components/ui/sidebar'

export function NavHeader() {
  const { open } = useSidebar()

  return (
    <div className="flex gap-2 justify-between items-center w-full">
      {open ? (
        <>
          <SidebarMenuButton>
            <LogOut className="icon-size mr-2" />
            Log out
          </SidebarMenuButton>
        </>
      ) : (
        <SidebarMenuButton>
          <LogOut className="icon-size mr-2" />
        </SidebarMenuButton>
      )}
    </div>
  )
}
