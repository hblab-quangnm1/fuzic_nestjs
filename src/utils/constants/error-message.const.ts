// Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29

export enum ERROR_MESSAGE {
  // General
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  BAD_REQUEST = 'BAD_REQUEST',

  // Entity
  ENTITY_NOT_FOUND = 'ENTITY_NOT_FOUND',
  ENTITY_EXISTED = 'ENTITY_EXISTED',

  // Profile completeness
  INCOMPLETE_PROFILE = 'INCOMPLETE_PROFILE',
  MUST_UPDATE_PROFILE = 'MUST_UPDATE_PROFILE',

  // File
  FILE_NOT_FOUND = 'FILE_NOT_FOUND',
  UNSUPPORTED_FILE_FORMAT = 'UNSUPPORTED_FILE_FORMAT',

  // Audio
  ANALYZE_AUDIO_FAILED = 'ANALYZE_AUDIO_FAILED',
  ANALYZE_IMAGE_FAILED = 'ANALYZE_IMAGE_FAILED',
  COMPRESS_AUDIO_FAILED = 'COMPRESS_AUDIO_FAILED',

  // Image
  NOT_SQUARE_IMAGE = 'NOT_SQUARE_IMAGE',

  // Content ID
  CAN_NOT_UPDATE_CONTENT_ID = 'CAN_NOT_UPDATE_CONTENT_ID',

  // Song details / List of Song Users
  NOT_YOUR_SONG = 'NOT_YOUR_SONG',

  // Song register
  INVALID_REMAINING_SECONDS = 'INVALID_REMAINING_SECONDS',

  // Login
  EMAIL_UNVERIFIED = 'EMAIL_UNVERIFIED',
  INVALID_LOGIN = 'INVALID_LOGIN',
  INVALID_PASSWORD = 'INVALID_PASSWORD',

  // Change password
  NEW_PASSWORD_IS_OLD_PASSWORD = 'NEW_PASSWORD_IS_OLD_PASSWORD',
  INVALID_OLD_PASSWORD = 'INVALID_OLD_PASSWORD',

  // Change email
  NEW_EMAIL_IS_OLD_EMAIL = 'NEW_EMAIL_IS_OLD_EMAIL',
  CONFIRM_NEW_EMAIL_NOT_MATCH = 'CONFIRM_NEW_EMAIL_NOT_MATCH',
  USER_WITH_OLD_EMAIL_NOT_FOUND = 'USER_WITH_OLD_EMAIL_NOT_FOUND',
  NEW_EMAIL_USED_BY_ANOTHER_USER = 'NEW_EMAIL_USED_BY_ANOTHER_USER',

  // User Register and verification
  CAN_NOT_SEND_VERIFY_EMAIL = 'CAN_NOT_SEND_VERIFY_EMAIL',
  CANNOT_VERIFY_EMAIL = 'CANNOT_VERIFY_EMAIL',
  REDIRECT_URL_NOT_FOUND = 'REDIRECT_URL_NOT_FOUND',
  INVALID_EMAIL = 'INVALID_EMAIL',
  EMAIL_ALREADY_EXISTS = 'EMAIL_ALREADY_EXISTS',

  // Connect Youtube channel
  GOOGLE_AUTH_CODE_NOT_FOUND = 'GOOGLE_AUTH_CODE_NOT_FOUND',
  INVALID_GOOGLE_AUTH_CODE = 'INVALID_GOOGLE_AUTH_CODE',
  GOOGLE_ACCESS_TOKEN_NOT_FOUND = 'GOOGLE_ACCESS_TOKEN_NOT_FOUND',
  GOOGLE_REFRESH_TOKEN_NOT_FOUND = 'GOOGLE_REFRESH_TOKEN_NOT_FOUND',
  CANNOT_RETRIEVE_GOOGLE_EMAIL = 'CANNOT_RETRIEVE_GOOGLE_EMAIL',
  USER_HAS_NOT_PROVIDED_YOUTUBE_API_ACCESS = 'USER_HAS_NOT_PROVIDED_YOUTUBE_API_ACCESS',
  USER_HAS_NOT_YOUTUBE_CHANNEL = 'USER_HAS_NOT_YOUTUBE_CHANNEL',
  INVALID_CHANNEL_ID = 'INVALID_CHANNEL_ID',
  CHANNEL_CONNECTED_ON_ANOTHER_ACCOUNT = 'CHANNEL_CONNECTED_ON_ANOTHER_ACCOUNT',

  // JWT error
  INVALID_TOKEN = 'INVALID_TOKEN',
  TOKEN_NOT_FOUND = 'TOKEN_NOT_FOUND',

  // Youtube API
  REPORT_JOB_ID_NOT_FOUND = 'REPORT_JOB_ID_NOT_FOUND',
  REVENUE_REPORTS_NOT_FOUND = 'REVENUE_REPORTS_NOT_FOUND',
  REPORT_DOWNLOAD_URL_NOT_FOUND = 'REPORT_DOWNLOAD_URL_NOT_FOUND',

  // Un-used (To be deleted)
  SONG_DURATION_EXCEEDS_TEN_MINUTES = 'SONG_DURATION_EXCEEDS_TEN_MINUTES',
  PAGE_IS_REQUIRED = 'PAGE_IS_REQUIRED',
  SIZE_IS_REQUIRED = 'SIZE_IS_REQUIRED',
  PAGE_INVALID = 'PAGE_INVALID',
  SIZE_INVALID = 'SIZE_INVALID',
  ARTIST_ID_IS_REQUIRED = 'ARTIST_ID_IS_REQUIRED',
}

export enum TEMPLATE_ERROR_MESSAGE {
  // File
  FILE_FORMAT_ERROR = 'FILE_FORMAT_ERROR',

  // Audio
  AUDIO_DURATION_EXCEED_LIMIT = 'AUDIO_DURATION_EXCEED_LIMIT',
  AUDIO_SIZE_EXCEED_LIMIT = 'AUDIO_SIZE_EXCEED_LIMIT',
  INVALID_AUDIO_CHANNEL_TYPE = 'INVALID_AUDIO_CHANNEL_TYPE',
  INVALID_AUDIO_SAMPLE_SIZE = 'INVALID_AUDIO_SAMPLE_SIZE',
  INVALID_AUDIO_SAMPLE_RATES = 'INVALID_AUDIO_SAMPLE_RATES',

  // Image
  IMAGE_SIZE_EXCEED_LIMIT = 'IMAGE_SIZE_EXCEED_LIMIT',
  INVALID_IMAGE_DIMENSIONS = 'INVALID_IMAGE_DIMENSIONS',
  INVALID_IMAGE_COLOR_MODEL = 'INVALID_IMAGE_COLOR_MODEL',
}
