import { useState } from "react";
import style from "../components/card.module.css";
import initialPosts from "../components/posts";

export default function Card() {
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState(initialPosts);

  const publishedPosts = posts.filter((post) => post.published);

  function addPost(e) {
    e.preventDefault();

    const newTitle = title.trim();
    if (newTitle === '') return;

    const addedPost = {
      title: newTitle,
      image: 'https://picsum.photos/200/300?grayscale',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
      tags: [],
      published: true,
    };

    setPosts([...posts, addedPost]);
    setTitle('');
    console.log('Post aggiunto!');
  }

  return (
    <>
      <main className={style.background}>
        {/* FORM */}
        <div className={style.formContainer}>
          <form onSubmit={addPost} action="">
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Inserisci il titolo del post"
              className={style.newPost}
            />
            <input type="submit" value="Aggiungi" className={style.submitButton} />
          </form>
        </div>

        {/* CARD */}
        <div className={style.container}>
          {publishedPosts.length > 0
            ? publishedPosts.map((post) => (
                <div key={post.id} className={style.cardbody}>
                  <img src={post.image || '/path-to-default-image.jpg'} alt={post.title || 'Post'} />
                  <h3>
                    {post.title} {post.id}
                  </h3>
                  <h5 style={{ color: post.tags.includes("html") ? "red" : "blue" }}>
                    Tag: {post.tags.join("-")}
                  </h5>
                  <p>Contenuto: {post.content}</p>
                </div>
              ))
            : <p>Nessun post pubblicato.</p>}
        </div>
      </main>
    </>
  );
}
