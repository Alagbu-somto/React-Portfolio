import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="bg-footer">
      <ul class="nav justify-content-center">
        <li class="nav-item m-3">
          <a href="https://www.linkedin.com/in/alagbu-somtochukwu-06399a200">
            <AiFillLinkedin style={{ color: "#040f0f", fontSize: "20px" }} />
          </a>
        </li>
        <li class="nav-item m-3">
          <a href="https://github.com/Alagbu-somto">
            <AiFillGithub style={{ color: "#040f0f", fontSize: "20px" }} />
          </a>
        </li>
        <li class="nav-item m-3">
          <a href="https://twitter.com/Mrstephen19?t=Tgqjwz-iHHqIW0JSjmLKcw&s=09">
            <AiFillTwitterCircle
              style={{ color: "#040f0f", fontSize: "20px" }}
            />
          </a>
        </li>
      </ul>
      <p class="text-center pb-3 small">© 2022 ALAGBU SOMTOCHUKWU.</p>
    </footer>
  );
}

export default Footer;
