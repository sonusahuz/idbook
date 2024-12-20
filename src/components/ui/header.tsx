'use client';
import React, { useState } from 'react';
import { Button } from './button';
import { Drawer } from './drawer';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header className="flex items-center justify-between py-4">
        <div className="flex items-center justify-start gap-6">
          <div>
            <h1 className="text-4xl font-bold text-blue-700">Idbook</h1>
          </div>
          <nav className=" hidden md:block">
            <ul className="flex  text-gray-600 items-center justify-start gap-4">
              <li>Become a Pro</li>
              <li>Corporate Enquires</li>
              <li>27x7 Support</li>
            </ul>
          </nav>
        </div>
        <div className='flex items-center justify-start gap-5'>
          <Button className=" bg-blue-700 rounded-full lg:h-12 h-10 w-28">
            Sign Up
          </Button>
          {open ? (
            <X className="h-6 w-6 md:hidden" onClick={() => setOpen(false)} />
          ) : (
            <Menu className="h-6 w-6 md:hidden" onClick={() => setOpen(true)} />
          )}
        </div>
      </header>
      {open && (
        <Drawer
          isOpen={open}
          setIsOpen={setOpen}
          content={
            <>
              <ul className=" text-gray-600 flex flex-col gap-4">
                <li>Become a Pro</li>
                <li>Corporate Enquires</li>
                <li>27x7 Support</li>
              </ul>
            </>
          }
        />
      )}
    </div>
  );
};

export default Header;
