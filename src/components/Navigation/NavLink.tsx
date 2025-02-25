import React from 'react';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      href={href}
      className="text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition-colors"
    >
      {children}
    </motion.a>
  );
}

export function MobileNavLink({ href, children }: NavLinkProps) {
  return (
    <motion.a
      whileTap={{ scale: 0.95 }}
      href={href}
      className="block px-3 py-2 rounded-md text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition-colors"
    >
      {children}
    </motion.a>
  );
}