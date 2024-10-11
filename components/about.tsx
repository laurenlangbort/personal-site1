
import "./about.css";
import { ImageSlider, SliderData } from "./images-about";
import puzzle from "../assets/puzzle.png";

export default function About() {
  return (
    <div
      className="overflow-y-hidden overflow-x-hidden"
      id="about"
      style={{
        backgroundColor: "#e7e7e7",
        marginTop: "0",
        height: "100vh",
        fontFamily: "public-sans",
      }}
    >
      <div className="d-flex flex-row justify-content-center">
        <div className="d-none d-md-flex">
          <ImageSlider slides={SliderData} />
        </div>
        <div
          className="text-center position-relative position-para"
          // style={{ width: "50vw", top: "100px", left: "100px" }}
        >
          <p
            className="pt-5 fw-bold"
            style={{ fontSize: "30px", color: "#340545" }}
          >
            {" "}
            Hi! I'm Lauren... ;)
          </p>
          <p>
            I'm a senior at Tufts University, majoring in Computer Science and
            Cognitive Brain Science. I've always been fascinated by how our
            unique experiences and perceptions influence the way we interact
            with the world, and I’m passionate about using technology to create
            solutions that cater to people's diverse needs. By combining my
            technical skills with creativity and understanding of human
            experiences, I love finding innovative ways to bring ideas to life.
          </p>
          <img src={puzzle} alt="" width="10" className="puzzle" />
        </div>
      </div>
    </div>
  );
}
