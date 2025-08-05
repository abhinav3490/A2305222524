import express from 'express';
import { shortenUrl, getStats, redirectToOriginal } from '../controllers/urlController.js';

const router = express.Router();

router.post('/shorten', shortenUrl);
router.get('/statistics/:shortId', getStats);
router.get('/:shortId', redirectToOriginal);

export default router;
