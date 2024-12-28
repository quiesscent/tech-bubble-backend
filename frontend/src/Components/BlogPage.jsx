import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaThumbsUp, FaShareAlt } from "react-icons/fa";
import blogHero from "../Components/assets/blog-hero.png";
import blogCard1 from "../Components/assets/blog-card1.png";
import blogCard2 from "../Components/assets/blog-card2.png";
import blogCard3 from "../Components/assets/blog-card3.png";
import blogger from "../Components/assets/blogger.svg";

function BlogPage() {
  const [items, setItems] = useState([
    { label: "All", isActive: false },
    { label: "Ai", isActive: false },
    { label: "DevOps", isActive: false },
    { label: "UI/UX", isActive: false },
    { label: "Web3", isActive: false },
    { label: "Data Science", isActive: false },
    { label: "Web Development", isActive: false },
    { label: "Cyber Security", isActive: false },
    { label: "Mobile Development", isActive: false },
    { label: "Content Writing", isActive: false },
  ]);

  return (
    <div>
      <div>
        <img
          src={blogHero}
          alt="hero image"
          style={{
            width: "100vw",
            height: "auto",
          }}
          className="relative "
        />
        <div className="flex flex-col justify-center items-center gap-[34px] absolute top-[330px] left-[125px] w-[1236px] h-[286px] ">
          <h5 className="text-[#FFFFFF] text-center font-Inter text-[72px] font-bold leading-[86.4px]">
            All the tech knowledge you need right in one  Bubble.
          </h5>
          <button
            type="submit"
            className="text-[#FFFFFF] bg-[#0272EB] rounded px-3 py-1 w-[240px] h-[80px] font-Inter font-600 text-[20px] leading-[24px]"
          >
            Explore
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-2 py-4 my-10 w-full h-auto ">
        <h6 className="font-bold">Blog Feed</h6>
        <div className="flex align-center justify-center items-center gap-4 border ">
          {items.map((item, index) => (
            <p
              key={index}
              className={`py-[7px] px-[21px] ${
                item.isActive
                  ? "rounded-md bg-[#0343DF] text-[#FFFFFF]"
                  : "rounded-lg bg-[#E1E5F2] text-[#0343DF]"
              }`}
              onClick={() =>
                setItems((prev) =>
                  prev.map((i, idx) =>
                    idx === index
                      ? { ...i, isActive: !i.isActive }
                      : { ...i, isActive: false }
                  )
                )
              }
            >
              {item.label}
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center">
          <img
            src={blogCard1}
            alt="UI/UX card image"
            style={{
              width: "200px",
              height: "250px",
            }}
          />
          <div className="flex flex-col">
            <div>
              {" "}
              <h5>UI/UX Design Roadmaps Every Designer Should Know</h5>
              <div className="flex ">
                <img src="" />
                <p>Joanna Wellick</p>
                <hr></hr>
                <p>June 28, 2024</p>
                <p>
                  <FaShareAlt size={24} color="gray" />
                  1K shares
                </p>
              </div>
            </div>
            <p>
              Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
              dolor pretium donec dictum. Vici consequat justo enim.
            </p>
            <div className="flex">
              <h6>View Post</h6>
              <div className="flex">
                <FaThumbsUp size={24} color="gray" />
                <p>50</p>
                <span>.</span>
                <p>20 Comment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <img
            src={blogCard2}
            alt="web developmentb image"
            style={{
              width: "200px",
              height: "250px",
            }}
          />
          <div className="flex flex-col">
            <div>
              {" "}
              <h5>UI/UX Design Roadmaps Every Designer Should Know</h5>
              <div className="flex ">
                <img src="" />
                <p>Joanna Wellick</p>
                <hr></hr>
                <p>June 28, 2024</p>
                <p>
                  <FaShareAlt size={24} color="gray" />
                  1K shares
                </p>
              </div>
            </div>
            <p>
              Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
              dolor pretium donec dictum. Vici consequat justo enim.
            </p>
            <div className="flex">
              <h6>View Post</h6>
              <div className="flex">
                <FaThumbsUp size={24} color="gray" />
                <p>50</p>
                <span>.</span>
                <p>20 Comment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <img
            src={blogCard3}
            alt="blog image"
            style={{
              width: "200px",
              height: "250px",
            }}
          />
          <div className="flex flex-col">
            <div>
              {" "}
              <h5>UI/UX Design Roadmaps Every Designer Should Know</h5>
              <div className="flex ">
                <img src="" />
                <p>Joanna Wellick</p>
                <hr></hr>
                <p>June 28, 2024</p>
                <p>
                  <FaShareAlt size={24} color="gray" />
                  1K shares
                </p>
              </div>
            </div>
            <p>
              Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
              dolor pretium donec dictum. Vici consequat justo enim.
            </p>
            <div className="flex">
              <h6>View Post</h6>
              <div className="flex">
                <FaThumbsUp size={24} color="gray" />
                <p>50</p>
                <span>.</span>
                <p>20 Comment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
