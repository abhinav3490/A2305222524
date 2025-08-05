import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

/**
 * Sends a batch of URLs to be shortened.
 * @param {Array} entries - Array of { originalUrl, validity, code }
 * @returns {Array} - Array of { originalUrl, code, expiresAt }
 */
export async function shortenUrls(entries) {
  try {
    const response = await axios.post(`${BASE_URL}/shorten`, {
      urls: entries.map(e => ({
        originalUrl: e.originalUrl,
        validity: Number(e.validity),
        code: e.code || undefined,
      })),
    });

    return response.data;
  } catch (err) {
    console.error('API error (shortenUrls):', err);
    throw err;
  }
}

/**
 * Fetches analytics for all shortened URLs.
 * @returns {Array} - Array of { code, originalUrl, clicks, createdAt, expiresAt }
 */
export async function fetchStats() {
  try {
    const response = await axios.get(`${BASE_URL}/stats`);
    return response.data;
  } catch (err) {
    console.error('API error (fetchStats):', err);
    throw err;
  }
}

/**
 * Resolves a short code to its original URL.
 * @param {string} code - Shortened code
 * @returns {Object} - { originalUrl }
 */
export async function resolveCode(code) {
  try {
    const response = await axios.get(`${BASE_URL}/resolve/${code}`);
    return response.data;
  } catch (err) {
    console.error(`API error (resolveCode for ${code}):`, err);
    throw err;
  }
}