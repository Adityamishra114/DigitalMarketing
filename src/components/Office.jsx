import React from "react";
import { officeData } from "../../data";

const Office = () => {
  return (
    <section className="py-16 bg-white text-[#0e3477]">
      <div className="max-w-6xl w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-[#444444] font-opensans">
            {officeData.heading}{" "}
            <span className="text-[#0e3477]">{officeData.highlight}</span>
          </h2>
          <p className="font-nunito text-base">{officeData.locationName}</p>
          <p className="text-[15px] leading-relaxed font-nunito">
            {officeData.address}
          </p>
          <p className="text-[15px] font-nunito">📧 {officeData.email}</p>
          <p className="text-[15px] font-nunito">📞 {officeData.phone}</p>

          <iframe
            title="Google Map Location"
            src={officeData.mapSrc}
            className="w-full h-48 rounded-md border"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
          <form className="space-y-4 font-nunito">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name *"
                className="border px-4 py-2 rounded w-full focus:outline-none text-[15px]"
              />
              <input
                type="email"
                placeholder="Email *"
                className="border px-4 py-2 rounded w-full focus:outline-none text-[15px]"
              />
            </div>
            <input
              type="text"
              placeholder="Phone *"
              className="border px-4 py-2 rounded w-full focus:outline-none text-[15px]"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="border px-4 py-2 rounded w-full focus:outline-none text-[15px]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#0e3477] text-white w-full py-3 font-semibold rounded hover:bg-[#0d2f6c] transition text-[15px]"
            >
              Contact Us
            </button>
            <p className="text-xs text-center mt-2">
              By clicking the above button, you agree to our{" "}
              <span className="text-[#0e3477] underline cursor-pointer">
                Privacy Policy
              </span>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Office;
