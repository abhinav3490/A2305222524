const app = express();
app.use(cors());
app.use(express.json());

connectDB(); // Connect to MongoDB

app.use('/api/v1', urlRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
