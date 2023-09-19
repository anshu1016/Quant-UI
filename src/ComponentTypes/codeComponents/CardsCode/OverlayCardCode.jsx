import "./overlay.css";
export function OverlayCardCode() {
  return (
    <div className="ocard osocialMediaCard">
      <h4>Post Title</h4>
      <p>Some content of the post...</p>
      <img
        src="https://i.pinimg.com/564x/e2/f8/21/e2f821c9fbb3a8d23b2918ebeb8cd06f.jpg"
        alt="Post"
      />
      <div className="oactions">
        <div className="obuttons">
          {/* You can repurpose the buttons for some other actions or replace with icons */}
          <button>Follow</button>
          <button>More</button>
        </div>
        <div className="oicons">
          <span>🔗</span> {/* Share icon */}
          <span>❤️</span> {/* Like icon */}
          <span>💬</span> {/* Comment icon */}
        </div>
      </div>
    </div>
  );
}
