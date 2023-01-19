import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import MainBlogIntro from "../components/MainBlogIntro";
import Richtextcontent from "../components/Richtextcontent";
import Image from "../components/Image";
import Config from "../components/Config";
import Layout from "../components/Layout";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  image: Image,
  main_blog_intro: MainBlogIntro,
  richtextcontent: Richtextcontent,
  page: Page,
  config: Config,
};

storyblokInit({
  accessToken: "VnYr9pNSEZ29T8vF6dRMcwtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout story={pageProps.config}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
