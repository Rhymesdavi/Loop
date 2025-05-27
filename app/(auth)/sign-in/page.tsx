import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            width={32}
            height={32}
            alt="logo"
          />
          <h1>Loop</h1>
        </Link>

        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src={"/assets/icons/star.svg"}
                  width={20}
                  height={20}
                  alt="star"
                  key={index}
                />
              ))}
            </figure>
            <p>
              Loop makes screen recording easy.From quick to full presentations,
              it&apos;s fast, smooth, and shareable in seconds
            </p>

            <article>
              <Image
                src={"/assets/images/jason.png"}
                width={64}
                height={64}
                alt="jason"
                className="rounded-full"
              />
              <div>
                <h2>Jason Rivera</h2>
                <p>Product Designer, NovaByte</p>
              </div>
            </article>
          </section>
        </div>
        <p>©️ Loop {new Date().getFullYear()}</p>
      </aside>

      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              width={40}
              height={40}
              alt="logo"
            />
            <h1>Loop</h1>
          </Link>
          <p>
            Create and share your very first <span>Loop Video</span> in no time!
          </p>
          <button>
            <Image
              src={"/assets/icons/google.svg"}
              width={22}
              height={22}
              alt="google"
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
};

export default Page;
