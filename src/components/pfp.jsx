import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const ProfilePicture = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <Link to="/profile">
                    <img src={user.picture} alt={user.name} style={{ width: "50px", height: "50px", borderRadius: "50%" }}/>
                </Link>
            </div>
        )
    )
}

export default ProfilePicture;