import Image, { StaticImageData } from "next/image"



interface HeaderProps {
  name: string
  bio: string
  imageUrl: StaticImageData
}

export default function Header({ name, bio, imageUrl }: HeaderProps) {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="relative h-24 w-24 overflow-hidden rounded-full">
          <Image src={imageUrl} alt={name} fill className="object-cover" priority />
        </div>
      </div>
      <div className="space-y-1">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          {name}
        </h1>
        <p className="text-zinc-400">{bio}</p>
      </div>
    </header>
  )
}

