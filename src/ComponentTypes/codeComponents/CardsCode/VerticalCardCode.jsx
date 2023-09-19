import "./vCards.css";
export function VerticalCardCode() {
  return (
    <div className="verticalCardContainer">
      {/* Social Media Card */}
      <div className="card socialMediaCard">
        <h4>Post Title</h4>
        <p>Some content of the post...</p>
        <img
          src="https://i.pinimg.com/564x/e2/f8/21/e2f821c9fbb3a8d23b2918ebeb8cd06f.jpg"
          alt="Post"
        />
        <div className="actions">
          <div className="buttons">
            {/* You can repurpose the buttons for some other actions or replace with icons */}
            <button>Follow</button>
            <button>More</button>
          </div>
          <div className="icons">
            <span>🔗</span> {/* Share icon */}
            <span>❤️</span> {/* Like icon */}
            <span>💬</span> {/* Comment icon */}
          </div>
        </div>
      </div>

      {/* Visiting Card */}
      <div className="card visitingCard">
        <h4>John Doe</h4>
        <p>Software Developer</p>
        <img
          src="https://yt3.googleusercontent.com/VvYTh6SGpzX4pvdDeNTq41uDZKpSxefUqvVoLzu4YLFtB5xzSWxp7iOiGtZmkS9bVgF83jQ_=s900-c-k-c0x00ffffff-no-rj"
          alt="Company Logo"
        />
        <p>Email: john@example.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Website: www.johndoe.com</p>
      </div>
    </div>
  );
}
