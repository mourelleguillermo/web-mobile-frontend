import { useAuth0 } from "@auth0/auth0-react";

function PostButton({ addPost }) {
    const user = useAuth0();

    const handleSubmit = (event) => {
        event.preventDefault();

        const newPost = {
            id: Math.random(),
            user: user.user.name,
            title: document.getElementById('title').value,
            content: document.getElementById('content').value,
            likes: 0
        };

        if (/^\s*$/.test(document.getElementById('content').value)) {
            alert("Post cannot be empty");
            return;
        } else {
            alert('Post created!');
            console.log("Post: " + document.getElementById('content').value);
            console.log("User: " + user.user.name);
            addPost(newPost);
        } 
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