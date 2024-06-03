// Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29

import { GENERAL_CONFIG } from '@root/configs/general.config';

import { compileMessage } from '@root/utils/helpers';
import { TEMPLATE_ERROR_MESSAGE } from '@root/utils/constants/error-message.const';
import { UNIT } from '@root/utils/constants/common.const';

const {
  SONG_EXTENSIONS,
  SONG_MIME_TYPES,
  SONG_FORMATS,
  SONG_DURATION_LIMIT,
  SONG_SAMPLE_SIZES,
  SONG_SAMPLE_RATES,
  SONG_CHANNEL_TYPE,
  SONG_SIZE_LIMIT,

  IMAGE_EXTENSIONS,
  IMAGE_MIME_TYPES,
  IMAGE_FORMATS,
  IMAGE_SIZE_LIMIT,
  IMAGE_MIN_WIDTH,
  IMAGE_MAX_WIDTH,
  IMAGE_MIN_HEIGHT,
  IMAGE_MAX_HEIGHT,
  IMAGE_INVALID_COLOR_MODEL,
} = GENERAL_CONFIG;

const SONG_SOURCE_FORMAT = {
  extensions: SONG_EXTENSIONS,
  mimeTypes: SONG_MIME_TYPES,
};

const SONG_THUMBNAIL_FORMAT = {
  extensions: IMAGE_EXTENSIONS,
  mimeTypes: IMAGE_MIME_TYPES,
};

const NUMBER_OF_CHANNELS = {
  mono: 1,
  stereo: 2,
};

enum CopyrightManagementType {
  SELF_MANAGED = 'Self-managed',
  PROVIDER = 'Provider',
}

enum CopyrightProvider {
  JASRAC = 'JASRAC',
  NEX_TONE = 'NexTone',
}

const REVENUE_SHARE_RATES = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const GENRES = [
  'J-Pop',
  'Hip Hop/Rap',
  'Instrumental',
  'Alternative',
  'Anime/Game',
  'Jazz',
  'Rock',
  'Electronic',
  'Dance',
  'R&B/Soul',
  'Vocaloid',
  'Reggae',
  'Techno',
  'House',
  'K-Pop',
  'Pop',
  'Karaoke',
  'TV/Drama/Commercial/Movie',
  'Idol (Female)',
  'Idol (Male)',
  'Country',
  'Kids',
  'Comedy',
  'Psychedelic',
  'Sound Effects',
  'Soundtrack',
  'Spoken Word',
  'Trance',
  'New Age',
  'Punk',
  'Visual',
  'Fitness/Exercise',
  'Folk',
  'Blues',
  'Heavy Metal',
  'Holiday',
  'Bossa Nova',
  'Latin',
  'World',
  'Popular Songs',
  'Enka/Japanese Traditional',
];

const LANGUAGES = [
  'Japanese',
  'English',
  'Korean',
  'Cantonese',
  'Taiwanese',
  'Mandarin',
  'Icelandic',
  'Azerbaijani',
  'Afrikaans',
  'Arabic',
  'Armenian',
  'Italian',
  'Indonesian',
  'Ukrainian',
  'Urdu',
  'Estonian',
  'Dutch',
  'Kazakh',
  'Catalan',
  'Kannada',
  'Greek',
  'Gujarati',
  'Khmer',
  'Kurdish',
  'Croatian',
  'Quechua',
  'Xhosa',
  'Corsican',
  'Samoan',
  'Sanskrit',
  'Sinhala',
  'Georgian',
  'Swedish',
  'Scottish Gaelic',
  'Spanish',
  'Slovak',
  'Slovenian',
  'Swahili',
  'Serbian',
  'Somali',
  'Tagalog',
  'Tajik',
  'Tamil',
  'Czech',
  'Tibetan',
  'Zhuang',
  'Danish',
  'German',
  'Nahuatl',
  'Nepali',
  'Norwegian',
  'Haitian',
  'Hausa',
  'Hungarian',
  'Basque',
  'Bangla',
  'Pashto',
  'Punjabi',
  'Hindi',
  'Fijian',
  'Filipino',
  'Finnish',
  'French',
  'Bulgarian',
  'Vietnamese',
  'Hebrew',
  'Persian',
  'Belarusian',
  'Bengali',
  'Polish',
  'Bosnian',
  'Portuguese',
  'Maori',
  'Macedonian',
  'Marathi',
  'Malagasy',
  'Malayalam',
  'Burmese',
  'Mongolian',
  'Montenegrin',
  'Yoruba',
  'Lao',
  'Latvian',
  'Lithuanian',
  'Romanian',
  'Luxembourgish',
  'Rwandan',
  'Lesotho',
  'Russian',
  'Wallov',
  'Zaza',
  'Setswana',
  'Sotho',
  'Turkish',
  'Maltese',
  'Welsh',
  'Galician',
];

