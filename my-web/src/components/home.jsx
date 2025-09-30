import React from "react";
import "../styles/home.css"
import {Typewriter} from "react-simple-typewriter"

function Home() {
  return (
    <>
       <section className="home-section">

               <div className="hero-content">

                   <h1>
                       Hello, I'm <span className="highlight"> Jasmeet Thind</span>!
                   </h1>

                   <h2>
                   I'm {" "}

                   <span className="typewriter">
                    <Typewriter
                        words={[
                            "a Software Developer",
                            "majoring in Software Systems",
                            "an C++ coder"
                        ]}
                       loop
                       cursor
                       typeSpeed={70}
                       deleteSpeed={50}
                       delaySpeed={1500}
                       cursorColor="yellow"
                    />
                   </span>
                   </h2>

                   <p className="hero-desc">
                       I love building interactive websites and programs. I also enjoy learning new languages. I am currently completing my german certification.
                   </p>

                   <button
                       className="view_button"
                       onClick={() => document.getElementById("projects").scrollIntoView({behavior : "smooth"})}
                       >
                       View my Projects
                   </button>

               </div>

       </section>

    </>
  );
}

export default Home;