import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "next-themes";

const Layout = ({ children }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
