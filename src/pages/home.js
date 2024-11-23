import React, { useState, useEffect } from "react";
import LoginButton from "../components/login";
import LogoutButton from '../components/logout';
import ProfilePicture from '../components/pfp';
import PostButton from '../components/postbutton';
import { useAuth0 } from '@auth0/auth0-react';
import { IoIosHeart } from "react-icons/io";
import Popup from "reactjs-popup";
import axios from "axios";

export default function Home() {
    const { isAuthenticated } = useAuth0();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
		  try {
			const response = await axios.get('http://localhost:8080/api/posts');
			setPosts(response.data);
		  } catch (error) {
			console.error('Error fetching posts:', error);
		  }
		};
	
		if (isAuthenticated) {
		  fetchPosts();
		}
	  }, [isAuthenticated]);

	const addPost = (newPost) => {
		setPosts([newPost, ...posts]);
	};

	const handleLike = (postId) => {
		const updatedPosts = posts.map((post) => {
			if (post.id === postId) {
				const isAlreadyLiked = post.liked;
      			return { ...post, likes: isAlreadyLiked ? post.likes - 1 : post.likes + 1, liked: !isAlreadyLiked };
			}

			return post;
		});
		setPosts(updatedPosts);
	};

	return (
    	<div className="App">
    		<header className="App-header">
        	UCUddit
			<div className="buttons">
                {!isAuthenticated && <LoginButton />}
				{isAuthenticated && <ProfilePicture />}
				{isAuthenticated && <LogoutButton />}
        		</div>
			</header>
        	<body className='App-body'>
				{isAuthenticated ? <PostButton addPost={addPost} /> : <p>Log in to see and create posts!</p>}
			</body>
			<div className="posts">
				{posts.map(post => (
					<Popup trigger={<button className="open-post">{post.title} - {post.id}</button>} modal nested>
						{close => (
							<div className="post post-style">
								<h2>{post.title}</h2>
								<h5>{post.user}</h5>
								<p>{post.content}</p>
								<button onClick={() => handleLike(post.id)} disabled={!isAuthenticated} id="likebutton">
									<IoIosHeart color={post.liked ? "red" : "white"} size={30} />{post.likes}
								</button>
								<button onClick={close}>Close</button>
							</div>
						)}
					</Popup>
				))}
			</div>
	</div>
  );
}