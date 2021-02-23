const fetch= require(`node-fetch`)
fetch('https://textbelt.com/text', {
  method: 'post',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    phone: '5548999052099',
    message: 'Hello world',
    key: '20b2c8e77b34473723fb87533230021c7fed1b01CQLhTQOxy9jwuXxMsp7M83nNe'
  }),
}).then(response => {
  return response.json();
}).then(data => {
  console.log(data);
});