"use client"

export function WaveBackgroundAlt() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <div
        className="absolute bottom-0 left-0 w-full h-[70%] bg-no-repeat bg-bottom bg-cover"
        style={{ backgroundImage: "url('/images/wave-bg.png')" }}
      />
    </div>
  )
}
