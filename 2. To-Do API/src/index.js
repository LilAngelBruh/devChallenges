import app from './app/app.js';

//SETTINGS
const port = process.env.PORT || 3000;

//LISTENING
app.listen(port, () => {
  console.log("listening in: ", port);
});
