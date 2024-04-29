import React, { useState } from "react";
import "./profile.css";
import pic from "../img/rahad.jpg";
import Login from "../Login/login";
function UserProfile() {
  const user = {
    username: "Smk Rahad",
    profilePicture: { pic },
  };
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };
  const [isOpen, trackIfopen] = useState(0);
  const [pg,setpg] = useState(0);

  return (
   <Profile/>
  );

  function Profile(){
    return(
      <>
     <div className={`${isOpen===1 ? 'backdrop':''}`}>
     </div>
      <div className={`${isOpen===1 ? 'popUpBox':'closed'}`}>
          <Popup/>
      </div>
      <div className="user-profile">
        <div className="Top">
          <div className="user-info">
            <img src={pic} alt="Profile Picture" className="profile-picture" />
            <div className="user-details">
              <h2>{user.username}</h2>
            </div>
          </div>
        </div>
        <div>
          <button className="cngbutton" onClick={() => trackIfopen(1)}>
            Change profile info
          </button>

        </div>
        <div>
          <button className="Logoutbutton" onClick={() => setpg(1)}>
            <a className="ancor" href="../Login/login">Logout</a>
          </button>
          </div>
      </div>
    </>
    );
  }


  function Popup(){
    return(
      <>
       <button className="closePopup" onClick={()=>trackIfopen(0)}>X</button>
        <form onSubmit={handleSubmit} style={{padding:'1.5rem', borderRadius:'1rem'}} >
          <input
            type="text"
            id="email"
            value={Name}
            placeholder="Enter Name"
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <button type="submit">Change</button>
        </form>
      </>
    );

  }
}
export default UserProfile;
