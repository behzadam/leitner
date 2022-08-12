export class Response {
  code: number;
  message: string;
}

interface PaginationMeta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

interface PaginationLinks {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export class PaginatedDto<TData> extends Response {
  meta: PaginationMeta;
  links: PaginationLinks;
  items: TData[];
}
