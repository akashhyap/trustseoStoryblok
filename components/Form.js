import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import { useEffect, useState } from "react";
import axios from "axios";
// import cors from "../pages/api/cors";

const Contact = ({ blok }) => {
  const [formData, setFormData] = useState({});

//   console.log('blok', blok);
  useEffect(() => {
    axios
      .get(`https://api.storyblok.com/v1/cdn/stories/253906235?token=a1W9qP01jDYFIPFDJYqd2wtt`)
      .then(response => {
        const mailchimpApiKey  = response.data.story.content.mailchimpApiKey;
        const listId  = response.data.story.content._uid;

        console.log('mailcresponsehimpApiKey',  mailchimpApiKey);
        console.log('listId',  listId);
        console.log('response',  response);
       
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
        `https://trustseo-storyblok.vercel.app/api/`,
        {
          subscriber,
          listId: formData.listId,
          mailchimpApiKey: formData.mailchimpApiKey
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
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" required />
      </label>
      <label>
        Message:
        <textarea name="message" required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );

};

export default Contact;