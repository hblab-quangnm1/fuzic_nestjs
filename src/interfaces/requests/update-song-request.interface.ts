/**
 * Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29
 *
 * @swagger
 * components:
 *   schemas:
 *     UpdateSongRequest:
 *       type: object
 *       required:
 *         - domesticTitle
 *         - kanaTitle
 *         - overseasTitle
 *         - revenueShareRate
 *         - genre
 *         - duration
 *         - bpm
 *         - language
 *         - explicitContent
 *         - vocalsWithLyrics
 *         - copyrightManagementType
 *         - composer
 *         - demonstrator
 *         - isrcAvailable
 *       properties:
 *         domesticTitle:
 *           type: string
 *           description: Domestic title
 *         kanaTitle:
 *           type: string
 *           description: Kana title
 *         overseasTitle:
 *           type: string
 *           description: Overseas title
 *         description:
 *           type: string
 *           description: Description
 *         thumbnail:
 *           type: string
 *           format: binary
 *           description: Thumbnail
 *         revenueShareRate:
 *           type: number
 *           description: Revenue share rate
 *           enum: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
 *         genre:
 *           type: string
 *           description: Song genre
 *           enum: ["J-Pop", "Hip Hop/Rap", "Instrumental", "Alternative", "Anime/Game", "Jazz", "Rock", "Electronic", "Dance", "R&B/Soul", "Vocaloid", "Reggae", "Techno", "House", "K-Pop", "Pop", "Karaoke", "TV/Drama/Commercial/Movie", "Idol (Female)", "Idol (Male)", "Country", "Kids", "Comedy", "Psychedelic", "Sound Effects", "Soundtrack", "Spoken Word", "Trance", "New Age", "Punk", "Visual", "Fitness/Exercise", "Folk", "Blues", "Heavy Metal", "Holiday", "Bossa Nova", "Latin", "World", "Popular Songs", "Enka/Japanese Traditional"]
 *         duration:
 *           type: string
 *           description: Duration in format 'mmss'
 *         bpm:
 *           type: number
 *           description: Beats per minute
 *         language:
 *           type: string
 *           description: Song language
 *           enum: ["Japanese", "English", "Korean", "Cantonese", "Taiwanese", "Mandarin", "Icelandic", "Azerbaijani", "Afrikaans", "Arabic", "Armenian", "Italian", "Indonesian", "Ukrainian", "Urdu", "Estonian", "Dutch", "Kazak", "Catalan", "Kannada", "Greek", "Gujarati", "Khmer", "Kurdish", "Croatian", "Quechua", "Xhosa", "Corsican", "Samoan", "Sanskrit", "Sinhala", "Georgian", "Swedish", "Scottish Gaelic", "Spanish", "Slovak", "Slovenian", "Swahili", "Serbian", "Somali", "Tagalog", "Tajik", "Tamil", "Czech", "Tibetan", "Zhuang", "Danish", "German", "Nahuatl language", "Nepali", "Norwegian", "Haitian", "Hausa", "Hungarian", "Basque", "Bangla", "Pashto", "Punjabi", "Hindi", "Fijian", "Filipino", "Finnish", "French", "Bulgarian", "Vietnamese", "Hebrew", "Persian", "Belarusian", "Bengali", "Polish", "Bosnian", "Portuguese", "Maori", "Macedonian", "Marathi", "Malagasy", "Malayalam", "Burmese", "Mongolian", "Montenegrin", "Yoruba", "Lao", "Latvian", "Lithuanian", "Romanian", "Luxembourgish", "Rwandan", "Lesotho", "Russian", "Wallov", "Zaza", "Setswana", "Sotho", "Turkish", "Maltese", "Welsh", "Galician"]
 *         explicitContent:
 *           type: boolean
 *           description: Indicates if the song has explicit content
 *         vocalsWithLyrics:
 *           type: boolean
 *           description: Indicates if the song has vocals with lyrics
 *         copyrightManagementType:
 *           type: string
 *           description: Copyright management type
 *           enum: ["Self-managed", "Provider"]
 *         copyrightProvider:
 *           type: string
 *           description: Copyright provider (required if copyrightManagementType is 'Provider', forbidden otherwise)
 *           enum: ["JASRAC", "NexTone"]
 *         copyrightProviderCode:
 *           type: string
 *           description: Copyright provider code (required if copyrightManagementType is 'Provider', forbidden otherwise)
 *         lyricist:
 *           type: string
 *           description: Lyricist (required if vocalsWithLyrics is true, forbidden otherwise)
 *         composer:
 *           type: string
 *           description: Composer
 *         demonstrator:
 *           type: string
 *           description: Demonstrator
 *         isrcAvailable:
 *           type: boolean
 *           description: Indicates if the song has ISRC code
 *         isrcCode:
 *           type: string
 *           description: ISRC code (required if isrcAvailable is true, forbidden otherwise)
 */

import { CopyrightManagementType, CopyrightProvider } from '@root/utils/constants';

export interface UpdateSongRequest {
  domesticTitle: string;
  kanaTitle: string;
  overseasTitle: string;
  description: string;
  revenueShareRate: number;
  genre: string;
  duration: number;
  bpm: number;
  language: string;
  explicitContent: boolean;
  vocalsWithLyrics: boolean;
  copyrightManagementType: CopyrightManagementType;
  copyrightProvider?: CopyrightProvider;
  copyrightProviderCode?: string;
  lyricist?: string;
  composer: string;
  demonstrator: string;
  isrcAvailable: boolean;
  isrcCode?: string;
}
