import { Image as RNImage } from "react-native";

export const MICHAEL_PROFILE_IMAGE = require("../../assets/images/892527395_1446732390756661_1572721118375895273_n.jpg");

export type Pin = {
  id: string;
  title: string;
  image: number; // result of require("...")
  ratio: number; // width / height
  creator: { name: string; avatarUrl: number };
};

const CREATOR_NAMES = [
  "Michael",
  "Michael",
  "Michael",
  "Michael",
  "Michael",
  "Michael",
  "Michael",
  "Michael",
  "Michael",
  "Michael",
  "Michael",
  "Michael",
];

function makePin(id: string, file: number, title: string): Pin {
  const resolveAssetSource =
    (RNImage as any).resolveAssetSource ?? (RNImage as any).default?.resolveAssetSource;
  const src = typeof resolveAssetSource === "function" ? resolveAssetSource(file) : undefined;

  const creatorName = CREATOR_NAMES[Number(id) % CREATOR_NAMES.length];

  return {
    id,
    title,
    image: file,
    ratio: (src?.width ?? 1) / (src?.height ?? 1),
    creator: {
      name: creatorName,
      avatarUrl: MICHAEL_PROFILE_IMAGE,
    },
  };
}

// ADD YOUR OWN PICTURES HERE: [require(...), "Title"]
const PICTURES: [number, string][] = [
  [require("../../assets/images/2766b0bf-91c8-4c9f-b2e0-a016664921d6.jpg"), "MINUTE BURGER"],
  [require("../../assets/images/888739859_1129982489576054_6366492901690551926_n.jpg"), "SCHOOL"],
  [require("../../assets/images/886768338_2053321662041735_1714500721178242390_n.jpg"), "WORK!"],
  [require("../../assets/images/891093714_2436665563577872_9039021648688814826_n.jpg"), "KAI"],
  [require("../../assets/images/886549025_1594530452444767_6270598610508729103_n.jpg"), "SELF"],
  [require("../../assets/images/886741739_1802628674281110_5210075054650421033_n.jpg"), "MILES PARTIDAS"],
  [require("../../assets/images/892527395_1446732390756661_1572721118375895273_n.jpg"), "SELFIE"],
];

export const BASE_PINS: Pin[] = PICTURES.map(([file, title], i) =>
  makePin(String(i + 1), file, title)
);

/** Page 0 is your list; later pages repeat it (rotated) so the feed keeps scrolling. */
export function makePage(page: number): Pin[] {
  if (page === 0) return BASE_PINS;
  const n = page % BASE_PINS.length;
  return [...BASE_PINS.slice(n), ...BASE_PINS.slice(0, n)].map((p) => ({
    ...p,
    id: `${p.id}~${page}`,
  }));
}
