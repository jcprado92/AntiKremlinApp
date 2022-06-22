import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import ErrorMessage from "./common/ErrorMessage";

const ShowVideo = ({ videos }) => {
  let { id } = useParams();
  const navigate = useNavigate();

  // if (!videos) return;
  // <div>Taking a minute to load...</div>;


  const selectedVideo = videos.find((video) => video.id.videoId === id);

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState([]);
  const [name, setName] = useState([]);

  const commentSubmit = (event) => {
    event.preventDefault();
    if (name !== "" && comment !== "") {
      setComments([...comments, { name: `${name}`, comment: `${comment}` }]);
    }
    setComment("");
    setName("");
  };

  const displayComment = comments.map((comm, i) => {
    return (
      <div key={i}>
        <h3>{comm.name}</h3>
        <p>{comm.comment}</p>
      </div>
    );
  });

  const handleClick = () => {
    navigate("/videos/:id");
  };


  return (
    <div>
      <div className="show-video">
        <YouTube videoId={selectedVideo.id.videoId} />
        <h4>{selectedVideo.snippet.title}</h4>
        <p>{selectedVideo.snippet.description}</p>
      </div>
      <aside><button onClick={handleClick}>Take Me Back</button></aside>
      <br></br>
      <h3>Comments</h3>
      <div className="comment-div">
        <form className="form" onSubmit={commentSubmit}>
          <label>Name</label>
          <input 
          type="text"
          placeholder="Name...."
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required>

          </input>
          <br></br>
          <label>
          Comments
          <input 
          type="text"
          placeholder="Comment...."
          name="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          required></input>
          </label>
          <input type="submit" className="comment-button" />
          <br></br>
          <ul className="ul-comment">
            <li>
              <p>{displayComment}</p>
            </li>
          </ul>



        </form>
      </div>
    </div>
  );
};

export default ShowVideo;

//add another fetch/ request for a single video

//do not iterate through videos

//if we want a single vide but no data from videos, just rended the specific id from video
