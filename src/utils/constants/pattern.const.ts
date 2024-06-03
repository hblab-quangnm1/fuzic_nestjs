// Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29

const ONLY_NUMBERS = /^\d+$/;

const SONG_INFO_PATTERN = {
  ISRC: /^[A-Z]{2}-[A-Z\d]{3}-\d{2}-\d{5}$/,
  JASRAC: /^\d[A-Za-z\d]\d-\d{4}-\d$/,
  NEX_TONE: /^\d{1,12}$/,
  KANA_TITLE: /^[ァ-ン]+$/,
  INTERNATIONAL_TITLE: /.*/,
  DOMESTIC_TITLE: /.*/,
  PERSON_NAME: /.*/,
};

const USER_INFO_PATTERN = {
  EMAIL: /^\w+([.-]\w+)*@\w+([.-]\w+)*\.[a-zA-Z]{2,}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/,
  REAL_NAME: /.*/,
  PHONE_NUMBER: /^\+?\d+$/,
  POSTAL_CODE: ONLY_NUMBERS,
  ADDRESS: /.*/,
  BANK_CODE: ONLY_NUMBERS,
  BRANCH_CODE: ONLY_NUMBERS,
  ACCOUNT_HOLDER: /^[A-Z0-9ァ-ン().\-\u0020]+$/,
  ACCOUNT_NUMBER: ONLY_NUMBERS,
};

export { SONG_INFO_PATTERN, USER_INFO_PATTERN };
