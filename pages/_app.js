import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Articles from "../components/Articles";
import AllArticles from "../components/AllArticles";
import Teaser from "../components/Teaser";
import MainBlogIntro from "../components/MainBlogIntro";
import MegaMenu from "../components/MegaMenu";
import Submenu from "../components/Submenu";
import Submenucontent from "../components/Submenucontent";
// import MenuLink from "../components/MenuLink";
// import SubmenuLink from "../components/SubmenuLink";
import Richtextcontent from "../components/Richtextcontent";
import Image from "../components/Image";
import Form from "../components/Form";
// import Config from "../components/Config";
import ImageTextSection from "../components/ImageTextSection";
import Layout from "../components/Layout";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 

const components = {
  MegaMenu: MegaMenu,
  Submenu: Submenu,
  submenucontent: Submenucontent,
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
  articles: Articles,
  "all-articles": AllArticles,
  Form: Form,
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
