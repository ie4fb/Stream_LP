import React, { useState, useEffect } from "react";
import Header from "./Header";
import Lead from "./Lead";
import Info from "./Info";
import Integration from "./Integration";
import Advantages from "./Advantages";
import Applicability from "./Applicability";
import Account from "./Account";
import Footer from "./Footer";
import Popup from "./Popup";
import ApiLinks from "./ApiLinks";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import useFormWithValidation from "../hooks/useFormWithValidation";
import { api } from "../utils/api";
import smoothscroll from "smoothscroll-polyfill";

function App() {
  const [emailStatus, setEmailStatus] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const validation = useFormWithValidation();
  const history = useHistory();
  
  //safari compatibility;
  smoothscroll.polyfill();

  const handleRegistrationRequest = (data) => {
    console.log(JSON.stringify(data));
    api
      .sendEmail(data)
      .then(() => {
        console.log("ok");
        setIsPopupOpen(true);
        setEmailStatus(true);
      })
      .catch(() => {
        setIsPopupOpen(true);
        setEmailStatus(false);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const closePopup = (popupRef) => {
    popupRef.current.classList.remove("popup_visible");
    setTimeout(() => {
      setIsPopupOpen(false);
    }, 300);
  };

  return (
    <Router history={history} basename="/">
      <Switch>
        <Route exact path="/">
          <Header isExtended={true} />
          <main className="content">
            <Lead />
            <Info />
            <Integration />
            <Advantages />
            <Applicability />
            <Account
              validation={validation}
              submitHandler={handleRegistrationRequest}
            />
          </main>
          <Footer />
          {isPopupOpen && (
            <Popup
              isPopupOpen={isPopupOpen}
              closePopup={closePopup}
              emailStatus={emailStatus}
            />
          )}
        </Route>
        <Route exact path="/api">
          <Header isExtended={false} />
          <main className="content">
            <ApiLinks />
          </main>
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
