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
            <a href="mailto:hello@thidieuanhle.io">
              <i class="fa-solid fa-envelope contact-icon"></i>
            </a>
          </p>
          <p>
            <a
              href="https://github.com/DieuAnh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-github contact-icon"></i>
            </a>
          </p>
          <p>
            {" "}
            <a
              href="https://www.linkedin.com/in/thidieuanhle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-linkedin contact-icon"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
