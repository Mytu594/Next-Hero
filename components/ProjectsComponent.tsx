import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "What's for lunch?",
    description:
      "每到中午，我和我饭搭子们面临了不知道吃什么的世纪难题，于是写了一个随机选择饭店的一个page",
    image: "/WhatToEat.jpg",
    github: "https://github.com/Mytu594/WhatToEat.github.io",
    link: "https://mytu594.github.io/WhatToEat.github.io/",
  },
  {
    name: "ALTAIR EATS雲端餐飲管理系統",
    description: "Altair Eats 是一套功能強大的餐飲業數碼解決方案，可以幫助小型餐廳、咖啡店和餐飲連鎖店管理堂食、外賣訂單、提供庫存、員工管理和銷售分析，推動您的餐飲業務成功 !（参与从0到1开发，只能提供宣传网站）",
    image: "/FB.jpg",
    link: "https://www.altair.hk/?_gl=1*17b6tb3*_gcl_au*MTY5NjQ0NzQyOS4xNzIwNDU4NTUy",
  },
  {
    name: "HRM人力資源管理系統",
    description:
      "HRM（人力資源管理）是一個可自動化人力資源流程的系統，可在整個員工工作生命週期中支援和自動化HR流程，從聘用過程，員工發展，表現評核與福利等。公司可以在一個平台上管理各部門相關的HR記錄，提高效率，讓你更了解自己的工作團隊，快捷地應對人力資源管理方面的挑戰，加強你的業務優勢！",
    image: "/hrm.jpg",
    link: "https://www.bex.hk/hrm",
  },
  {
    name: "COO批發零售進銷存管理系統",
    description:
      "COO是一個專為香港中小企而設計的進銷存管理系統。它提供多項功能，包括客戶及供應商管理、報價單、客戶訂單、採購訂單、發票、庫存管理、零售管理等，並能連結至POS、業務同事的智能手機系統、會計系統等等。各系統功能相互緊密連結，資訊實時更新，促使各部門運作連貫，提升公司競爭力！",
    image: "/coo.jpg",
    link: "https://www.bex.hk/coo",
  }
]

const ProjectsComponent = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                    {project.github &&<Link href={project.github} target="_blank" >
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
        }
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsComponent
