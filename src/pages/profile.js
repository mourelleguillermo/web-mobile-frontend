import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Profile() {

    const [posts, setPosts] = useState([
		{
			id: 1,
			user: "admin",
			title: "My first post on this platform!",
			content: "Test post 1",
			likes: 0,
			liked: false
		},
		{
			id: 2,
			user: "admin",
			title: "My second post on this platform!",
			content: "Test post 2",
			likes: 5,
			liked: false
		},
		{
			id: 3,
			user: "admin",
			title: "Test post 3",
			content: "Occaecat cillum pariatur esse nisi irure dolor do voluptate do tempor. Laborum deserunt elit tempor dolor sunt. Sunt proident labore mollit labore sint id eu labore officia cillum deserunt aute ea.",
			likes: 2147483647,
			liked: false
		},
        {
            id: 4,
            user: "wickedChara",
            title: "seiubfiouri",
            content: "hehehehehehehehehe :3",
            likes: 0,
            liked: false
        }
	]);

    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated ? (
            <div className="profile">
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>

                <h3>Posts</h3>
                {posts.map(post => (
                    (post.user === user.name) && <div key={post.id} className="post post-style">
                        <h4>{post.title}</h4>
                        <p>{post.content}</p>
                        <p>{post.likes} likes</p>
                    </div>
                ))}
                <Link to="/">Home</Link>
            </div>
        ) : (
            <div className="profile">
                <p>You are not logged in</p>
                <Link to="/">Go Home</Link>
            </div>
        )
    )
}