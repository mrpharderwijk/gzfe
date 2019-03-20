export interface Article {
  source: {
    id: number;
    name: string;
  };
  title: string;
  link: string;
  author: string;
  description: string;
  categories: string[] | any;
  pubDate: string;
  isoDate: string;
}
