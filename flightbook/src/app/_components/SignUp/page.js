"use client";
import { useState, useRef, useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, googleAuth, fireStore } from "../firebase/config";
import { signInWithPopup, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Initial value

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

const SignUpComponent = ({ hideSignUp, showSignIn }) => {
  const width = useWindowWidth();
  const isMobile = width <= 768;
  useEffect(() => {
    const profileCss = document.createElement("link");
    profileCss.rel = "stylesheet";
    profileCss.href = "/Content/css/profile.css";
    document.head.appendChild(profileCss);

    return () => {
      if (document.head.contains(profileCss)) {
        document.head.removeChild(profileCss);
      }
    };
  }, [isMobile]);

  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const phoneNumber = useRef("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      toast.error("Passwords do not match");
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        emailRef.current.value,
        password
      );
      const user = userCredential.user;

      //setting display name
      await updateProfile(user, {
        displayName: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
      });
      // Store additional user information in Firestore
      await setDoc(doc(fireStore, "users", user.uid), {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: user.email,
        phone: phoneNumber.current.value,
        createdAt: new Date(),
      });
      hideSignUp();
      sessionStorage.setItem("user", true);

      // MONGODB CONNECTION
      // // Connect to MongoDB and insert user data
      // const client = await clientPromise;
      // const db = client.db();
      // const usersCollection = db.collection('users');

      // // Insert the user data into the 'users' collection in MongoDB
      // await usersCollection.insertOne({
      // uid: user.uid,
      // firstName: firstNameRef.current.value,
      // lastName: lastNameRef.current.value,
      // email: user.email,
      // phone: phoneNumber.current.value,
      // createdAt: new Date(),
      // });

      // // Hide sign-up modal/form and store session info
      // hideSignUp();
      // sessionStorage.setItem('user', JSON.stringify({ uid: user.uid, email: user.email }));

      // Optionally, you can add a success message or redirect
      toast.success(
        "Sign-up successful! Welcome to the Online Flight Reservation!"
      );
      setSuccess(true);
      showSignIn();
    } catch (e) {
      console.log(e);
      toast.error("Sign-up failed! Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuth);
      const user = result.user;
      console.log("Google sign-in successful", user);
      toast.success("Google sign-in successful");
      sessionStorage.setItem(
        "user",
        JSON.stringify({ uid: user.uid, email: user.email })
      );
      hideSignUp();
    } catch (error) {
      console.error("Google sign-in error", error);
      toast.error("Google sign-in error");
    }
  };

  return (
    <div id="someDivId" bis_skin_checked={1}>
      <div className="login_popup" id="singUp" bis_skin_checked={1}>
        <div className="popup_Box" bis_skin_checked={1}>
          <div className="center-block" bis_skin_checked={1}>
            <div className="outer" bis_skin_checked={1}>
              <div className="inner" bis_skin_checked={1}>
                <div className="loginBox" bis_skin_checked={1}>
                  <a
                    className="close"
                    onClick={hideSignUp}
                    bis_skin_checked={1}
                  >
                    <i className="fa fa-times" aria-hidden="true" />
                  </a>
                  <div className="left" bis_skin_checked={1}>
                    <div className="title" bis_skin_checked={1}>
                      Sign up and <br />
                      stay one step ahead.
                    </div>
                    <ul>
                      <li>
                        Avail discounts exclusive to our registered users.
                      </li>
                      <li>Your saved information means faster booking.</li>
                      <li>Stay updated on our latest offers.</li>
                    </ul>
                  </div>
                  <div className="right" bis_skin_checked={1}>
                    <div
                      id="Message"
                      style={{ display: "none" }}
                      className="alert alert-danger"
                      bis_skin_checked={1}
                    />
                    <h3>Sign up</h3>
                    {/* <a
 onclick="facebookLogin();"
 style={{ cursor: "pointer" }}
 className="facebook"
 >
 Facebook
 </a> */}
                    <div
                      onClick={handleGoogleSignIn}
                      className="g-signin2"
                      id="gsigup"
                      bis_skin_checked={1}
                    >
                      Google
                    </div>
                    <div className="form-row" bis_skin_checked={1}>
                      <input
                        type="text"
                        id="FirstName"
                        name="FirstName"
                        className="textbox"
                        placeholder="First name"
                        autoComplete="off"
                        ref={firstNameRef}
                      />
                      <i className="fa fa-user-o icon" />
                      <div
                        className="error_text"
                        bis_skin_checked={1}
                        style={{ display: "none" }}
                      >
                        First Name is required
                      </div>
                    </div>
                    <div className="form-row" bis_skin_checked={1}>
                      <input
                        type="text"
                        className="textbox"
                        id="LastName"
                        name="LastName"
                        placeholder="Last name"
                        autoComplete="off"
                        ref={lastNameRef}
                      />
                      <i className="fa fa-user-o icon" />
                      <div
                        className="error_text"
                        bis_skin_checked={1}
                        style={{ display: "none" }}
                      >
                        Last Name is required
                      </div>
                    </div>
                    <div className="form-row" bis_skin_checked={1}>
                      <input
                        type="text"
                        className="textbox"
                        id="UserName"
                        name="UserName"
                        placeholder="Email"
                        autoComplete="off"
                        ref={emailRef}
                      />
                      <i className="fa fa-envelope-o icon" />
                      <div
                        className="error_text"
                        bis_skin_checked={1}
                        style={{ display: "none" }}
                      >
                        Email is required
                      </div>
                    </div>
                    <div className="form-row" bis_skin_checked={1}>
                      <input
                        type="tel"
                        className="textbox"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        autoComplete="off"
                        ref={phoneNumber}
                      />
                      <i className="fa-solid fa-phone icon" />
                      <div
                        className="error_text"
                        bis_skin_checked={1}
                        style={{ display: "none" }}
                      >
                        Email is required
                      </div>
                    </div>
                    <div className="form-row" bis_skin_checked={1}>
                      <input
                        type="password"
                        className="textbox"
                        id="Password"
                        name="Password"
                        autoComplete="off"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <i className="fa fa-lock icon" />
                      <div
                        className="error_text"
                        bis_skin_checked={1}
                        style={{ display: "none" }}
                      >
                        pin is required
                      </div>
                    </div>
                    <div className="form-row" bis_skin_checked={1}>
                      <span className="pin-text">
                        Enter your 4 digit numeric pin
                      </span>
                    </div>
                    <div className="form-row" bis_skin_checked={1}>
                      <input
                        type="password"
                        className="textbox"
                        id="ConfirmPassword"
                        name="ConfirmPassword"
                        autoComplete="off"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <i className="fa fa-lock icon" />
                      <div
                        className="error_text"
                        bis_skin_checked={1}
                        style={{ display: "none" }}
                      >
                        Confirm pin is required
                      </div>
                    </div>
                    <div className="form-row" bis_skin_checked={1}>
                      <div className="terms" bis_skin_checked={1}>
                        By signing up, I agree to Lookbyfare General
                        <a
                          href="/us/terms-conditions"
                          target="_blank"
                          className="text-green"
                          bis_skin_checked={1}
                        >
                          Terms and Conditions
                        </a>
                        and
                        <a
                          className="text-green"
                          href="/us/privacy-policy"
                          target="_blank"
                          bis_skin_checked={1}
                        >
                          Privacy Policy
                        </a>
                        .
                      </div>
                    </div>
                    <div className="form-row" bis_skin_checked={1}>
                      <button
                        type="submit"
                        className="button pfsignup"
                        onClick={handleSubmit}
                      >
                        Sign UP
                        <span
                          className="button_loding_div"
                          style={{ display: "none" }}
                        >
                          <i className="button_loader" />
                          processing
                        </span>
                      </button>
                      <button
                        type="button"
                        className="button grayBtn"
                        onClick={showSignIn}
                      >
                        Back
                      </button>
                      <span style={{ margin: 15, color: "red" }} id="Message" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
