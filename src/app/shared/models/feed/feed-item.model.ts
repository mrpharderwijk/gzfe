import { FeedImage } from './feed-image.model';

export interface FeedItem {
  source: {
    id: string;
    name: string;
    logo: string;
  };
  author: string;
  categories: string[] | any;
  content: string;
  contentSnippet: string;
  image: FeedImage;
  isoDate: string;
  link: string;
  title: string;
}
