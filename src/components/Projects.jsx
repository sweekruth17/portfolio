import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Taskify",
      imgSrc: "taskify.png",
      githubLink: "",
      hostedLink: "",
    },
    {
      title: "Curency Converter",
      imgSrc: "",
      githubLink: "",
      hostedLink: "",
    },
    ,
    {
      title: "lorem-ipsum generator",
      imgSrc: "taskify.png",
      githubLink: "",
      hostedLink: "",
    },
    ,
    {
      title: "Ticket Management System",
      imgSrc: "taskify.png",
      githubLink: "",
      hostedLink: "",
    },
    {
      title: "GPT Linkedin Plugin",
      imgSrc: "taskify.png",
      githubLink: "",
      hostedLink: "",
    },
  ];
  return (
    <>
      <div>
        {" "}
        <div className=" flex text-2xl lg:text-5xl font-medium">
          Projects
          <span className="w-[200px] h-1 bg-gradient-to-r from-red-500 to-violet-700 my-auto ml-7"></span>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default Projects;
