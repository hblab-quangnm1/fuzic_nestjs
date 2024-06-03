// Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29

import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASS,
  DB_NAME,

  JWT_SECRET,
  JWT_EXPIRED_TIME,

  NODE_ENV,
  PORT,

  SONG_PATH,
  SONG_EXTENSIONS,
  SONG_MIME_TYPES,
  SONG_FORMATS,
  SONG_DURATION_LIMIT,
  SONG_SAMPLE_SIZES,
  SONG_SAMPLE_RATES,
  SONG_CHANNEL_TYPE,
  SONG_SIZE_LIMIT,

  COMPRESSED_SONG_PATH,
  COMPRESSED_SONG_EXTENSION,
  COMPRESSED_SONG_FORMAT,

  SONG_DOWNLOAD_LOCATION,

  IMAGE_PATH,
  IMAGE_EXTENSIONS,
  IMAGE_MIME_TYPES,
  IMAGE_FORMATS,
  IMAGE_SIZE_LIMIT,
  IMAGE_INVALID_COLOR_MODEL,
  IMAGE_MIN_WIDTH,
  IMAGE_MIN_HEIGHT,
  IMAGE_MAX_WIDTH,
  IMAGE_MAX_HEIGHT,

  SWAGGER_BASE_URL,
  CLIENT_BASE_URL,

  SENDGRID_API_KEY,
  SENDGRID_MAIL_FROM,
  VERIFY_CREATOR_EMAIL_EXPIRED_TIME,

  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  CRYPTO_KEY,
  GOOGLE_REDIRECT_URI,

  REDIS_HOST,
  REDIS_PORT,
  REDIS_PASSWORD,
  REDIS_REFRESH_TOKEN_EXPIRED_TIME,

  ADMIN_COMMISSION_RATE,

  ERROR_LOG_PATH,
  YOUTUBE_REPORT_PATH,
} = process.env;

// Song Upload
const uploadSongPath = SONG_PATH || path.join(__dirname, '..', '..', 'assets', 'songs');

const allowedSongExtensions = SONG_EXTENSIONS ? SONG_EXTENSIONS.split(',') : [];

const allowedSongMimeTypes = SONG_MIME_TYPES ? SONG_MIME_TYPES.split(',') : [];

const allowedSongFormats = SONG_FORMATS ? SONG_FORMATS.split(',') : [];

const allowedSongSampleSizes = SONG_SAMPLE_SIZES
  ? SONG_SAMPLE_SIZES.split(',').map((word) => Number(word))
  : [];

const allowedSongSampleRates = SONG_SAMPLE_RATES
  ? SONG_SAMPLE_RATES.split(',').map((word) => Number(word))
  : [];

// Image upload
const uploadImagePath = IMAGE_PATH || path.join(__dirname, '..', '..', 'assets', 'images');

const allowedImageExtensions = IMAGE_EXTENSIONS ? IMAGE_EXTENSIONS.split(',') : [];

const allowedImageMimeTypes = IMAGE_MIME_TYPES ? IMAGE_MIME_TYPES.split(',') : [];

const allowedImageFormats = IMAGE_FORMATS ? IMAGE_FORMATS.split(',') : [];

// Compress song
const compressSongPath =
  COMPRESSED_SONG_PATH || path.join(__dirname, '..', '..', 'assets', 'compressed-songs');

// Logging
const errorLogPath = ERROR_LOG_PATH || path.join(__dirname, '..', '..', 'logs', 'errors');

// Store Youtube reports
const youtubeReportPath = YOUTUBE_REPORT_PATH || path.join(__dirname, '..', '..', 'reports');

export const GENERAL_CONFIG = {
  DB_HOST,
  DB_PORT: Number(DB_PORT) || 3306,
  DB_USER,
  DB_PASS,
  DB_NAME,

  JWT_SECRET: JWT_SECRET || '',
  JWT_EXPIRED_TIME: JWT_EXPIRED_TIME || '24h',

  NODE_ENV: NODE_ENV || 'development',
  PORT: PORT || 3000,
  GLOBAL_PREFIX: '/api',

  SONG_PATH: uploadSongPath,
  SONG_EXTENSIONS: allowedSongExtensions,
  SONG_MIME_TYPES: allowedSongMimeTypes,
  SONG_FORMATS: allowedSongFormats,
  SONG_DURATION_LIMIT: Number(SONG_DURATION_LIMIT) || 10,
  SONG_CHANNEL_TYPE: SONG_CHANNEL_TYPE || 'stereo',
  SONG_SAMPLE_RATES: allowedSongSampleRates,
  SONG_SAMPLE_SIZES: allowedSongSampleSizes,
  SONG_SIZE_LIMIT: Number(SONG_SIZE_LIMIT) || 1,

  COMPRESSED_SONG_PATH: compressSongPath,
  COMPRESSED_SONG_EXTENSION: COMPRESSED_SONG_EXTENSION || '.mp3',
  COMPRESSED_SONG_FORMAT: COMPRESSED_SONG_FORMAT || 'mp3',

  SONG_DOWNLOAD_LOCATION,

  IMAGE_PATH: uploadImagePath,
  IMAGE_EXTENSIONS: allowedImageExtensions,
  IMAGE_MIME_TYPES: allowedImageMimeTypes,
  IMAGE_FORMATS: allowedImageFormats,
  IMAGE_SIZE_LIMIT: Number(IMAGE_SIZE_LIMIT) || 20,
  IMAGE_MIN_WIDTH: Number(IMAGE_MIN_WIDTH) || 3000,
  IMAGE_MIN_HEIGHT: Number(IMAGE_MIN_HEIGHT) || 3000,
  IMAGE_MAX_WIDTH: Number(IMAGE_MAX_WIDTH) || 20000,
  IMAGE_MAX_HEIGHT: Number(IMAGE_MAX_HEIGHT) || 20000,
  IMAGE_INVALID_COLOR_MODEL: IMAGE_INVALID_COLOR_MODEL || 'cmyk',

  SWAGGER_BASE_URL: SWAGGER_BASE_URL || 'http://localhost:3000',
  CLIENT_BASE_URL: CLIENT_BASE_URL || 'https://fuzic.hblab.dev',

  SENDGRID_API_KEY: SENDGRID_API_KEY || '',
  SENDGRID_MAIL_FROM: SENDGRID_MAIL_FROM || '',
  VERIFY_CREATOR_EMAIL_EXPIRED_TIME: VERIFY_CREATOR_EMAIL_EXPIRED_TIME || '1h',

  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,

  CRYPTO_KEY: CRYPTO_KEY || 'your_key',
  GOOGLE_REDIRECT_URI,

  REDIS_HOST: REDIS_HOST || 'localhost',
  REDIS_PORT: Number(REDIS_PORT) || 6379,
  REDIS_PASSWORD,
  REDIS_REFRESH_TOKEN_EXPIRED_TIME: Number(REDIS_REFRESH_TOKEN_EXPIRED_TIME) || 3600,

  ADMIN_COMMISSION_RATE: Number(ADMIN_COMMISSION_RATE) || 0.1,

  ERROR_LOG_PATH: errorLogPath,
  YOUTUBE_REPORT_PATH: youtubeReportPath,
};
