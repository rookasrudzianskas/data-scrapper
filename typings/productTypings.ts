export interface WalmartProductResult {
  results: ProductContent[];
  job: JobDetails;
}

export interface ProductContent {
  content: Product;
  created_at: string;
  updated_at: string;
  page: number;
  url: string;
  job_id: string;
  status_code: number;
  parser_type: string;
}

export interface Product {
  url: string;
  meta: Meta;
  price: string;
  title: string;
  images: string[];
  rating: Rating;
  seller: Seller;
  currency: string;
  warranty: string;
  _warnings: string[];
  variations: Variation[];
  breadcrumbs: string[];
  description: string;
  out_of_stock: boolean;
  specifications: Specification[];
  parse_status_code: number;
  price_strikethrough?: number;
}

export interface Meta {
  sku: string;
  gtin: string;
}

export interface Rating {
  count: number;
  rating: number;
}

export interface Seller {
  id: string
  url: string;
  name: string;
  catalog_id: string;
  official_name: string;
}

export interface Variation {
  state: string;
  product_id: string;
  selected_options: SelectedOption[];
}

export interface SelectedOption {
  key: string;
  value: string;
}

export interface Specification {
  key: string;
  value: string;
}

export interface JobDetails {
  // any
  [key: string]: any;
}

export interface JobContext {
  key: string;
  value: any;
}

export interface Link {
  rel: string;
  href: string;
  method: string;
}
