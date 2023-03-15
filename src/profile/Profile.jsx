import React from "react";
import PropTypes from "prop-types";

export const styleImage = { width: "350px", borderRadius: "20px" };
const Profile = (props) => {
  const handleName = () => {
    alert(`${props.fullName}`);
  };

  const styleName = { fontSize: "60px", fontWeight: "700", color: "#4B6F89" };
  const styleBtn = {
    border: "1px solid #4B6F89",
    padding: "5px",
    color: "#4B6F89",
    fontSize: "20px",
  };

  return (
    <div>
      {props.children}
      <h1 style={styleName}>{props.fullName}</h1>
      <h3>{props.bio}</h3>
      <h3>{props.profession}</h3>
      <button style={styleBtn} onClick={handleName}>
        click me
      </button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "Anonymous",
  bio: "I won't tell",
  profession: "It's a secret!",
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default Profile;
