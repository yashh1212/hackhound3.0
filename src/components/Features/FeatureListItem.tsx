import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface FeatureListItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureListItem({ icon, title, description, delay = 0 }: FeatureListItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
      className="flex items-start space-x-4 group cursor-pointer"
    >
      <div className="glass p-3 rounded-lg group-hover:border-indigo-500/50 transition-all">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1 flex items-center">
          {title}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="w-4 h-4 ml-1 text-indigo-500" />
          </motion.div>
        </h3>
        <p className="text-slate-600 dark:text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}