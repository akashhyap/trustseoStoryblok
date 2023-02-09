import Config from "./Config";
import Footer from "./Footer";

const Layout = ({ children, story }) => {
    // console.log('story', story)
    return (
      <>
        <Config button={story?.content.button} header_menu={story?.content.header_menu} />
        {children}
        <Footer footer={story?.content.footer} copyright={story?.content.copyright} />
      </>
    );
  };
  
  export default Layout;