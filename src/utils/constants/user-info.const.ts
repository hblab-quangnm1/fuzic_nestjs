// Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29

import { GENERAL_CONFIG } from '@root/configs/general.config';
import { compileMessage } from '@root/utils/helpers';
import { TEMPLATE_ERROR_MESSAGE } from '@root/utils/constants/error-message.const';
import { UNIT } from '@root/utils/constants/common.const';

const ACCOUNT_TYPES = [
  'savingsAccount',
  'checkingAccount',
  'timeDeposit',
  'foreignCurrencyAccount',
];

const PREFECTURES = [
  'Hokkaido',
  'Aomori',
  'Iwate',
  'Miyagi',
  'Akita',
  'Yamagata',
  'Fukushima',
  'Ibaraki',
  'Tochigi',
  'Gunma',
  'Saitama',
  'Chiba',
  'Tokyo',
  'Kanagawa',
  'Niigata',
  'Toyama',
  'Ishikawa',
  'Fukui',
  'Yamanashi',
  'Nagano',
  'Gifu',
  'Shizuoka',
  'Aichi',
  'Mie',
  'Shiga',
  'Kyoto',
  'Osaka',
  'Hyogo',
  'Nara',
  'Wakayama',
  'Tottori',
  'Shimane',
  'Okayama',
  'Hiroshima',
  'Yamaguchi',
  'Tokushima',
  'Kagawa',
  'Ehime',
  'Kochi',
  'Fukuoka',
  'Saga',
  'Nagasaki',
  'Kumamoto',
  'Oita',
  'Miyazaki',
  'Kagoshima',
  'Okinawa',
];

const USER_INFO_CONSTRAINT = {
  EMAIL_MAX_LENGTH: 254,
  PASSWORD_MIN_LENGTH: 8,
  STAGE_NAME_MAX_LENGTH: 30,
  REAL_NAME_MAX_LENGTH: 50,
  BIO_MAX_LENGTH: 300,
  CHANNEL_MAX_LENGTH: 500,
  PHONE_MAX_LENGTH: 20,
  POSTAL_CODE_MAX_LENGTH: 10,
  ADDRESS_MAX_LENGTH: 100,
  ACCOUNT_HOLDER_MAX_LENGTH: 50,
};

const {
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

const AVATAR_FORMAT = {
  extensions: IMAGE_EXTENSIONS,
  mimeTypes: IMAGE_MIME_TYPES,
};

const USER_INFO_ERROR_MESSAGE = {
  AVATAR_FORMAT: compileMessage(TEMPLATE_ERROR_MESSAGE.FILE_FORMAT_ERROR, {
    formats: IMAGE_FORMATS.map((word) => word.toUpperCase()),
  }),
  AVATAR_SIZE: compileMessage(TEMPLATE_ERROR_MESSAGE.IMAGE_SIZE_EXCEED_LIMIT, {
    limit: `${IMAGE_SIZE_LIMIT}${UNIT.MiB}`,
  }),
  AVATAR_DIMENSIONS: compileMessage(TEMPLATE_ERROR_MESSAGE.INVALID_IMAGE_DIMENSIONS, {
    minWidth: IMAGE_MIN_WIDTH,
    maxWidth: IMAGE_MAX_WIDTH,
    minHeight: IMAGE_MIN_HEIGHT,
    maxHeight: IMAGE_MAX_HEIGHT,
    unit: UNIT.px,
  }),
  AVATAR_COLOR_MODEL: compileMessage(TEMPLATE_ERROR_MESSAGE.INVALID_IMAGE_COLOR_MODEL, {
    colorModel: IMAGE_INVALID_COLOR_MODEL.toUpperCase(),
  }),
};

export { ACCOUNT_TYPES, PREFECTURES, USER_INFO_CONSTRAINT, AVATAR_FORMAT, USER_INFO_ERROR_MESSAGE };
