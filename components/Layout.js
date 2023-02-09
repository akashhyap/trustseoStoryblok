import Config from "./Config";
import Footer from "./Footer";

const Layout = ({ children, story }) => {
    // console.log('story', story)
    return (
      <>
        <Config blok={story?.content} />
        {children}
        <Footer blok={story?.content} />
      </>
    );
  };
  
  export default Layout;