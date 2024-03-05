const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const hospitalsRoute = require('./routes/hospitals');

app.use(express.json());
app.use(cors());

// app.get('/message', (req, res) => {
//   res.json({ message: "Hello from backend!" });
// })

app.use('/api', hospitalsRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
