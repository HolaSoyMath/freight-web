'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar'
import { menuItems } from '@/components/layout/sidebar/menu-items'
import { NavMain } from '@/components/layout/sidebar/nav-main'
import { NavUser } from '@/components/layout/sidebar/nav-header'
import { NavHeader } from '@/components/layout/sidebar/nav-footer'
import { useSession } from 'next-auth/react'

export function AppSidebar() {
  const { data: userData } = useSession()

  return (
    <Sidebar collapsible="icon" className='border-none'>
      <SidebarHeader>
        <NavUser user={userData} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={menuItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavHeader />
      </SidebarFooter>
    </Sidebar>
  )
}
