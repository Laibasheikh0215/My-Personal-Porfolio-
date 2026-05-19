import "./styles/Work.css";
import WorkImage from "./WorkImage";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Restaurant Website",
    author: "Laiba Sheikh",
    tools: " React.js, Node.js, Express, PostgreSQL, Socketio, JWT, Firebase, Nodemailer",
    image: "/images/restaurant-img.png",
  },
  {
    id: 2,
    title: "Online Book Exchange Community  System",
    author: "Laiba Sheikh",
    tools: " HTML, CSS, JavaScript, jQuery, PHP, MySQL",
    image: "/images/bookWeb-img.png",
  },
  {
    id: 3,
    title: "Weather Update Dashboard",
    author: "Laiba Sheikh",
    tools: "React, Node.js, Express, MongoDB, Tailwind CSS, JWT, Nodemailer, Leaflet",
    image: "/images/weather-img.png",
  },
  {
    id: 4,
    title: "Budget Bloom - Personal Budget Web Application",
    author: "Laiba Sheikh",
    tools: "Supabase, React.js, CSS3, Node.js",
    image: "/images/Budget img.png",
  },
  {
    id: 5,
    title: "Recipe Sharing Plateform",
    author: "Laiba Sheikh",
    tools: "HTML, CSS, JavaScript, Node.js, Express, Firebase, JWT",
    image: "/images/recipeimg.png",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");

      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;

      const rect = box[0].getBoundingClientRect();

      const parentWidth =
        box[0].parentElement!.getBoundingClientRect().width;

      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;

      translateX =
        rect.width * box.length -
        (rectLeft + parentWidth) +
        padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.author}</p>
                  </div>
                </div>

                <h4>Tools and Features</h4>

                <p>{project.tools}</p>
              </div>

              <WorkImage
                image={project.image}
                alt={project.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;