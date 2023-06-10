import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  auth?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface ImageType {
  id: string;
  original: string;
  thumbnail: string;
}

export interface RatingCountType {
  abusive_reports_count: number;
  my_feedback: number;
  negative_feedbacks_count: number;
  positive_feedbacks_count: number;
  rating: number;
  total: number;
}

export interface ShopType {
  address: {};
  cover_image: ImageType;
  created_at: string;
  description: string;
  id: number;
  is_active: number;
  logo: ImageType;
  name: string;
  owner_id: number;
  settings: {};
  slug: string;
  updated_at: string;
}

export interface TypesType {
  created_at: string;
  icon: string;
  id: number;
  language: string;
  name: string;
  promotional_sliders: ImageType[];
  settings: {};
  slug: string;
  translated_languages: string[];
  updated_at: string;
}

export interface ResultType<T> {
  data: {
    count: number;
    current_page: number;
    data: T[];
    firstItem: number;
    first_page_url: string;
    lastItem: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    per_page: string;
    prev_page_url: string;
    total: number;
  };
}

export interface ProductsType {
  author: null | string;
  author_id: null | number;
  blocked_dates: [];
  categories: Omit<CategoryType[], "children">;
  created_at: string;
  deleted_at: null | string;
  description: string;
  external_product_button_text: null | string;
  external_product_url: null | string;
  gallery: ImageType[];
  height: null | number;
  id: number;
  image: ImageType;
  in_stock: number | null;
  in_wishlist: boolean;
  is_digital: number;
  is_external: number;
  is_taxable: number;
  language: string;
  length: null | number;
  manufacturer: null | string;
  manufacturer_id: null | number;
  max_price: number;
  metas: string[];
  min_price: number;
  my_review: null | string;
  name: string;
  price: number;
  product_type: string;
  quantity: number;
  rating_count: RatingCountType[];
  ratings: number;
  sale_price: number;
  shipping_class_id: null | number;
  shop: ShopType;
  shop_id: number;
  sku: string;
  slug: string;
  status: string;
  tags: [];
  total_reviews: number;
  translated_languages: string[];
  type: TypesType;
  type_id: number;
  unit: string;
  updated_at: string;
  variation_options: string[];
  variations: string[];
  video: null | string;
  width: null | number;
}

export interface UserType {
  user: null | string;
  name: string;
}

export interface CategoryType {
  children: CategoryType[];
  created_at: string;
  deleted_at: string | null;
  details: null | string;
  icon: string;
  id: number;
  image: string[];
  language: string;
  name: string;
  parent: null | string;
  parent_id: null | number;
  slug: string;
  translated_languages: string[];
  type: {};
  type_id: number;
  updated_at: string;
}
