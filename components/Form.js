import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import { useEffect, useState } from "react";
import axios from "axios";
// import cors from "../pages/api/cors";

const Contact = ({ blok }) => {
  const [formData, setFormData] = useState({});

//   console.log('blok', blok);
  useEffect(() => {
    axios
      .get(`https://api.storyblok.com/v1/cdn/stories/${process.env.NEXT_PUBLIC_STORYID}?token=${process.env.NEXT_PUBLIC_SITETOKKEN}`)
      .then(response => {
        const mailchimpApiKey  = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
        const listId  = response.data.story.content._uid;

        // console.log('mailcresponsehimpApiKey',  mailchimpApiKey);
     
       
        setFormData({ listId, mailchimpApiKey });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('test', formData);
    const { email, name, phone, message } = e.target.elements;
    try {
      const subscriber = {
        email_address: email.value,
        status: 'subscribed',
        merge_fields: {
          FNAME: name.value,
          PHONE: phone.value,
          MESSAGE: message.value
        }
      };
      const res = await axios.post(
        `https://trustseo-storyblok.vercel.app/api/subscribe`,
        {
          subscriber,
          listId: formData.listId,
          mailchimpApiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY
        }
      );
  
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-7/12 m-auto text-md md:text-lg">
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" />
      </label>
      <label>
        Message:
        <textarea name="message" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );

};

export default Contact;