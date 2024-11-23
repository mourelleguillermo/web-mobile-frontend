import { useAuth0 } from "@auth0/auth0-react";
import http from "../http-common";

function PostButton({ addPost }) {
    const user = useAuth0();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newPost = {
            user: user.user.name,
            title: document.getElementById('title').value,
            content: document.getElementById('content').value,
            likes: 0
        };

        try {
            await http.post('/posts', newPost);
            addPost(newPost);
            alert('Post created!');
            console.log('Post:', newPost.content);
            console.log('User:', newPost.user);
          } catch (error) {
            console.error('Error creating post:', error);
          }

        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
        document.getElementById('charCount').textContent = '0/240';
    };

    return (
        <div className='modal'>
            <p>Post</p>
            <p><textarea id="title" maxLength={50} /></p>
            <p><textarea id="content" maxLength={240} onInput={() => {
                document.getElementById('charCount').textContent = `${document.getElementById('content').value.length}/240`;
            }}></textarea></p>
            <p id="charCount">0/240</p>
            <button onClick={handleSubmit}>Post</button>
        </div>
    );
}

export default PostButton;