const SONG_ERROR_MESSAGE = {
  SOURCE_FORMAT: compileMessage(TEMPLATE_ERROR_MESSAGE.FILE_FORMAT_ERROR, {
    formats: SONG_FORMATS.map((word) => word.toUpperCase()),
  }),
  SOURCE_SIZE: compileMessage(TEMPLATE_ERROR_MESSAGE.AUDIO_SIZE_EXCEED_LIMIT, {
    limit: `${SONG_SIZE_LIMIT}${UNIT.GiB}`,
  }),
  SOURCE_DURATION: compileMessage(TEMPLATE_ERROR_MESSAGE.AUDIO_DURATION_EXCEED_LIMIT, {
    limit: `${SONG_DURATION_LIMIT}${UNIT.minute}`,
  }),
  SOURCE_SAMPLE_SIZE: compileMessage(TEMPLATE_ERROR_MESSAGE.INVALID_AUDIO_SAMPLE_SIZE, {
    sampleSizes: SONG_SAMPLE_SIZES.map((size) => `${size}${UNIT.bit}`),
  }),
  SOURCE_SAMPLE_RATE: compileMessage(TEMPLATE_ERROR_MESSAGE.INVALID_AUDIO_SAMPLE_RATES, {
    sampleRates: SONG_SAMPLE_RATES.map((rate) => `${rate}${UNIT.kHz}`),
  }),
  SOURCE_CHANNEL: compileMessage(TEMPLATE_ERROR_MESSAGE.INVALID_AUDIO_CHANNEL_TYPE, {
    channelType: SONG_CHANNEL_TYPE,
  }),
  THUMBNAIL_FORMAT: compileMessage(TEMPLATE_ERROR_MESSAGE.FILE_FORMAT_ERROR, {
    formats: IMAGE_FORMATS.map((word) => word.toUpperCase()),
  }),
  THUMBNAIL_SIZE: compileMessage(TEMPLATE_ERROR_MESSAGE.IMAGE_SIZE_EXCEED_LIMIT, {
    limit: `${IMAGE_SIZE_LIMIT}${UNIT.MiB}`,
  }),
  THUMBNAIL_DIMENSIONS: compileMessage(TEMPLATE_ERROR_MESSAGE.INVALID_IMAGE_DIMENSIONS, {
    minWidth: IMAGE_MIN_WIDTH,
    maxWidth: IMAGE_MAX_WIDTH,
    minHeight: IMAGE_MIN_HEIGHT,
    maxHeight: IMAGE_MAX_HEIGHT,
    unit: UNIT.px,
  }),
  THUMBNAIL_COLOR_MODEL: compileMessage(TEMPLATE_ERROR_MESSAGE.INVALID_IMAGE_COLOR_MODEL, {
    colorModel: IMAGE_INVALID_COLOR_MODEL.toUpperCase(),
  }),
};

enum CreatorPublicSongListType {
  TRENDING = 'TRENDING',
  RECOMMEND = 'RECOMMEND',
  NEW = 'NEW',
}

enum CreatorSongListType {
  AVAILABLE = 'AVAILABLE',
  USED = 'USED',
  TRENDING = 'TRENDING',
  RECOMMEND = 'RECOMMEND',
  NEW = 'NEW',
}

enum CreatorSongListMode {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

const SONG_INFO_CONSTRAINT = {
  TITLE_MAX_LENGTH: 100,
  INTRO_MAX_LENGTH: 300,
  PERSON_NAME_MAX_LENGTH: 100,
  MIN_BPM: 0.001,
  MAX_BPM: 999,
  BPM_PRECISION: 3, // number of digits after decimal point
};

export {
  SONG_ERROR_MESSAGE,
  SONG_SOURCE_FORMAT,
  SONG_THUMBNAIL_FORMAT,
  REVENUE_SHARE_RATES,
  GENRES,
  LANGUAGES,
  NUMBER_OF_CHANNELS,
  SONG_INFO_CONSTRAINT,
  CopyrightManagementType,
  CopyrightProvider,
  CreatorSongListType,
  CreatorPublicSongListType,
  CreatorSongListMode,
};
