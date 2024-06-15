const currentYear = new Date().getFullYear();
const data = {
    sitename: "MOCKYARD",
    sitetagline: "Where Champions are Tested ✨ 🔥",
    siteurl: "/",
    sitelogo: "",
    title: "Coming Soon!",
    description: "We&apos;re currently working 👨‍💻 hard to bring you something great, and we can&apos;t wait to share it with you 📅. Our team is putting the finishing touches on a new project 🚀 that we think you&apos;ll love 😍.",
    newsletterheading: "Stay tuned for our live updates!",
    copyrightText: `Copyright © ${currentYear} | Design and Developed By &nbsp;RB`,
    socialIconsHeading: "Follow Us 📣",
    hideSubscribeForm: false, // make true to disable subscription form 
    socialIcons: [
    
        {
            icon: "twitter",
            link: "https://x.com/mockyardx",
        },
        {
            icon: "YT",
            link: "https://www.youtube.com/channel/UCtFPXXS78ay4lzFBj2czXxQ",
        },
    ],
    hide :{
        subscribeForm: false, // make true to disable subscription form         
        header: false,
        content: false,
        footer: false,
    }
}

export default data;
