import Config from "./Config";

const Layout = ({ children, story }) => {
    
    return (
      <>
        <Config blok={story?.content} />
        {children}
      </>
    );
  };
  
  export default Layout;