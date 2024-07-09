import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Vue" },
  { skill: "C#" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind" },
  { skill: "Git" },
  
]

const AboutComponent = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              哈喽，我叫
              <span className="font-bold">{"林旋华"}</span>, 我从事前端开发
              <span className="font-bold">{"两年"}</span>了
              </p>
            <br />
            <p>
              我2022年毕业于广东金融学院，计算机科学与技术专业，并辅修了金融学，毕业至今一直从事前端开发工作
            </p>
            <br />
            <p>
            我有各种各样的爱好，让我的生活很充实。从阅读📖、运动🌈、旅行🗺️到coding📽️，我一直在寻求新的体验，喜欢让自己忙碌起来，学习新的东西。🌟
            </p>
            <br />
            <p>
            我坚信人永远{" "}
              <span className="font-bold text-teal-500">
              不能停止成长😜
              </span>{" "}
              ，这也是我努力去做的。我对技术充满热情🧐，渴望不断突破可能的极限。我很期待看到我的职业生涯将带我走向何方🚀，并且始终对新的机会持开放态度。🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/programmer.gif"
              alt=""
              width={325}
              height={300}
              className="hidden md:block md:relative md:top-1 md:left-0 md:z-0 sm:left-5"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutComponent
