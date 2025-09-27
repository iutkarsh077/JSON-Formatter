"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { SidebarItems } from "@/constants/NavbarItems";
import { Hamburger } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();
  const { open, setOpen } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className="bg-gray-900 text-gray-100 border-r border-gray-800"
    >
      <SidebarHeader className={`${open === true ? "p-4" : "py-4"} border-b border-gray-800`}>
        <div className="flex justify-between">
          <h1 className={`text-xl font-bold tracking-wide ${open === false && "hidden"}`}>DevTools</h1>
          <Hamburger className="hover:cursor-pointer" onClick={()=>setOpen(!open)}  />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroupContent className="h-full">
          <SidebarGroupLabel className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Application
          </SidebarGroupLabel>

          <SidebarMenu className="mt-2 flex flex-col justify-between space-y-1 min-h-[30%]">
            {SidebarItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className="flex  gap-x-3  rounded-lg px-4 py-2 text-gray-300 transition hover:bg-gray-800 hover:text-white"
                >
                  <Link
                    href={item.url}
                    className={`py-4 ${pathname === item.url && "bg-gray-800"}`}
                  >
                    <item.icon className="h-8 w-8 text-gray-400" />
                    <span className="text-lg font-medium">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2025 DevTools</p>
      </SidebarFooter>
    </Sidebar>
  );
}
