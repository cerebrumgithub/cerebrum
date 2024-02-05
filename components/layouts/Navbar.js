import navbar from "@/styles/Navbar.module.css";
// import { useAuth } from "context/AuthContext";
import { useState } from "react";
import { useRouter } from "next/router";
// import { child, get, ref } from "firebase/database";
// import { database } from "../../firebase/initFirebase";
import { Image } from "react-bootstrap";
import Link from "next/link";
import CustomLink from "components/custom/links/CustomLink";
const Navbar = () => {
//   const { user, logout } = useAuth();
//   const router = useRouter();
//   const [iconImg, setIconImg] = useState(null);
//   const dbref = ref(database);

//   get(child(dbref, "website/general")).then((snapshot) => {
//     if (snapshot) {
//       setIconImg(snapshot.val().icon);
//     }
//   });

  return (
    <>
    <header className={navbar.header}>
      <Link href='/' legacyBehavior>
        <a className={navbar.logo}>
          <img alt="" src="/img/icon/logo.png" height={40} className={`d-inline-block align-top me-2`} style={{marginTop: '-2px'}}/>
          <img alt="" src="/img/icon/cereb.png" height={35} className={`${navbar.hidelogo} d-inline-block align-top me-2`} style={{marginTop: '-2px'}}/>
        </a>
      </Link>   
     
      
        <input type="checkbox" id="menu-bar" className={navbar.menuBar} />
        <label htmlFor="menu-bar">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#555555" className="bi bi-menu-down" viewBox="0 0 16 16">
            <path d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793L7.646.146zM1 7v3h14V7H1zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2h14zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </label>
      <nav className={navbar.navnav}>
        <ul className={navbar.ul}>
          <li className={navbar.list}><CustomLink styling={navbar.alink} href='/'>SERVICES</CustomLink></li>
          <li className={navbar.list}><CustomLink styling={navbar.alink} href='/ourwork'>OUR WORK</CustomLink></li>
          <li className={navbar.list}><CustomLink styling={navbar.alink} href='/about'>ABOUT</CustomLink></li>
          <li className={navbar.list}><CustomLink styling={navbar.alink} href='/contactus'>CONTACT US</CustomLink></li>
       
          {/* <li className={navbar.list}>
            <CustomLink styling={navbar.alink} href='#'></CustomLink>
            <ul>
              <li><CustomLink styling={navbar.alink} href="/squadLeaderBoard" legacyBehavior></CustomLink></li>
            </ul>
          </li> */}
         
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Navbar;