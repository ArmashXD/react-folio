import React from "react";
import Main from "../components/layout/Main";
import {GET_FORM_API_URL, yourDetails} from "../content";

function Contact() {
  return (
    <Main name="contact" extraClasses="flex justify-center items-center p-4">
      <form
        method="POST"
        action={GET_FORM_API_URL}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Shoot me an email - {yourDetails.email}
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <textarea
          name="message"
          rows="10"
          className="bg-[#ccd6f6] p-2"
          placeholder="Message"
        ></textarea>

        <button className="text-white border-2 rounded-lg hover:bg-pink-600 hover:border-pink-600 duration-300 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </Main>
  );
}

export default Contact;
