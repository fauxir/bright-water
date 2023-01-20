import "./MovieSectionLanding.sass";

export default function MovieSectionLanding() {
  return (
    <div className="video_wrapper">
      <video className="video" autoPlay loop>
        <source src="./BW_clip.webm" type="video/webm" />
        <source src="./BW_clip.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video_text">
        <p className="video_text_title">The Water Bottle</p>
        <h1 className="video_text_p">Charm redefined</h1>
      </div>
    </div>
  );
}
