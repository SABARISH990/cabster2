import "../styles/Loader.css";
import loaderVideo from "../assets/loadervideo.mp4";

export default function Loader({ onFinish }) {
  return (
    <div className="loader">
      <video
        autoPlay
        muted
        playsInline
        onEnded={onFinish}
        className="loader-video"
      >
        <source src={loaderVideo} type="video/mp4" />
      </video>
    </div>
  );
}