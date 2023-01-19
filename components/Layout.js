import Config from "./Config";

const Layout = ({ children, story }) => {
    
    return (
      <div>
        <Config blok={story?.content} />
        {children}
      </div>
    );
  };
  
  export default Layout;