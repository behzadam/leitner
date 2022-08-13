export class ResponseBase {
  code: number;
  message: string;
}

export class Response<TData> extends ResponseBase {
  data: TData;
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

export class PaginatedDto<TData> extends ResponseBase {
  meta: PaginationMeta;
  links: PaginationLinks;
  items: TData[];
}
