export type Book = {
  id: number;
  title: string;
  description: string;
  author: string;
  category: string;
  cover: string;
};

export const books: Book[] = [
  {
    id: 1,
    title: "سلطة الثقافة الغالبة",
    description:
      "خمسين قاعدة نبوية أساسية في العلم والأخلاق والسلوك لتطبيقها في الحياة اليومية",
    author: "إبراهيم السكران",
    category: "عقيدة",
    cover: "/images/covers/1.png",
  },
];
