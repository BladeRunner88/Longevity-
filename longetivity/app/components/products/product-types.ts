export type ProductTab = "cellular" | "restore" | "sleep" | "system";

export type ProductSlug = "cellular" | "restore" | "sleep";

export type ProductDetailCopy = {
  slug: ProductSlug;
  detailId: string;
  dotColorClass: string;
  label: string;
  title: string;
  titleLine2?: string;
  tagline: string;
  ingredients: string[];
  price: string;
  priceNote: string;
  cardBgClass: string;
  circle: { size: string; color: string; top: string; right: string };
  cardLabel: string;
  cardName: string;
  cardNameLine2?: string;
  cardSub: string;
  timingIcon: "clock" | "moon";
  timingText: string;
  details: { title: string; body: string }[];
  whoHeading: string;
  whoCards: { icon: string; title: string; desc: string }[];
};
