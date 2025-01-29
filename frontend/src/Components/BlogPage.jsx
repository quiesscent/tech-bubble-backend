import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaThumbsUp, FaShareAlt } from "react-icons/fa";
import blogHero from "../Components/assets/blog-hero.png";
import blogHero2 from "../Components/assets/blog-hero2.png";
import blogCard1 from "../Components/assets/blog-card1.png";
import blogCard2 from "../Components/assets/blog-card2.png";
import blogCard3 from "../Components/assets/blog-card3.png";
import blogCard4 from "../Components/assets/blog-card4.png";
import blogCard5 from "../Components/assets/blog-card5.png";
import blogCard6 from "../Components/assets/blog-card6.png";
import blogCard7 from "../Components/assets/blog-card7.png";
import blogCard8 from "../Components/assets/blog-card8.png";
import blogCard9 from "../Components/assets/blog-card9.png";
import blogCard10 from "../Components/assets/blog-card10.png";
import blogCard11 from "../Components/assets/blog-card11.png";
import blogCard12 from "../Components/assets/blog-card12.png";
import blogger from "../Components/assets/blogger.svg";
import blogger2 from "../Components/assets/blogger2.svg";

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
  const [date, setDate] = useState({
    month: "",
    date: "",
    year: "",
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateDate = () => {
      const currentDate = new Date();
      setDate({
        month: currentDate.toLocaleDateString("default", { month: "short" }),
        date: currentDate.getDate(),
        year: currentDate.getFullYear(),
      });
    };
    updateDate();
  }, []);

  const handleShareCount = () => {
    setCount((prevCount) => preCount + 1);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
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
          <h5 className="text-[#FFFFFF] text-center font-Inter text-[72px] font-bold leading-[86.4px] w-[1236px] h-[172px]">
            All the tech knowledge you need right in one  Bubble.
          </h5>

          <Link to="/#">
            <button
              type="submit"
              className="text-[#FFFFFF] bg-[#0272EB] rounded w-[240px] h-[80px] font-Inter font-semibold text-[20px] leading-[24px]"
            >
              Explore
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-[60px] py-4 my-10 w-full h-[264px] ">
        <h6 className="text-[#0343DF] font-bold font-Inter text-[40px] leading-[41px] text-center w-full h-[41px]">
          Blog Feed
        </h6>
        <div className="flex flex-wrap align-center justify-center items-center gap-[47px] w-[1347px] h-[164px]">
          {items.map((item, index) => (
            <p
              key={index}
              className={`py-[7px] px-[21px] ${
                item.isActive
                  ? "rounded-md bg-[#0343DF] text-[#FFFFFF]"
                  : "rounded-2xl bg-[#E1E5F2] text-[#0343DF]"
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

      <div className="flex justify-center items-center gap-[35px] p-[6px] w-full h-[800px] mb-[3rem]">
        <div className="flex flex-col justify-center items-center gap-[28px] w-[473px] h-[778px]">
          <img
            src={blogCard1}
            alt="UI/UX card image"
            style={{
              width: "473px",
              height: "420px",
            }}
          />
          <div className="flex flex-col gap-[23px] w-[473px] h-[330px]">
            <div className="w-[473px] h-[145px] flex flex-col gap-[13px]">
              <h5 className="w-[453px] h-[72px] font-Inter font-bold text-3xl leading-[36.31px] text-[#242222]">
                UI/UX Design Roadmaps Every Designer Should Know
              </h5>
              <div className="flex justify-start items-center gap-[19px] w-[454px] h-[40px]">
                <div className="w-[201px] h-[40px] flex items-center gap-[8px]">
                  <img src={blogger} alt="techie" />
                  <p className="font-Inter font-bold text-[20px] leading-[28px] w-[153px] h-[28px] text-[#242222]">
                    Joanna Wellick
                  </p>
                </div>
                <div className="w-[234px] h-[21px] flex items-center gap-[16px]">
                  <hr className="w-[2rem]"></hr>
                  <p className="w-[92px] h-[21px] font-Inter font-bold text-[14px] leading-[21px] text-[#6C757D]">
                    {date.month} {date.date} {date.year}
                  </p>
                  <div className="flex items-center gap-[4px] w-[77px] h-[21px]">
                    <FaShareAlt
                      className="w-[12px] h-[12.8px] text-[#6C757D] cursor-pointer"
                      onClick={handleShareCount}
                      alt="share icon"
                    />
                    <p className="w-[61px] h-[21px] font-Inter font-normal text-[14px] leading-[21px] text-[#6C757D]">
                      {count} shares
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="w-[453px] h-[98px] font-Inter font-normal text-[20px] leading-[33.14px] text-[#6C757D]">
              Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
              dolor pretium donec dictum. Vici consequat justo enim.
            </p>
            <div className="flex items-center justify-between w-[453px] h-[41px]">
              <div className="flex flex-col justify-center items-center gap-[4px] w-[111px] h-[32px]">
                <h6 className="w-[111px] h-[28px] font-Inter font-bold text-[22px] leading-[28px] text-[#242222] text-center">
                  View Post
                </h6>
                <hr className="w-[83px] border-2 border-[#242222]"></hr>
              </div>
              <div className="flex justify-center items-center w-[203px] h-[41px]">
                <div className="flex justify-center items-center gap-[4px] w-[54px] h-[24px]">
                  <FaThumbsUp
                    className="text-[#6C757D] w-[18.56px] h-[18px]"
                    onClick={handleShareCount}
                  />
                  <p className="text-[#6C757D] w-[26px] h-[22px] font-Inter font-bold text-[17px] leading-[22px]">
                    {count}
                  </p>
                </div>
                <span className="w-[30px] h-[40px] text-[#6C757D66]"></span>
                <p className="text-[#6C757D] w-[99px] h-[21px] font-Inter font-bold text-[16px] leading-[21px]">
                  20 Comment
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-[28px] w-[473px] h-[778px]">
          <img
            src={blogCard2}
            alt="web developmentb image"
            style={{
              width: "473px",
              height: "420px",
            }}
          />
          <div className="flex flex-col gap-[23px] w-[473px] h-[340px]">
            <div className="w-[473px] h-[145px] flex flex-col gap-[13px]">
              <h5 className="w-[453px] h-[72px] font-Inter font-bold text-3xl leading-[36.31px] text-[#242222]">
                10 Essential Tools for Every JavaScript Developer
              </h5>
              <div className="flex justify-start items-center gap-[19px] w-[454px] h-[40px] ">
                <img src={blogger} alt="techie" />
                <p className="font-Inter font-bold text-[20px] leading-[28px] w-[153px] h-[28px] text-[#242222]">
                  Joanna Wellick
                </p>
                <div className="w-[234px] h-[21px] flex items-center gap-[16px]">
                  <hr className="w-[2rem]"></hr>
                  <p className="w-[92px] h-[21px] font-Inter font-bold text-[14px] leading-[21px] text-[#6C757D]">
                    {date.month} {date.date} {date.year}
                  </p>
                  <div className="flex items-center gap-[4px] w-[77px] h-[21px]">
                    <FaShareAlt
                      className="w-[12px] h-[12.8px] text-[#6C757D]"
                      onClick={handleShareCount}
                      size={24}
                      color="gray"
                    />
                    <p className="w-[61px] h-[21px] font-Inter font-normal text-[14px] leading-[21px] text-[#6C757D]">
                      {count} shares
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="w-[453px] h-[98px] font-Inter font-normal text-[20px] leading-[33.14px] text-[#6C757D]">
              Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
              dolor pretium donec dictum. Vici consequat justo enim.
            </p>
            <div className="flex items-center justify-between w-[453px] h-[41px]">
              <div className="flex flex-col justify-center items-center gap-[4px] w-[111px] h-[32px]">
                <h6 className="w-[111px] h-[28px] font-Inter font-bold text-[22px] leading-[28px] text-[#242222] text-center">
                  View Post
                </h6>
                <hr className="w-[83px] border-2 border-[#242222]"></hr>
              </div>
              <div className="flex justify-center items-center w-[203px] h-[41px]">
                <div className="flex justify-center items-center gap-[4px] w-[54px] h-[24px]">
                  <FaThumbsUp
                    className="text-[#6C757D] w-[18.56px] h-[18px]"
                    onClick={handleShareCount}
                  />
                  <p className="text-[#6C757D] w-[26px] h-[22px] font-Inter font-bold text-[17px] leading-[22px]">
                    {count}
                  </p>
                </div>
                <span className="w-[30px] h-[40px] text-[#6C757D66]"></span>
                <p className="text-[#6C757D] w-[99px] h-[21px] font-Inter font-bold text-[16px] leading-[21px]">
                  20 Comment
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-[28px] w-[473px] h-[778px]">
          <img
            src={blogCard3}
            alt="blog image"
            style={{
              width: "473px",
              height: "420px",
            }}
          />
          <div className="flex flex-col gap-[23px] w-[473px] h-[340px]">
            <div className="w-[473px] h-[145px] flex flex-col gap-[13px]">
              <h5 className="w-[453px] h-[72px] font-Inter font-bold text-3xl leading-[36.31px] text-[#242222]">
                Breaking into Tech: Advice for Newbies
              </h5>
              <div className="flex justify-start items-center gap-[19px] w-[454px] h-[40px]">
                <img src={blogger} alt="techie" />
                <p className="font-Inter font-bold text-[20px] leading-[28px] w-[153px] h-[28px] text-[#242222]">
                  Joanna Wellick
                </p>
                <div className="w-[234px] h-[21px] flex items-center gap-[16px]">
                  <hr className="w-[2rem]"></hr>
                  <p className="w-[92px] h-[21px] font-Inter font-bold text-[14px] leading-[21px] text-[#6C757D]">
                    {date.month} {date.date} {date.year}
                  </p>
                  <div className="flex items-center gap-[4px] w-[77px] h-[21px]">
                    <FaShareAlt
                      className="w-[12px] h-[12.8px] text-[#6C757D]"
                      onClick={handleShareCount}
                      size={24}
                      color="gray"
                    />
                    <p className="w-[61px] h-[21px] font-Inter font-normal text-[14px] leading-[21px] text-[#6C757D]">
                      {count} shares
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="w-[453px] h-[98px] font-Inter font-normal text-[20px] leading-[33.14px] text-[#6C757D]">
              Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
              dolor pretium donec dictum. Vici consequat justo enim.
            </p>
            <div className="flex items-center justify-between w-[453px] h-[41px]">
              <div className="flex flex-col justify-center items-center gap-[4px] w-[111px] h-[32px]">
                <h6 className="w-[111px] h-[28px] font-Inter font-bold text-[22px] leading-[28px] text-[#242222] text-center">
                  View Post
                </h6>
                <hr className="w-[83px] border-2 border-[#242222]"></hr>
              </div>
              <div className="flex justify-center items-center w-[203px] h-[41px]">
                <div className="flex justify-center items-center gap-[4px] w-[54px] h-[24px]">
                  <FaThumbsUp
                    className="text-[#6C757D] w-[18.56px] h-[18px]"
                    onClick={handleShareCount}
                  />
                  <p className="text-[#6C757D] w-[26px] h-[22px] font-Inter font-bold text-[17px] leading-[22px]">
                    {count}
                  </p>
                </div>
                <span className="w-[30px] h-[40px] text-[#6C757D66]"></span>
                <p className="text-[#6C757D] w-[99px] h-[21px] font-Inter font-bold text-[16px] leading-[21px]">
                  20 Comment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-[35px] p-[6px] w-full h-[800px] mb-[3rem]">
        <div className="flex flex-col justify-center items-center gap-[28px] w-[473px] h-[778px]">
          <img
            src={blogCard4}
            alt="UI/UX card image"
            style={{
              width: "473px",
              height: "420px",
            }}
          />
          <div className="flex flex-col gap-[23px] w-[473px] h-[330px]">
            <div className="w-[473px] h-[145px] flex flex-col gap-[13px]">
              <h5 className="w-[453px] h-[72px] font-Inter font-bold text-3xl leading-[36.31px] text-[#242222]">
                Breaking into Tech: Advice for Newbies
              </h5>
              <div className="flex justify-start items-center gap-[19px] w-[454px] h-[40px]">
                <div className="w-[201px] h-[40px] flex items-center gap-[8px]">
                  <img src={blogger} alt="techie" />
                  <p className="font-Inter font-bold text-[20px] leading-[28px] w-[153px] h-[28px] text-[#242222]">
                    Joanna Wellick
                  </p>
                </div>
                <div className="w-[234px] h-[21px] flex items-center gap-[16px]">
                  <hr className="w-[2rem]"></hr>
                  <p className="w-[92px] h-[21px] font-Inter font-bold text-[14px] leading-[21px] text-[#6C757D]">
                    {date.month} {date.date} {date.year}
                  </p>
                  <div className="flex items-center gap-[4px] w-[77px] h-[21px]">
                    <FaShareAlt
                      className="w-[12px] h-[12.8px] text-[#6C757D]"
                      onClick={handleShareCount}
                      alt="share icon"
                    />
                    <p className="w-[61px] h-[21px] font-Inter font-normal text-[14px] leading-[21px] text-[#6C757D]">
                      {count} shares
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="w-[453px] h-[98px] font-Inter font-normal text-[20px] leading-[33.14px] text-[#6C757D]">
              Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
              dolor pretium donec dictum. Vici consequat justo enim.
            </p>
            <div className="flex items-center justify-between w-[453px] h-[41px]">
              <div className="flex flex-col justify-center items-center gap-[4px] w-[111px] h-[32px]">
                <h6 className="w-[111px] h-[28px] font-Inter font-bold text-[22px] leading-[28px] text-[#242222] text-center">
                  View Post
                </h6>
                <hr className="w-[83px] border-2 border-[#242222]"></hr>
              </div>
              <div className="flex justify-center items-center w-[203px] h-[41px]">
                <div className="flex justify-center items-center gap-[4px] w-[54px] h-[24px]">
                  <FaThumbsUp
                    className="text-[#6C757D] w-[18.56px] h-[18px]"
                    onClick={handleShareCount}
                  />
                  <p className="text-[#6C757D] w-[26px] h-[22px] font-Inter font-bold text-[17px] leading-[22px]">
                    {count}
                  </p>
                </div>
                <span className="w-[30px] h-[40px] text-[#6C757D66]"></span>
                <p className="text-[#6C757D] w-[99px] h-[21px] font-Inter font-bold text-[16px] leading-[21px]">
                  20 Comment
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-[28px] w-[473px] h-[778px]">
          <img
            src={blogCard5}
            alt="web developmentb image"
            style={{
              width: "473px",
              height: "420px",
            }}
          />
          <div className="flex flex-col gap-[23px] w-[473px] h-[340px]">
            <div className="w-[473px] h-[145px] flex flex-col gap-[13px]">
              <h5 className="w-[453px] h-[72px] font-Inter font-bold text-3xl leading-[36.31px] text-[#242222]">
                Using GitHub as a web developer for version control
              </h5>
              <div className="flex justify-start items-center gap-[19px] w-[454px] h-[40px] ">
                <img src={blogger} alt="techie" />
                <p className="font-Inter font-bold text-[20px] leading-[28px] w-[153px] h-[28px] text-[#242222]">
                  Joanna Wellick
                </p>
                <div className="w-[234px] h-[21px] flex items-center gap-[16px]">
                  <hr className="w-[2rem]"></hr>
                  <p className="w-[92px] h-[21px] font-Inter font-bold text-[14px] leading-[21px] text-[#6C757D]">
                    {date.month} {date.date} {date.year}
                  </p>
                  <div className="flex items-center gap-[4px] w-[77px] h-[21px]">
                    <FaShareAlt
                      className="w-[12px] h-[12.8px] text-[#6C757D]"
                      onClick={handleShareCount}
                      size={24}
                      color="gray"
                    />
                    <p className="w-[61px] h-[21px] font-Inter font-normal text-[14px] leading-[21px] text-[#6C757D]">
                      {count} shares
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="w-[453px] h-[98px] font-Inter font-normal text-[20px] leading-[33.14px] text-[#6C757D]">
              Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
              dolor pretium donec dictum. Vici consequat justo enim.
            </p>
            <div className="flex items-center justify-between w-[453px] h-[41px]">
              <div className="flex flex-col justify-center items-center gap-[4px] w-[111px] h-[32px]">
                <h6 className="w-[111px] h-[28px] font-Inter font-bold text-[22px] leading-[28px] text-[#242222] text-center">
                  View Post
                </h6>
                <hr className="w-[83px] border-2 border-[#242222]"></hr>
              </div>
              <div className="flex justify-center items-center w-[203px] h-[41px]">
                <div className="flex justify-center items-center gap-[4px] w-[54px] h-[24px]">
                  <FaThumbsUp
                    className="text-[#6C757D] w-[18.56px] h-[18px]"
                    onClick={handleShareCount}
                  />
                  <p className="text-[#6C757D] w-[26px] h-[22px] font-Inter font-bold text-[17px] leading-[22px]">
                    {count}
                  </p>
                </div>
                <span className="w-[30px] h-[40px] text-[#6C757D66]"></span>
                <p className="text-[#6C757D] w-[99px] h-[21px] font-Inter font-bold text-[16px] leading-[21px]">
                  20 Comment
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-[28px] w-[473px] h-[778px]">
          <img
            src={blogCard6}
            alt="blog image"
            style={{
              width: "473px",
              height: "420px",
            }}
          />
          <div className="flex flex-col gap-[23px] w-[473px] h-[340px]">
            <div className="w-[473px] h-[145px] flex flex-col gap-[13px]">
              <h5 className="w-[453px] h-[72px] font-Inter font-bold text-3xl leading-[36.31px] text-[#242222]">
                Exploring the World of DevOps: Tools and Technique
              </h5>
              <div className="flex justify-start items-center gap-[19px] w-[454px] h-[40px]">
                <img src={blogger} alt="techie" />
                <p className="font-Inter font-bold text-[20px] leading-[28px] w-[153px] h-[28px] text-[#242222]">
                  Joanna Wellick
                </p>
                <div className="w-[234px] h-[21px] flex items-center gap-[16px]">
                  <hr className="w-[2rem]"></hr>
                  <p className="w-[92px] h-[21px] font-Inter font-bold text-[14px] leading-[21px] text-[#6C757D]">
                    {date.month} {date.date} {date.year}
                  </p>
                  <div className="flex items-center gap-[4px] w-[77px] h-[21px]">
                    <FaShareAlt
                      className="w-[12px] h-[12.8px] text-[#6C757D]"
                      onClick={handleShareCount}
                      size={24}
                      color="gray"
                    />
                    <p className="w-[61px] h-[21px] font-Inter font-normal text-[14px] leading-[21px] text-[#6C757D]">
                      {count} shares
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="w-[453px] h-[98px] font-Inter font-normal text-[20px] leading-[33.14px] text-[#6C757D]">
              Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
              dolor pretium donec dictum. Vici consequat justo enim.
            </p>
            <div className="flex items-center justify-between w-[453px] h-[41px]">
              <div className="flex flex-col justify-center items-center gap-[4px] w-[111px] h-[32px]">
                <h6 className="w-[111px] h-[28px] font-Inter font-bold text-[22px] leading-[28px] text-[#242222] text-center">
                  View Post
                </h6>
                <hr className="w-[83px] border-2 border-[#242222]"></hr>
              </div>
              <div className="flex justify-center items-center w-[203px] h-[41px]">
                <div className="flex justify-center items-center gap-[4px] w-[54px] h-[24px]">
                  <FaThumbsUp
                    className="text-[#6C757D] w-[18.56px] h-[18px]"
                    onClick={handleShareCount}
                  />
                  <p className="text-[#6C757D] w-[26px] h-[22px] font-Inter font-bold text-[17px] leading-[22px]">
                    {count}
                  </p>
                </div>
                <span className="w-[30px] h-[40px] text-[#6C757D66]"></span>
                <p className="text-[#6C757D] w-[99px] h-[21px] font-Inter font-bold text-[16px] leading-[21px]">
                  20 Comment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-[35px] p-[6px] w-full h-[800px] mb-[3rem]">
        <div className="flex flex-col justify-center items-center gap-[28px] w-[473px] h-[778px]">
          <img
            src={blogCard8}
            alt="UI/UX card image"
            style={{
              width: "473px",
              height: "420px",
            }}
          />
          <div className="flex flex-col gap-[23px] w-[473px] h-[330px]">
            <div className="w-[473px] h-[145px] flex flex-col gap-[13px]">
              <h5 className="w-[453px] h-[72px] font-Inter font-bold text-3xl leading-[36.31px] text-[#242222]">
                Exploring the World of DevOps: Tools and Technique
              </h5>
              <div className="flex justify-start items-center gap-[19px] w-[454px] h-[40px]">
                <div className="w-[201px] h-[40px] flex items-center gap-[8px]">
                  {" "}
                  <img src={blogger} alt="techie" />
                  <p className="font-Inter font-bold text-[20px] leading-[28px] w-[153px] h-[28px] text-[#242222]">
                    Joanna Wellick
                  </p>
                </div>
                <div className="w-[234px] h-[21px] flex items-center gap-[16px]">
                  <hr className="w-[2rem]"></hr>
                  <p className="w-[92px] h-[21px] font-Inter font-bold text-[14px] leading-[21px] text-[#6C757D]">
                    {date.month} {date.date} {date.year}
                  </p>
                  <div className="flex items-center gap-[4px] w-[77px] h-[21px]">
                    <FaShareAlt
                      className="w-[12px] h-[12.8px] text-[#6C757D]"
                      onClick={handleShareCount}
                      alt="share icon"
                    />
                    <p className="w-[61px] h-[21px] font-Inter font-normal text-[14px] leading-[21px] text-[#6C757D]">
                      {count} shares
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="w-[453px] h-[98px] font-Inter font-normal text-[20px] leading-[33.14px] text-[#6C757D]">
              Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
              dolor pretium donec dictum. Vici consequat justo enim.
            </p>
            <div className="flex items-center justify-between w-[453px] h-[41px]">
              <div className="flex flex-col justify-center items-center gap-[4px] w-[111px] h-[32px]">
                <h6 className="w-[111px] h-[28px] font-Inter font-bold text-[22px] leading-[28px] text-[#242222] text-center">
                  View Post
                </h6>
                <hr className="w-[83px] border-2 border-[#242222]"></hr>
              </div>
              <div className="flex justify-center items-center w-[203px] h-[41px]">
                <div className="flex justify-center items-center gap-[4px] w-[54px] h-[24px]">
                  <FaThumbsUp
                    className="text-[#6C757D] w-[18.56px] h-[18px]"
                    onClick={handleShareCount}
                  />
                  <p className="text-[#6C757D] w-[26px] h-[22px] font-Inter font-bold text-[17px] leading-[22px]">
                    {count}
                  </p>
                </div>
                <span className="w-[30px] h-[40px] text-[#6C757D66]"></span>
                <p className="text-[#6C757D] w-[99px] h-[21px] font-Inter font-bold text-[16px] leading-[21px]">
                  20 Comment
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-[28px] w-[473px] h-[778px]">
          <img
            src={blogCard7}
            alt="web developmentb image"
            style={{
              width: "473px",
              height: "420px",
            }}
          />
          <div className="flex flex-col gap-[23px] w-[473px] h-[340px]">
            <div className="w-[473px] h-[145px] flex flex-col gap-[13px]">
              <h5 className="w-[453px] h-[72px] font-Inter font-bold text-3xl leading-[36.31px] text-[#242222]">
                UI/UX Design Roadmaps Every Designer Should Know
              </h5>
              <div className="flex justify-start items-center gap-[19px] w-[454px] h-[40px] ">
                <img src={blogger} alt="techie" />
                <p className="font-Inter font-bold text-[20px] leading-[28px] w-[153px] h-[28px] text-[#242222]">
                  Joanna Wellick
                </p>
                <div className="w-[234px] h-[21px] flex items-center gap-[16px]">
                  <hr className="w-[2rem]"></hr>
                  <p className="w-[92px] h-[21px] font-Inter font-bold text-[14px] leading-[21px] text-[#6C757D]">
                    {date.month} {date.date} {date.year}
                  </p>
                  <div className="flex items-center gap-[4px] w-[77px] h-[21px]">
                    <FaShareAlt
                      className="w-[12px] h-[12.8px] text-[#6C757D]"
                      onClick={handleShareCount}
                      size={24}
                      color="gray"
                    />
                    <p className="w-[61px] h-[21px] font-Inter font-normal text-[14px] leading-[21px] text-[#6C757D]">
                      {count} shares
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="w-[453px] h-[98px] font-Inter font-normal text-[20px] leading-[33.14px] text-[#6C757D]">
              Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
              dolor pretium donec dictum. Vici consequat justo enim.
            </p>
            <div className="flex items-center justify-between w-[453px] h-[41px]">
              <div className="flex flex-col justify-center items-center gap-[4px] w-[111px] h-[32px]">
                <h6 className="w-[111px] h-[28px] font-Inter font-bold text-[22px] leading-[28px] text-[#242222] text-center">
                  View Post
                </h6>
                <hr className="w-[83px] border-2 border-[#242222]"></hr>
              </div>
              <div className="flex justify-center items-center w-[203px] h-[41px]">
                <div className="flex justify-center items-center gap-[4px] w-[54px] h-[24px]">
                  <FaThumbsUp
                    className="text-[#6C757D] w-[18.56px] h-[18px]"
                    onClick={handleShareCount}
                  />
                  <p className="text-[#6C757D] w-[26px] h-[22px] font-Inter font-bold text-[17px] leading-[22px]">
                    {count}
                  </p>
                </div>
                <span className="w-[30px] h-[40px] text-[#6C757D66]"></span>
                <p className="text-[#6C757D] w-[99px] h-[21px] font-Inter font-bold text-[16px] leading-[21px]">
                  20 Comment
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-[28px] w-[473px] h-[778px]">
          <img
            src={blogCard9}
            alt="blog image"
            style={{
              width: "473px",
              height: "420px",
            }}
          />
          <div className="flex flex-col gap-[23px] w-[473px] h-[340px]">
            <div className="w-[473px] h-[145px] flex flex-col gap-[13px]">
              <h5 className="w-[453px] h-[72px] font-Inter font-bold text-3xl leading-[36.31px] text-[#242222]">
                Blockchain Beyond Bitcoin: Real-World Use Cases”
              </h5>
              <div className="flex justify-start items-center gap-[19px] w-[454px] h-[40px]">
                <img src={blogger} alt="techie" />
                <p className="font-Inter font-bold text-[20px] leading-[28px] w-[153px] h-[28px] text-[#242222]">
                  Joanna Wellick
                </p>
                <div className="w-[234px] h-[21px] flex items-center gap-[16px]">
                  <hr className="w-[2rem]"></hr>
                  <p className="w-[92px] h-[21px] font-Inter font-bold text-[14px] leading-[21px] text-[#6C757D]">
                    {date.month} {date.date} {date.year}
                  </p>
                  <div className="flex items-center gap-[4px] w-[77px] h-[21px]">
                    <FaShareAlt
                      className="w-[12px] h-[12.8px] text-[#6C757D]"
                      onClick={handleShareCount}
                      size={24}
                      color="gray"
                    />
                    <p className="w-[61px] h-[21px] font-Inter font-normal text-[14px] leading-[21px] text-[#6C757D]">
                      {count} shares
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="w-[453px] h-[98px] font-Inter font-normal text-[20px] leading-[33.14px] text-[#6C757D]">
              Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
              dolor pretium donec dictum. Vici consequat justo enim.
            </p>
            <div className="flex items-center justify-between w-[453px] h-[41px]">
              <div className="flex flex-col justify-center items-center gap-[4px] w-[111px] h-[32px]">
                <h6 className="w-[111px] h-[28px] font-Inter font-bold text-[22px] leading-[28px] text-[#242222] text-center">
                  View Post
                </h6>
                <hr className="w-[83px] border-2 border-[#242222]"></hr>
              </div>
              <div className="flex justify-center items-center w-[203px] h-[41px]">
                <div className="flex justify-center items-center gap-[4px] w-[54px] h-[24px]">
                  <FaThumbsUp
                    className="text-[#6C757D] w-[18.56px] h-[18px]"
                    onClick={handleShareCount}
                  />
                  <p className="text-[#6C757D] w-[26px] h-[22px] font-Inter font-bold text-[17px] leading-[22px]">
                    {count}
                  </p>
                </div>
                <span className="w-[30px] h-[40px] text-[#6C757D66]"></span>
                <p className="text-[#6C757D] w-[99px] h-[21px] font-Inter font-bold text-[16px] leading-[21px]">
                  20 Comment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center h-screen relative">
          <img
            src={blogHero2}
            alt="hero image"
            className="w-[1489px] h-[634px] transition-transform duration-300 hover:scale-125"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-[34px] absolute top-[3973px] left-[141px] w-[1236px] h-[242px] ">
          <h5 className="text-[#FFFFFF] text-center font-Inter text-[57px] font-semibold leading-[64px]">
            10 Essential UX Design Principles for Creating User-Friendly Mobile
            Apps
          </h5>
          <Link to="#">
            <button
              type="submit"
              className="text-[#FFFFFF] bg-[#0272EB] rounded w-[240px] h-[80px] font-Inter font-semibold text-[28px] leading-[33.6px]"
            >
              View Post
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center gap-10 w-[1489px]  h-[791px]">
        <div className="flex flex-col items-center gap-2">
          <div className="relative">
            <img
              className="w-[609px] h-[391px]"
              src={blogCard10}
              alt="blog image"
            />
            <div className="flex flex-col justify-start items-start py-4 px-10 gap-[19px] w-[527px] h-[195px] inset-0 backdrop-blur-xs absolute top-[160px] left-[40px] bg-[#FFFFFF5E]">
              <div className="flex items-center w-[201px] h-[40px] gap-[19px]">
                <img
                  className="w-[40px] h-[40px]"
                  src={blogger2}
                  alt="techie"
                />
                <p className="font-Inter font-bold text-[20px] leading-[28px] w-[153px] h-[28px] text-[#121416]">
                  Joanna Wellick
                </p>
              </div>
              <h5 className=" w-[477px] h-[41px] font-Inter font-bold text-[24px] leading-[41px] text-[#121416]">
                Breaking into Tech: Advice for Newbies
              </h5>
              <div className="self-end w-[183px] h-[21px] flex items-center gap-[16px]">
                <p className="w-[92px] h-[21px] font-Inter font-bold text-[14px] leading-[21px] text-[#242222CC]">
                  {date.month} {date.date} {date.year}
                </p>

                <div className="flex items-center gap-[4px] w-[77px] h-[21px]">
                  <FaShareAlt
                    className="w-[12px] h-[12.8px] text-[#6C757D]"
                    onClick={handleShareCount}
                  />
                  <p className="w-[61px] h-[21px] font-Inter font-normal text-[14px] leading-[21px] text-[#242222CC]">
                    {count} shares
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              className="w-[609px] h-[391px]"
              src={blogCard11}
              alt="blog image"
            />
            <div className="flex flex-col justify-start items-start py-4 px-10 gap-[19px] w-[527px] h-[195px] inset-0 backdrop-blur-xs absolute top-[143px] left-[40px] bg-[#FFFFFF5E]">
              <div className="flex items-center w-[201px] h-[40px] gap-[19px]">
                <img
                  className="w-[40px] h-[40px]"
                  src={blogger2}
                  alt="techie"
                />
                <p className="font-Inter font-bold text-[20px] leading-[28px] w-[153px] h-[28px] text-[#121416]">
                  Joanna Wellick
                </p>
              </div>
              <h5 className="w-[477px] h-[41px] font-Inter font-bold text-[24px] leading-[41px] text-[#121416]">
                Breaking into Tech: Advice for Newbies
              </h5>
              <div className="self-end w-[183px] h-[21px] flex items-center gap-[16px]">
                <p className="w-[92px] h-[21px] font-Inter font-bold text-[14px] leading-[21px] text-[#242222CC]">
                  {date.month} {date.date} {date.year}
                </p>

                <div className="flex items-center gap-[4px] w-[77px] h-[21px]">
                  <FaShareAlt
                    className="w-[12px] h-[12.8px] text-[#242222CC]"
                    onClick={handleShareCount}
                  />
                  <p className="w-[61px] h-[21px] font-Inter font-normal text-[14px] leading-[21px] text-[#242222CC]">
                    {count} shares
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            className="w-[838px] h-[791px]"
            src={blogCard12}
            alt="blog image"
          />
          <div className="flex flex-col justify-start items-start gap-[19px] py-4 px-10 w-[527px] h-[195px] absolute top-[534px] left-[50px] inset-0 backdrop-blur-xs bg-[#FFFFFF5E] ">
            <div className="flex items-center w-[201px] h-[40px] gap-[19px]">
              <img className="w-[40px] h-[40px]" src={blogger2} alt="techie" />
              <p className="font-Inter font-bold text-[20px] leading-[28px] w-[153px] h-[28px] text-[#121416]">
                Joanna Wellick
              </p>
            </div>
            <h5 className="w-[477px] h-[41px] font-Inter font-bold text-[24px] leading-[41px] text-[#121416]">
              Breaking into Tech: Advice for Newbies
            </h5>
            <div className="self-end w-[183px] h-[21px] flex items-center gap-[16px]">
              <p className="w-[92px] h-[21px] font-Inter font-bold text-[14px] leading-[21px] text-[#242222CC]">
                {date.month} {date.date} {date.year}
              </p>

              <div className="flex items-center gap-[4px] w-[77px] h-[21px]">
                <FaShareAlt
                  className="w-[12px] h-[12.8px] text-[#242222CC]"
                  onClick={handleShareCount}
                />
                <p className="w-[61px] h-[21px] font-Inter font-normal text-[14px] leading-[21px] text-[#242222CC]">
                  {count} shares
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="my-4">
        <h1>ADD FOOTER HERE!</h1>
      </footer>
    </div>
  );
}

export default BlogPage;
