'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
}

export function BlogCard({
  slug,
  title,
  description,
  date,
  readingTime,
  tags,
}: BlogCardProps) {
  return (
    <motion.article
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 h-full flex flex-col"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
        {description}
      </p>
      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {date}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {readingTime}
        </div>
      </div>
      <div className="flex gap-2 mb-4 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/blog/${slug}`}
        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
      >
        Read More <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.article>
  );
}
