import { ApiProperty } from '@nestjs/swagger';

export class Response {
  @ApiProperty()
  code: number;
  @ApiProperty()
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
  @ApiProperty()
  meta: PaginationMeta;
  @ApiProperty()
  links: PaginationLinks;
  @ApiProperty()
  items: TData[];
}
