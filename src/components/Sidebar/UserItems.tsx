import { Book, BookCheck, CalendarCheck2, Frame, LayoutDashboard, NotebookPen } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const sidebarItems = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: <LayoutDashboard />
  },
  {
    name: 'Tests',
    link: '/dashboard/tests',
    icon: <NotebookPen />
  },
  {
    name: 'Free eBooks',
    link: '/dashboard/ebooks',
    icon: <Frame />
  },
  {
    name: 'Exams',
    link: '/dashboard/exams',
    icon: <BookCheck />
  },
  {
    name: 'Exam Tracker',
    link: '/dashboard/examtracker',
    icon: <CalendarCheck2 />
  },
  {
    name: 'My Subscriptions',
    link: '/dashboard/subscription',
    icon: <Book />
  }
]

const UserItems = () => {
  return (
    <>
      {sidebarItems.map((item, index) => (
        <Link href={item.link} key={index} className='flex gap-4 items-center'>
          {item.icon}
          {item.name}
        </Link>
      ))}
    </>
  )
}

export default UserItems
