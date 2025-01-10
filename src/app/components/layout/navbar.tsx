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

interface Props {
  color: string;
}

export default function NavbarComponents({ color }: Props) {
  const menuItems = Active_Header();
  const brand = menuItems.find((item) => item.brand);
  const filteredMenuItems = menuItems.filter((item) => !item.brand);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isBlurred={false}
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      position="static">
      <NavbarContent className="sm:hidden flex">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div className="text-1xl font-bold sm:hidden xsm:flex">
            {brand?.brand}
          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.slice(0, 4).map((items, i) => (
          <NavbarItem
            key={i}
            className={items.isActive ? "text-blue-500 font-bold" : ""}>
            <Link
              color={items.isActive ? "primary" : "foreground"}
              className="w-full"
              href={items.path}
              size="lg">
              {items.header}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((items, i) => (
          <NavbarBrand key={i}>
            <div className="text-1xl font-bold">{items.brand}</div>
          </NavbarBrand>
        ))}
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.slice(4, 8).map((items, i) =>
          items.header === "Login" ? (
            <Button variant="bordered" color="primary" key={items.header}>
              {items.header}
            </Button>
          ) : (
            <NavbarItem
              className={items.isActive ? "text-blue-500 font-bold" : ""}
              key={i}>
              <Link
                color={items.isActive ? "primary" : "foreground"}
                className="w-full"
                href={items.path}
                size="lg">
                {items.header}
              </Link>
            </NavbarItem>
          )
        )}
      </NavbarContent>
      <NavbarMenu className=" gap-5 bg-foreground-900 text-white">
        {filteredMenuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            {item.header === "Login" ? (
              <Button variant="bordered" color="primary" key={item.header}>
                {item.header}
              </Button>
            ) : (
              <Link
                color={item.isActive ? "primary" : "foreground"}
                className="w-full "
                href={item.path}
                size="lg">
                {item.header}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
