import style from "../components/card.module.css";
import posts from "../components/posts";

export default function Card() {
  const publishedPosts = posts.filter((post) => post.published);

  return (
    <>
      <main className={style.background}>

        {/* FORM */}
        <div className={style.formContainer}>
          <form action="">
            <input type="text" placeholder="Inserisci il titolo del post" className={style.newPost}/>
            <input type="submit" className={style.submitButton} />
          </form>
        </div>

        {/* CARD */}
        <div className={style.container}>
          {publishedPosts.length > 0
            ? publishedPosts.map((post) => (
                <div key={post.id} className={style.cardbody}>
                  <img src={post.image} alt="" />
                  <h3>
                    {post.title} {post.id}
                  </h3>
                  <h5
                    style={{
                      color: post.tags.includes("html") ? "red" : "blue",
                    }}
                  >
                    Tag: {post.tags.join("-")}
                  </h5>
                  <p>Contenuto: {post.content}</p>
                </div>
              ))
            : ""}
        </div>
      </main>
    </>
  );
}
