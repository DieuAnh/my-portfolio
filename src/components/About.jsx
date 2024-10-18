import React, { useEffect, useRef } from "react";

const images = [
  { src: "/images/agile-conf.jpg", alt: "pic agile conference 2023" },
  { src: "/images/run-for-planet.jpg", alt: "pic run for planet 2024" },
  { src: "/images/dog.jpg", alt: "pic dog of a dogs lover" },
  { src: "/images/after-work.jpg", alt: "pic after work" },
  { src: "/images/motion-conf.jpg", alt: "pic motion conference 2024 Nantes" },
];
function About() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Attempt to play the video after the component mounts
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);
  return (
    <div class="about-container">
      <div class="about-content">
        <div class="about-text">
          <div className="about-p">
            <br />
            In 2015, I left my hometown of Hue in rural Vietnam and moved to
            France, thanks to the Vallet scholarship from Rencontres du Vietnam
            for students with high results in the university entrance exam. It
            was a big change—new country, new language, new culture, and plenty
            of part-time jobs. The winters were cold, and the snow was a first
            for me, but I’ve come to really enjoy these things.
            <br />
            <br />I studied engineering in college, it didn’t take long before I
            found myself drawn to coding, and I ended up teaching myself a lot.
            I did a few internships, which gave me a taste of the real world of
            software development.
          </div>
          <div className="about-p">
            <br />
            For the past 4+ years, I've been working as a full-stack web
            developer. I enjoy working on both the front end and back end of web
            applications—creating user interfaces and making sure everything
            runs smoothly on the backend.
            <br />
            <br />
            I’ve worked on a range of projects, from content-heavy websites to
            enterprise tools, using technologies like React, Node.js, and
            Python. My focus has primarily been on web development, and I enjoy
            the challenge of building different types of applications.
            <br />
            <br />
            Outside of coding, I like running, going out with my friends and
            animation, oh I love dogs (and taking pictures of them). I'm always
            on the lookout for new things to learn and ways to improve. I’m
            excited to see where this journey takes me next.
          </div>
          <div className="contact-content">
            <p>For opportunies or just say hi:</p>
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
        <div className="about-video">
          <video
            ref={videoRef}
            src="https://d2sfzm091oyn8d.cloudfront.net/intro.mp4"
            type="video/mp4"
            autoplay
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default About;
