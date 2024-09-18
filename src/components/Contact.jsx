import React from "react";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <p>
          Feel free to reach out via email or connect with me on social media!
        </p>
        <div className="contact-details">
          <p>
            <i class="fa-solid fa-envelope contact-icon">{"  "}</i>
            <a href="mailto:thidieuanhle@gmail.com">thidieuanhle@gmail.com</a>
          </p>
          <p>
            <i class="fa-solid fa-phone contact-icon"></i>{" "}
            <a href="tel:+33781275296">(+33) 7 81 27 52 96</a>
          </p>
          <p>
            <i class="fa-brands fa-linkedin contact-icon"></i>{" "}
            <a
              href="https://www.linkedin.com/in/thidieuanhle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              connnect with me on LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
