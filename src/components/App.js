import React, { useState } from "react";
import Header from "./Header";
import Lead from "./Lead";
import Info from "./Info";
import Integration from "./Integration";
import Advantages from "./Advantages";
import Applicability from "./Applicability";
import Account from "./Account";
import Footer from "./Footer";
import Popup from "./Popup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import useFormWithValidation from "../hooks/useFormWithValidation";
import { api } from "../utils/api";

function App() {
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
  const [emailStatus, setEmailStatus] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const validation = useFormWithValidation();
  const history = useHistory();
  const closePopup = (popupRef) => {
    popupRef.current.classList.remove("popup_visible");
    setTimeout(() => {
      setIsPopupOpen(false);
    }, 300);
  };
  return (
    <div className="page">
      <Router history={history} basename="/">
        <Switch>
          <Route exact path="/stream_lp">
            <Header />
            <Lead />
            <Info />
            <Integration />
            <Advantages />
            <Applicability />
            <Account
              validation={validation}
              submitHandler={handleRegistrationRequest}
            />
            <Footer />
            {isPopupOpen && (
              <Popup
                isPopupOpen={isPopupOpen}
                closePopup={closePopup}
                emailStatus={emailStatus}
              />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
