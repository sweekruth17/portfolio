import React from "react";

const About = () => {
  return (
    <>
      <div className="">
        <div className=" flex text-2xl lg:text-5xl font-medium">
          About Me{" "}
          <span className="w-[200px] h-1 bg-gradient-to-r from-red-500 to-violet-700 my-auto ml-7"></span>
        </div>
        <div className="lg:columns-2 p-8 gap-x-10">
          <div className=" w-full h-full">
            <img
              loading="lazy"
              src="ME.jpeg"
              alt=""
              className="rounded-2xl aspect-auto md:max-w-[350px] mx-auto"
            />
          </div>
          <div className="w-full text-stone-300 mt-5">
            <div className="text-2xl font-bold">Who am I ?</div>
            <div className="leading-6 text-lg text-left text-pretty">
              I am an Associate Software Engineer at Clarivate, specializing in
              the MERN stack/Full Satck/Frontend/Backend developer - MongoDB,
              Express.js, React.js,Typescript, and Node.js. With a Bachelor of
              Engineering in Computer Science and Engineering, I bring expertise
              in Next.js, Tailwind CSS, JavaScript, and TypeScript. In my role,
              I contribute to the development of impactful Saas products like
              Metacore and KPA, collaborating closely with teams to deliver
              high-quality solutions that accelerate innovation in drug
              discovery and research.
            </div>
            <div className="text-2xl font-bold mt-5">Personal Info</div>
            <div className="  p-4">
              <div className="lg:grid lg:grid-cols-2 ">
                <div className="flex  pb-3">
                  <div className="bg-neutral-700 w-12 p-2 rounded-md text-[#e03a7d]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </div>
                  <div className=" w-full pl-2">
                    <div>phone</div>
                    <div>{`
                    8884537270`}</div>
                  </div>
                </div>
              </div>
              <div className="flex  pb-3">
                <div className="bg-neutral-700 w-12 p-2 rounded-md text-teal-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                    />
                  </svg>
                </div>
                <div className=" w-full pl-2">
                  <div>Email</div>
                  <div>sweekruth.kocherla@gmail.com</div>
                </div>
              </div>
              <div className="flex">
                <div className="bg-neutral-700 w-12 p-2 rounded-md text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
                <div className=" w-full pl-2">
                  <div>Location</div>
                  <div>Bengaluru ,Karnataka, IND</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-5">
            <div className="text-2xl font-bold ">My Arsenal 🚀</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
