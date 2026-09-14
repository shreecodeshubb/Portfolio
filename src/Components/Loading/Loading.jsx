import loading from "../../assets/loading-gif.mp4"
import bgImage from "../../assets/hero-bg.jpg"
function Loading() {
  return (
    <div className="min-h-screen w-screen bg-amber-50 flex justify-center items-center "
    >

        <div className="h-[70vh] w-[60vw]"> <video src={loading}
        autoPlay
        muted
        playsInline></video> </div>
    </div>
  )
}

export default Loading