import React, { useState } from "react";
import { blogData } from "../../data"; 

const tabs = ["All", "Design", "Development", "Marketing"];

const BlogSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredBlogs =
    activeTab === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === activeTab);

  return (
    <section className="bg-white py-12 sm:py-16 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl  font-nunito font-bold uppercase mb-4">
          Blog
        </h2>
        <p className="text-lg sm:text-xl font-thin font-nunito text-gray-700 max-w-3xl mx-auto">
          Check back every week for inspiring articles on website design and
          digital marketing to help build and expand your digital presence.
        </p>
      </div>
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md border ${
              activeTab === tab
                ? "bg-black text-white"
                : "bg-white text-black border-gray-300"
            } hover:bg-black hover:text-white transition text-sm sm:text-base`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md hover:shadow-lg transition rounded-lg overflow-hidden"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <p className="text-xs text-gray-500 mb-1">{blog.date}</p>
                <h3 className="text-md font-bold mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-600">{blog.excerpt}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No blogs available for this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
