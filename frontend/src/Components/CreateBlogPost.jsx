import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import uploadIcon from "./assets/upload-icon.svg";
import message from "./assets/Message 4.svg";
import notification from "./assets/Notification 4.svg";
import profile from "./assets/profile.svg";
import backarrow from "./assets/Vector.svg";
import arrowdown from "./assets/arrow-down.svg";

function CreateBlogPost() {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  // const [authorName, setAuthorName] = useState("");
  const [summary, setSummary] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [keyword, setKeyword] = useState([]);
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");
  const [success, setSuccess] = useState("");
  const [selectImage, setSelectImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isUpperCase, setIsUpperCase] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectOption, setSelectOption] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contentRef = useRef(null);

  const validateForm = () => {
    if (!blogTitle.trim()) {
      setError("Title is required.");
      return false;
    }
    if (!blogContent.trim()) {
      setError("Content is required.");
      return false;
    }
    if (!selectOption) {
      setError("Category is required.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Ensure validation passes before proceeding

    setIsSubmitting(true);
    setError(null); // Reset previous errors

    try {
      const formData = new FormData();
      formData.append("title", blogTitle);
      formData.append("content", blogContent);
      formData.append("category", category);
      formData.append("likes", 0);

      if (keyword.length > 0)
        formData.append("keywords", JSON.stringify(keyword));
      if (reference) formData.append("reference", reference);
      if (selectImage) formData.append("image", selectImage);
      if (summary) formData.append("summary", summary);
      if (videoUrl) formData.append("video_url", videoUrl);

      console.log(
        "Submitting Form Data:",
        Object.fromEntries(formData.entries()),
      );

      const response = await axios.post(
        "http://localhost:8000/api/blogs/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        },
      );

      if (response.status === 201) {
        setSuccess("Blog created successfully! 🎉");
        alert("Blog created successfully!");
        clearForm();
      } else {
        throw new Error("Unexpected response status: " + response.status);
      }
    } catch (error) {
      console.error("Error submitting blog:", error);

      // Handle specific errors (e.g., network issues, server errors)
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong!";

      setError(`Oops! Failed to create blog. ${errorMessage}`);
      alert(`Blog creation failed! \n${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearForm = () => {
    setBlogTitle("");
    setBlogContent("");
    setSummary("");
    setVideoUrl("");
    setKeyword([]);
    setCategory("");
    setReference("");
    setSelectImage(null);
    setPreviewUrl();
    setError("");
    setSuccess(" ");
    if (contentRef.current) {
      contentRef.current.innerHTML = "";
    }
  };

  const handleFormatting = (command) => {
    document.execCommand(command, false, null);
  };

  const handleCustomFormatting = (command, value) => {
    document.execCommand(command, false, value);
  };

  const toggleTextCase = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const selectedText = range.toString();

      if (selectedText) {
        const transformedText = isUpperCase
          ? selectedText.toUpperCase()
          : selectedText.toLowerCase();

        document.execCommand("insertText", false, transformedText);

        setIsUpperCase(!isUpperCase);
      }
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("File size exceeds 5MB.");
        return;
      }
      setSelectImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const option = [
    "AI",
    "DevOps",
    "UI/UX",
    "Web3",
    "Data Science",
    "Web Development",
    "Mobile Development",
    "Cybersecurity",
    "Content Writing",
  ];
  const handleOption = (option) => {
    setSelectOption(option);
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-end items-center gap-4 sm:gap-6 py-3 pe-6">
        <img src={message} alt="message icon" className="cursor-pointer" />
        <img
          src={notification}
          alt="notification icon"
          className="cursor-pointer"
        />
        <img src={profile} alt="profile icon" className="cursor-pointer" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-self-center items-center gap-6 py-8 px-4 space-y-6">
          <div className="self-start">
            <Link to="blog-page">
              <img
                src={backarrow}
                className="w-6 cursor-pointer"
                alt="back arrow"
              />
            </Link>
          </div>

          <div className="text-start max-w-4xl text-base md:text-lg">
            <h2 className="text-2xl md:text-4xl font-semibold">
              Create New Blog Post
            </h2>
            <p className="text-gray-600 mt-2">
              All content you add to your blog post must be original. If it is
              your own content from other websites, please use the URL option to
              indicate this. All acknowledgments of sources must be ensured.
            </p>
          </div>

          <div className="w-full max-w-4xl space-y-6">
            <div className="flex flex-col gap-4">
              <label className="text-base sm:text-lg md:text-xl">
                Blog Title
              </label>
              <input
                type="text"
                value={blogTitle}
                placeholder="Enter a title for your Blog"
                className="border px-4 py-2 rounded-md focus:outline-blue-500"
                onChange={(e) => setBlogTitle(e.target.value)}
              />
            </div>

            <h3 className="text-base sm:text-lg md:text-xl">
              Upload Feature Image
            </h3>

            <div className="relative border-2 border-dashed p-6 text-center rounded-lg">
              <label
                htmlFor="fileInput"
                className="cursor-pointer flex flex-col items-center"
              >
                <img src={uploadIcon} alt="upload icon" className="w-16 mb-2" />
                {selectImage ? (
                  <p>{selectImage.name}</p>
                ) : (
                  <>
                    <p>Drag and drop or click to upload an image</p>
                    <span className="text-sm text-gray-500">
                      Max size: 5MB, supported formats: PNG, JPEG
                    </span>
                  </>
                )}
              </label>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
            {previewUrl && (
              <div className="mt-4">
                <img
                  src={previewUrl}
                  alt="Preview"
                  value={selectImage}
                  className="w-full rounded-md"
                />
              </div>
            )}
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto p-4 border rounded-md shadow-sm">
          <div className="flex flex-wrap items-center justify-between border-b pb-2 mb-4 space-x-2">
            <button
              className="p-2 hover:bg-gray-200 rounded-md"
              onClick={toggleTextCase}
              title={isUpperCase ? "Uppercase" : "Lowercase"}
            >
              {isUpperCase ? "Aa" : "Aa"}
            </button>
            <button
              className="p-2 hover:bg-gray-200 rounded-md"
              onClick={() => handleFormatting("bold")}
              title="Bold"
            >
              <b>B</b>
            </button>
            <button
              className="p-2 hover:bg-gray-200 rounded-md"
              onClick={() => handleFormatting("italic")}
              title="Italic"
            >
              <i>I</i>
            </button>
            <button
              className="p-2 hover:bg-gray-200 rounded-md"
              onClick={() => handleFormatting("underline")}
              title="Underline"
            >
              <u>U</u>
            </button>
            <button
              className="p-2 hover:bg-gray-200 rounded-md"
              onClick={() => handleFormatting("insertOrderedList")}
              title="Ordered List"
            >
              &#35;
            </button>
            <button
              className="p-2 hover:bg-gray-200 rounded-md"
              onClick={() => handleFormatting("insertUnorderedList")}
              title="Unordered List"
            >
              &#8226;
            </button>
            <button
              className="p-2 hover:bg-gray-200 rounded-md"
              onClick={() => handleFormatting("justifyLeft")}
              title="Align Left"
            >
              &#8592;
            </button>
            <button
              className="p-2 hover:bg-gray-200 rounded-md"
              onClick={() => handleFormatting("justifyCenter")}
              title="Align Center"
            >
              &#8596;
            </button>
            <button
              className="p-2 hover:bg-gray-200 rounded-md"
              onClick={() => handleFormatting("justifyRight")}
              title="Align Right"
            >
              &#8594;
            </button>
            <button
              className="p-2 hover:bg-gray-200 rounded-md"
              onClick={() => handleFormatting("justifyFull")}
              title="Justify"
            >
              &#8644;
            </button>
            <label
              className="p-2 hover:bg-gray-200 rounded-md cursor-pointer"
              title="Insert Image"
            >
              &#128247;
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            <button
              className="p-2 hover:bg-gray-200 rounded-md"
              onClick={() =>
                handleCustomFormatting("createLink", prompt("Enter link URL"))
              }
              title="Insert Link"
            >
              &#128279;
            </button>
            <button
              className="p-2 hover:bg-gray-200 rounded-md"
              onClick={() => {
                const contentEditable =
                  document.querySelector("[contentEditable]");
                if (contentEditable) {
                  contentEditable.innerHTML = "";
                }
              }}
              title="Clear Formatting"
            >
              &#10006;
            </button>
          </div>

          <div
            contentEditable
            ref={contentRef}
            className="w-full h-40 p-4"
            value={blogContent}
            onInput={(e) => setBlogContent(e.target.innerHTML)}
          ></div>
        </div>
        <div className="w-full max-w-4xl mx-auto mt-4 p-4 flex flex-col justify-center gap-8">
          <div className="flex flex-col gap-4">
            <label className="text-base sm:text-lg md:text-xl">
              Video URL (Optional)
            </label>
            <input
              type="text"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="border px-4 py-2 rounded-md focus:outline-blue-500"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-base sm:text-lg md:text-xl">Summary</label>
            <input
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="border px-4 py-2 rounded-md focus:outline-blue-500"
            />
          </div>
          <div className="flex flex-col gap-4 relative">
            <label className="text-base sm:text-lg md:text-xl">Category</label>
            <input
              type="text"
              placeholder="e.g AI, DevOps, Content Writing..."
              className="border px-4 py-2 rounded-md focus:outline-blue-500 relative inline-block text-left"
              readOnly={true}
              value={selectOption}
              onClick={() => setIsOpen(!isOpen)}
              onChange={(e) => setCategory(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={` absolute top-0 right-4 h-4 w-4 translate-y-14 transform transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <img
                  src={arrowdown}
                  alt="down arrow"
                  width={15}
                  className=" object-contain"
                />
              </span>
            </button>

            {isOpen && (
              <div className="absolute z-10 w-full mt-24 bg-white border rounded-md shadow-lg">
                <ul>
                  {option.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => handleOption(option)}
                      className="px-4 py-2 cursor-pointer hover:text-white  hover:bg-blue-600 "
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-base sm:text-lg md:text-xl">
              Tags/Keywords
            </label>
            <input
              type="text"
              className="border px-4 py-2 rounded-md focus:outline-blue-500"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <span className="text-xs">
              Note: Type & Press enter to enter new Services
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-base sm:text-lg md:text-xl">
              Reference URL
            </label>
            <input
              type="text"
              className="border px-4 py-2 rounded-md focus:outline-blue-500"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="border px-4 py-2 rounded-sm focus:outline-blue-500"
            />
            <label className="text-xs">
              All required fields completed and the data is in correct format
            </label>
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center py-2 container mx-auto px-2 text-center">
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </div>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-end gap-4 container mx-auto px-2 pt-4 my-4 lg:pe-[19rem]">
          <button className="w-full sm:w-48 py-4 font-bold rounded-sm border-2 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-none outline-none focus:bg-blue-600">
            Save as draft
          </button>
          <button className="w-full sm:w-48 py-4 font-bold rounded-sm border-2 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-none outline-none focus:bg-blue-600">
            Preview
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-48 py-4 font-bold rounded-sm border-2 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-none outline-none focus:bg-blue-600"
          >
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateBlogPost;
