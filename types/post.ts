export interface ContentBlock {
  type?: string;
  title?: string;
  text?: string[];
  position?: string;
  image?: string;
}

export interface Post {
  post_id: string;
  slug: string;
  title: string;
  cover_image: string;
  publish_at: string | null;
  status?: string;
  created_at?: string;
  updated_at?: string;
  content_blocks?: ContentBlock[];
}
