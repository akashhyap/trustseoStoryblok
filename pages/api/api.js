const axios = require('axios');

module.exports = async (req, res) => {
  const { data } = await axios.get('https://us21.api.mailchimp.com/3.0/lists/a058b618-00ce-48ab-8177-9a39efb5c159/members', {
    headers: {
      'Authorization': `apikey 618cbe7ea0de04c73a7468117139c1cb-us21`
    }
  });

  res.json(data);
};
