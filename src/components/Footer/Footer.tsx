import React from 'react'
const currentYear = new Date().getFullYear()
const data = {
  copyrightText: `Copyright © ${currentYear} | Design and Developed By &nbsp;RB`,
  socialIconsHeading: 'Follow Us 📣',
  socialIcons: [
    {
      icon: 'twitter',
      link: 'https://x.com/mockyardx'
    },
    {
      icon: 'YT',
      link: 'https://www.youtube.com/channel/UCtFPXXS78ay4lzFBj2czXxQ'
    },
    {
      icon: 'Telegram',
      link: 'https://t.me/mockyard'
    }
  ]
}

function Footer() {
  const { copyrightText, socialIcons, socialIconsHeading } = data

  return (
    <>
      <footer className='text-slate-500 text-center mt-16 mb-10'>
        <div className='my-4 text-center'>
          <ul className='flex flex-wrap lg:flex justify-center '>
            <li className='px-2'> {socialIconsHeading} </li>
            {socialIcons.map((social, index) => (
              <li key={index} className='px-2 capitalize border-1  hover:border-b-white'>
                <a target='_blank' className='' href={social.link}>
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className=''>
          <p
            className=''
            dangerouslySetInnerHTML={{
              __html: copyrightText
            }}></p>
        </div>
      </footer>
    </>
  )
}

export default Footer
