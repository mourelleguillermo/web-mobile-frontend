import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <article className="profile">
      {user?.picture && <img src={user.picture} alt={user?.name} />}
      <h2>{user?.name}</h2>
      <ul>
          {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]} </li>)}
      </ul>
    </article>
    );
};

export default Profile;