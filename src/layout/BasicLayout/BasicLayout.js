import React from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

import "./basicLayout.scss";

export default function BasicLayout({children, setRefreshCheckLogin }) {

  return (
    <div className={`basic-layout`}>
      
        <div  className="basic-layout__menu">
          <Menu setRefreshCheckLogin={setRefreshCheckLogin} />
        </div>
        <div  className="basic-layout__content">
          {children}
        </div>
        <div  className="basic-layout__footer">
            <Footer/>
        </div>
      
    </div>
  );
}