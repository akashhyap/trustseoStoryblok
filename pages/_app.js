import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import MainBlogIntro from "../components/MainBlogIntro";
import MenuLink from "../components/MenuLink";
import Richtextcontent from "../components/Richtextcontent";
import Image from "../components/Image";
import Config from "../components/Config";
import ImageTextSection from "../components/ImageTextSection";
import Layout from "../components/Layout";

const components = {
  menu_link: MenuLink,
  layout: Layout,
  // config: Config,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  image: Image,
  image_text_section: ImageTextSection,
  main_blog_intro: MainBlogIntro,
  richtextcontent: Richtextcontent,
  page: Page,
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
