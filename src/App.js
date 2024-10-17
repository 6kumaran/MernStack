import path from 'path';
import express from 'express';
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Serve the React frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
