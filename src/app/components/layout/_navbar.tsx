"use client";

import {
  Button,
  cn,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Active_Header from "../../lib/header/active_Header";
import React from "react";

export default function Navbar_() {
  const menuItems = Active_Header();
  const brand = menuItems.find((item) => item.brand);
  const header = menuItems.find((item) => item.header)?.header;
  const ctMe = menuItems.find((Contact) => Contact.contact)?.contact;

  const filteredMenuItems = menuItems.filter((item) => !item.brand);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={true}
      maxWidth="full"
      shouldHideOnScroll>
      <NavbarContent>
        <NavbarBrand>
          <Link>{brand?.brand}</Link>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Open" : "Close"}
          className="sm:hidden"
        />
      </NavbarContent>
      {/* <NavbarContent className="hidden sm:flex">
        {menuItems.map((rcm, index) => (
          <NavbarItem key={index}>
            <Link
              href={rcm.path}
              className={cn(
                rcm.isActive ? "text-blue-500 font-bold" : "text-black"
              )}>
              {rcm.header}
            </Link>
          </NavbarItem>
        ))}
        <p className="hover:cursor-pointer">{ctMe}</p>
      </NavbarContent> */}
      {/* 
      <NavbarMenu>
        {filteredMenuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              href={item.path}
              className={cn(
                item.isActive ? "text-blue-500 font-bold" : " text-black"
              )}>
              {item.header}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}
    </Navbar>
  );
}
