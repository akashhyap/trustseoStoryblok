const axios = require('axios');

module.exports = async (req, res) => {
  const subscriber = req.body;
  const { data } = await axios.post(`https://us21.api.mailchimp.com/3.0/lists/${process.env.LISTIDKEY}/members`, subscriber, {
    headers: {
      'Authorization': `auth ${process.env.MAILCHIMP_API_KEY}`
    }
  });
  res.json(data);
};
