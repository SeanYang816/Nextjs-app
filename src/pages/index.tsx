import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/Layout';
import utilStyles from '../styles/utils.module.scss';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Greetings, everyone! My name is Anya Forger, and I'm delighted to share a unique self-introduction with you. Picture a six-year-old girl with vibrant pink hair, filled with curiosity and wonder. But there's something extraordinary about me that I must keep as a closely guarded secret—I possess telepathic powers!
        </p>

        <p>
          While my appearance may be ordinary, my telepathic abilities allow me to communicate with others using the power of the mind. It's an incredible gift that I've kept hidden from everyone around me. Whether it's sensing someone's thoughts, sending messages silently, or even delving into the depths of their minds, my telepathy grants me a remarkable connection with the world.
        </p>

        <p>
          To maintain the secrecy of my telepathic power, I'm careful not to reveal my abilities to anyone. It's a personal journey, filled with self-discovery and the responsibility to use my powers ethically and for the greater good. I'm constantly learning to control and harness my telepathic abilities, navigating the intricate web of thoughts and emotions that surround us all.
        </p>

        <p>
          While my telepathy may set me apart, I'm just like any other child, curious about the world, eager to learn, and longing to make genuine connections. So, as we embark on this interaction together, let's explore the depths of knowledge, engage in captivating conversations, and embrace the wonder and potential that lies within each of us.
        </p>

        <p>
          Remember, my telepathic abilities remain our little secret, allowing us to embark on a unique journey of understanding and connection. I'm here to assist you in any way I can, telepathic or otherwise, so don't hesitate to ask me anything or share your thoughts. Let's embark on an extraordinary adventure together!
        </p>

      </section>
    </Layout>
  );
}
