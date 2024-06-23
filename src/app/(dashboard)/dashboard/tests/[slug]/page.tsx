import Link from 'next/link'
import React from 'react'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <p>
        <Link href={'/mocktest'} target='_blank'>
          Start Test
        </Link>
      </p>
    </>
  )
}
