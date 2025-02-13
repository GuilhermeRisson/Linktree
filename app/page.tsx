import { Github, Instagram, Globe,Linkedin } from "lucide-react"
import Header from "@/components/header"
import LinkButton from "@/components/link-button"
import Footer from "@/components/footer"
import Background from "@/components/background"
import imageProfile from "../public/img/1699388239222.jpeg"


export default function Page() {
  const links = [
    {
      title: "Portfolio",
      href: "https://guilhermerisson.vercel.app",
      description: "Confira meus projetos e trabalhos",
      icon: <Globe className="h-5 w-5" />,
    },
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/in/guilherme-risson/",
      description: "",
      icon: <Linkedin  className="h-5 w-5" />,
    },
    // {
    //   title: "Twitch",
    //   href: "https://twitch.tv",
    //   description: "Lives de programação",
    //   icon: <Twitch className="h-5 w-5" />,
    // },
    // {
    //   title: "Newsletter",
    //   href: "https://example.com/newsletter",
    //   description: "Dicas semanais de desenvolvimento",
    //   icon: <Mail className="h-5 w-5" />,
    // },
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/GuilhermeRisson",
      label: "GitHub",
    },
    // {
    //   icon: <Twitter className="h-5 w-5" />,
    //   href: "https://twitter.com",
    //   label: "Twitter",
    // },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/guilhermerisson/",
      label: "Instagram",
    },
  ]

  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 py-8 md:py-12 overflow-hidden">
      <Background />
      <div className="container relative flex max-w-[600px] flex-col items-center gap-8 z-10">
        <Header name="Guilherme Risson" bio="Full-stack developer" imageUrl={imageProfile} />
        <section className="w-full space-y-4">
          {links.map((link) => (
            <LinkButton
              key={link.href}
              href={link.href}
              title={link.title}
              description={link.description}
              icon={link.icon}
            />
          ))}
        </section>
        <Footer socialLinks={socialLinks} />
      </div>
    </main>
  )
}

