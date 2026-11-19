import { Image as RNImage } from "react-native";

<<<<<<< HEAD
=======
export const MICHAEL_PROFILE_IMAGE = require("../../assets/images/892527395_1446732390756661_1572721118375895273_n.jpg");

>>>>>>> 7dce7b5b8f3349ae1b2e19320b6394b7f3e311f8
export type Pin = {
  id: string;
  title: string;
  image: number; // result of require("...")
  ratio: number; // width / height
<<<<<<< HEAD
  creator: { name: string; avatarUrl: string };
};

const CREATOR = {
  name: "hunny",
  avatarUrl: "https://picsum.photos/seed/hunny-avatar/96/96",
};

function getImageRatio(file: number): number {
  const resolver = (RNImage as typeof RNImage & {
    resolveAssetSource?: (source: number) => { width?: number; height?: number } | null;
  }).resolveAssetSource;

  const src = typeof resolver === "function" ? resolver(file) : null;
  const width = src?.width ?? 1;
  const height = src?.height ?? 1;
  return height === 0 ? 1 : width / height;
}

function makePin(id: string, file: number, title: string): Pin {
  return { id, title, image: file, ratio: getImageRatio(file), creator: CREATOR };
=======
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
>>>>>>> 7dce7b5b8f3349ae1b2e19320b6394b7f3e311f8
}

// ADD YOUR OWN PICTURES HERE: [require(...), "Title"]
const PICTURES: [number, string][] = [
<<<<<<< HEAD
  [require("../../assets/images/891643561_2356426091845716_4687706369140992844_n.jpg"), "HAIRCUT"],
  [require("../../assets/images/888448471_4615719318641068_8512578049465079858_n.jpg"), "TAMBAY"],
  [require("../../assets/images/888407854_4096480770656804_350955870249950434_n.jpg"), "SHOPING"],
  [require("../../assets/images/890376720_914447678303085_5523996827663347845_n.jpg"), "PIZZA"],
  [require("../../assets/images/888174603_2398683514270619_152508279405433837_n.jpg"), "LAAG"],
  [require("../../assets/images/889835999_1880578862931263_7608454245404921299_n.jpg"), "CUTE"],
=======
  [require("../../assets/images/2766b0bf-91c8-4c9f-b2e0-a016664921d6.jpg"), "MINUTE BURGER"],
  [require("../../assets/images/888739859_1129982489576054_6366492901690551926_n.jpg"), "SCHOOL"],
  [require("../../assets/images/886768338_2053321662041735_1714500721178242390_n.jpg"), "WORK!"],
  [require("../../assets/images/891093714_2436665563577872_9039021648688814826_n.jpg"), "KAI"],
  [require("../../assets/images/886549025_1594530452444767_6270598610508729103_n.jpg"), "SELF"],
  [require("../../assets/images/886741739_1802628674281110_5210075054650421033_n.jpg"), "MILES PARTIDAS"],
  [require("../../assets/images/892527395_1446732390756661_1572721118375895273_n.jpg"), "SELFIE"],
>>>>>>> 7dce7b5b8f3349ae1b2e19320b6394b7f3e311f8
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
