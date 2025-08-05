import Url from '../models/urlModel.js';
import generateShortId from '../utils/generateShortId.js';

export const shortenUrl = async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  const shortId = generateShortId();
  const newUrl = await Url.create({ originalUrl: url, shortId });
  res.status(201).json({ shortUrl: `${process.env.BASE_URL}/${shortId}` });
};

export const getStats = async (req, res) => {
  const { shortId } = req.params;
  const urlDoc = await Url.findOne({ shortId });
  if (!urlDoc) return res.status(404).json({ error: 'Short URL not found' });

  res.status(200).json({
    originalUrl: urlDoc.originalUrl,
    clicks: urlDoc.clicks,
    createdAt: urlDoc.createdAt,
    expiresAt: urlDoc.expiresAt,
    geoStats: urlDoc.geoStats,
  });
};

export const redirectToOriginal = async (req, res) => {
  const { shortId } = req.params;
  const urlDoc = await Url.findOne({ shortId });
  if (!urlDoc) return res.status(404).json({ error: 'Short URL not found' });

  urlDoc.clicks += 1;
  await urlDoc.save();
  res.redirect(urlDoc.originalUrl);
};
