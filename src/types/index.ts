import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  auth?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};

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
  created_at: string;
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
