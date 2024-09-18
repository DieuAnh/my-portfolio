import picProfile from "../assets/profile-pic.png";
import picWorkstation from "../assets/work-at-office.jpg";

const images = [
  { src: "/images/agile-conf.jpg", alt: "pic agile conference 2023" },
  { src: "/images/run-for-planet.jpg", alt: "pic run for planet 2024" },
  { src: "/images/dog.jpg", alt: "pic dog of a dogs lover" },
  { src: "/images/after-work.jpg", alt: "pic after work" },
  { src: "/images/motion-conf.jpg", alt: "pic motion conference 2024 Nantes" },
];
function About() {
  // return <>About hihihi ..</>;
  return (
    <div class="about-container">
      <div class="about-content">
        <div class="about-text">
          <h2>About me</h2>
          <div className="about-p">
            <br />
            <img src={picProfile} alt="Your photo" class="float-image-right" />
            In 2015, I left my hometown of Hue in rural Vietnam and moved to
            France, thanks to the Vallet scholarship from Rencontres du Vietnam
            for students with high results in the university entrance exam. It
            was a big change—new country, new language, new culture, and plenty
            of part-time jobs. The winters were cold, and the snow was a first
            for me, but I’ve come to really enjoy the weather in France.
            <br />
            <br />I studied engineering in college, but it didn’t take long
            before I found myself drawn to coding, and I ended up teaching
            myself a lot. I did a few internships during my school days, which
            gave me a taste of the real world of software development.
          </div>
          <div className="about-p">
            <img
              src={picWorkstation}
              alt="Your workstation"
              class="float-image-left"
            />
            <br />
            For the past 4+ years, I've been working as a full-stack web
            developer. I enjoy working on both the front end and back end of web
            applications—creating user interfaces and making sure everything
            runs smoothly on the backend.
            <br />
            <br />
            I’ve worked on a range of projects, from content-heavy websites to
            internal tools, using technologies like React, Node.js, and Python.
            My focus has primarily been on web development, and I enjoy the
            challenge of building different types of applications.
            <br />
            <br />
            Outside of coding, I like running, going out with my friends and
            animation, oh I love dogs (and taking pictures of them). I'm always
            on the lookout for new things to learn and ways to improve. I’m
            excited to see where this journey takes me next.
          </div>
        </div>
      </div>

      <div class="custom-grid">
        <img
          src="/images/agile-conf.jpg"
          alt="pic agile conference 2023"
          class="img1"
        />
        <img
          src="/images/run-for-planet.jpg"
          alt="pic run for planet 2024"
          class="img2"
        />
        <img src="/images/after-work.jpg" alt="pic after work" class="img3" />
        <img
          src="/images/dog2.jpg"
          alt="pic dog of a dogs lover"
          class="img4"
        />
        <img
          src="/images/motion-conf.jpg"
          alt="pic motion conference 2024 Nantes"
          class="img5"
        />
      </div>
    </div>
  );
}

export default About;
