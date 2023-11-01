import { Outlet } from "react-router-dom";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import TemplateBlock from "./Template.style";

const Template = ({ header, footer }) => {
  return (
    <>
      {header && <Header />}
      <TemplateBlock>
        <Outlet />
      </TemplateBlock>
      {footer && <Footer />}
    </>
  );
};

export default Template;
