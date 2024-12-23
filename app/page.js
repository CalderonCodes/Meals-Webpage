import Link from "next/link";
import classes from './page.module.css'
import ImageSlideshow from "./components/images/slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow/>
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Every bite has a story</h1>
            <p>Taste the best food all over the world</p>
          </div>

          <div className={classes.cta}>
              <Link href="/community">Join the community</Link>
              <Link href="/meals">Explore</Link>

          </div>
        </div>
      </header>
      <main>
      <section className={classes.section}>
          <h2>How it works</h2>
          <p>
           Epic Bites is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            Epic Bites is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Epic Bites?</h2>
          <p>
            Epic Bites is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            Epic Bites is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
      
    </>
  );
}
