import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import { useEffect, useState } from "react";
import axios from "axios";
// import cors from "../pages/api/cors";

const Contact = ({ blok }) => {
  const [formData, setFormData] = useState({});

  //   console.log('blok', blok);
  useEffect(() => {
    axios
      .get(
        `https://api.storyblok.com/v1/cdn/stories/${process.env.NEXT_PUBLIC_STORYID}?token=${process.env.NEXT_PUBLIC_SITETOKKEN}`
      )
      .then((response) => {
        const mailchimpApiKey = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
        const listId = response.data.story.content._uid;

        // console.log('mailcresponsehimpApiKey',  mailchimpApiKey);

        setFormData({ listId, mailchimpApiKey });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name, phone, message } = e.target.elements;
    try {
      const subscriber = {
        email_address: email.value,
        status: "subscribed",
        merge_fields: {
          FNAME: name.value,
          PHONE: phone.value,
          MESSAGE: message.value,
        },
      };
      const res = await axios.post(
        `https://trustseo-storyblok.vercel.app/api/subscribe`,
        subscriber
      );
      // return res.data;
      console.log(res.data);
    } catch (err) {
      if (err.response.status === 400) {
        // The email address already exists in the Mailchimp list
        alert("Email already exists");
        // Show the error message on the frontend
        // e.g. setError("Email already exists");
      } else {
        console.error(err);
      }
    }
  };

  return (
    <div className="md:w-7/12 m-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full md:w-7/12 m-auto text-md md:text-lg bg-white px-4 py-5 sm:p-6 border shadow sm:rounded-md"
      >
        <label className="mb-3">
          Name:
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full rounded-md border py-1 px-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </label>
        <label className="mb-3">
          Email:
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border py-1 px-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </label>
        <label className="mb-3">
          Phone:
          <input
            type="tel"
            name="phone"
            className="mt-1 block w-full rounded-md border py-1 px-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </label>
        <label className="mb-3">
          Message:
          <textarea
            name="message"
            rows="3"
            className="mt-1 block w-full rounded-md border py-1 px-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </label>
        <button
          type="submit"
          className="capitalize border border-logo-red bg-logo-red hover:bg-transparent text-white hover:text-logo-red transition-colors font-poppins text-sm px-5 py-3 mt-2 rounded-md "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
