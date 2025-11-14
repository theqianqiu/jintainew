export function WaveBackgroundImg() {
  return (
    <div
      className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none"
      style={{
        height: "100%",
        backgroundImage: "url('/images/wave-bg-clear.png')",
        backgroundSize: "100%",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    />
  )
}
