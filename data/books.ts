export type BookCategory =
  | "العقيدة"
  | "الوعي الفكري"
  | "القرآن الكريم"
  | "محاسن الأخلاق"
  | "الذكر"
  | "تربية الأطفال";

export type Book = {
  id: string;
  slug: string;
  title: string;
  description: string;
  author: string;
  category: BookCategory;
  cover: string;
};

export const books: Book[] = [
  {
    id: "1",
    slug: "al-thaqafa-al-ghaliba",
    title: "سلطة الثقافة الغالبة",
    description:
      "أثر هيمنة الثقافة الغربية على وعي المسلم المعاصر، وكيف تُحاول هذه الهيمنة إخضاع الأحكام الشرعية لذوق الثقافة الغالبة.",
    author: "إبراهيم السكران",
    category: "الوعي الفكري",
    cover: "/images/covers/1.jpg",
  },
  {
    id: "2",
    slug: "al-mushawwiq-ila-al-quran",
    title: "المشوق إلى القرآن",
    description:
      "إحياء الشوق إلى القرآن في قلب المسلم، من خلال بيان مكانته، وأثره في تزكية النفس، وتصحيح العلاقة معه.",
    author: "عمرو الشرقاوي",
    category: "القرآن الكريم",
    cover: "/images/covers/2.jpg",
  },
  {
    id: "3",
    slug: "al-bina-al-aqadi",
    title: "البناء العقدي للجيل الصاعد",
    description:
      "ترسيخ العقيدة الإسلامية الصحيحة في نفوس الجيل الجديد وبيان أسس بنائها بطريقة واعية تحصّن الجيل من الشبهات الفكرية والانحرافات العقدية.",
    author: "أحمد السيد",
    category: "العقيدة",
    cover: "/images/covers/3.jpg",
  },
  {
    id: "4",
    slug: "qawaid-nabawiya",
    title: "قواعد نبوية",
    description:
      "قواعد تربوية وأخلاقية وعقدية مستنبطة من السنة النبوية، لبناء شخصية المسلم وضبط سلوكه الإيماني في التعامل مع الواقع وفق هدي النبي ﷺ.",
    author: "عمر عبد الله المقبل",
    category: "محاسن الأخلاق",
    cover: "/images/covers/4.jpg",
  },
  {
    id: "5",
    slug: "maani-al-adhkar",
    title: "معاني الأذكار",
    description:
      "تفسير معاني الأذكار اليومية مع بيان أثرها في تهذيب النفس وتقوية الصلة بالله.",
    author: "محمد صالح المنجد",
    category: "الذكر",
    cover: "/images/covers/5.jpg",
  },
  {
    id: "6",
    slug: "ma-la-yasau-al-atfal-jahlahu",
    title: "ما لا يسع أطفال المسلمين جهله",
    description:
      "دليل تربوي مبسط للأطفال يعرّفهم بأهم ما يجب أن يعرفوه من العقيدة والعبادة والآداب الأساسية بأسلوب سؤال وجواب.",
    author: "يزن الغانم",
    category: "تربية الأطفال",
    cover: "/images/covers/6.jpg",
  },
];
