const axios = require('axios');

module.exports = async (req, res) => {
  const subscriber = req.body;

  try {
    const { data } = await axios.get(`https://us21.api.mailchimp.com/3.0/lists/${process.env.LISTIDKEY}/members?email=${subscriber.email_address}`, {
      headers: {
        'Authorization': `auth ${process.env.MAILCHIMP_API_KEY}`
      }
    });

    if (data.members.length > 0) {
      console.log('Email already exists:',data);
      return res.status(400).json({ error: 'Email already exists' });
    }

    const { data: result } = await axios.post(`https://us21.api.mailchimp.com/3.0/lists/${process.env.LISTIDKEY}/members`, subscriber, {
      headers: {
        'Authorization': `auth ${process.env.MAILCHIMP_API_KEY}`
      }
    });

    // console.log('subscriber',subscriber);

    res.json(result);
  } catch (error) {
    res.status(error.response.status).json({ error: error.response.data });
  }
};
