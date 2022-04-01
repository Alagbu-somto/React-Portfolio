import React from "react";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

function GetInTouch() {
  return (
    <section class="container-fliud bg-dark" id="contact">
      <div class="pt-5 text-center text-white">
        <h1>Get in touch</h1>
        <h3 class="mt-4">I will be happy to hear from you</h3>
        <p class="text-center mt-3">
          Let me know if you need a profesional website or web application for
          your business.
        </p>
      </div>
      <div class="text-center mt-3 pb-5 text-white">
        <p>Send me an Email</p>
        <a href="mailto:s.alagbu@gmail.com">
          Send Email <AiOutlineMail />
        </a>

        <h6 class="mt-3">OR</h6>
        <p>Reach me on What'sApp</p>
        <a href="https://api.whatsapp.com/send?phone=2347055348234">
          Message Us <AiOutlineWhatsApp />
        </a>
      </div>
    </section>
  );
}

export default GetInTouch;
