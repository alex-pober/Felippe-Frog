export type CipherPage = {
  slug: string;
  title: string;
  image: string;
  imageAlt?: string;
  body?: string;
};

export const pages: CipherPage[] = [
  {
    slug: 'gleam',
    title: '_ _ 1',
    image: '/tarot/the_glow.png',
    imageAlt: 'placeholder',
  },
  {
    slug: 'mist',
    title: '_ 2 _',
    image: '/tarot/the_spark.png',
    imageAlt: 'placeholder',
  },
  {
    slug: 'hollow',
    title: '3 _ _',
    image: '/tarot/the_chosen.png',
    imageAlt: 'placeholder',
  },
  {
    slug: 'haven',
    title: 'Congratulations!',
    image: '/tarot/the_gift.png',
    imageAlt: 'placeholder',
    body: 'Meet us at [location] on [date] at [time].',
  },
];
