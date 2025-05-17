'use client'

import { Session } from 'next-auth'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar'
import { ThemeToggle } from '../theme-toggle'

export function NavUser({ user }: { user: Session | null }) {
  const { open } = useSidebar()

  const getUserInitials = (name: string | null | undefined) => {
    if (!name) return 'NM'
    const initials = name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
    return initials.slice(0, 2)
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        {open ? (
          <SidebarMenuButton
            size="lg"
            className="bg-transparent hover:bg-transparent cursor-default outline-none teste-de-classe"
          >
            <Avatar className="h-8 w-8 rounded-full">
              <AvatarFallback className="rounded-lg">
                {getUserInitials(user?.user?.name)}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                {user?.user?.name ?? 'Natalia Manosso'}
              </span>
            </div>
            <SidebarTrigger />
            <ThemeToggle />
          </SidebarMenuButton>
        ) : (
          <SidebarTrigger />
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
