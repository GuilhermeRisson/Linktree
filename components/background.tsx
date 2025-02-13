export default function Background() {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 via-transparent to-cyan-500/30 animate-gradient" />
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>
    </>
  )
}

