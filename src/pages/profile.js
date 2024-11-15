import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Profile() {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated ? (
            <div className="profile">
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <Link to="/">Home</Link>
            </div>
        ) : (
            <p>You are not logged in</p>
        )
    )
}