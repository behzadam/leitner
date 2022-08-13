import { PaginatedDto, Response } from '@shared/types';
import { applyDecorators, Type } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  getSchemaPath,
} from '@nestjs/swagger';

export const ApiResponse = <TModel extends Type<any>>(
  model: TModel
) => {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        title: 'ApiResponse',
        allOf: [
          { $ref: getSchemaPath(Response) },
          {
            properties: {
              code: { type: 'number', default: 200 },
              message: { type: 'string', default: 'success' },
              data: {
                $ref: getSchemaPath(model),
              },
            },
          },
        ],
      },
    })
  );
};

export const ApiPaginatedResponse = <TModel extends Type<any>>(
  model: TModel
) => {
  return applyDecorators(
    ApiExtraModels(PaginatedDto),
    ApiOkResponse({
      schema: {
        description: 'Successfully received model list',
        allOf: [
          { $ref: getSchemaPath(PaginatedDto) },
          {
            properties: {
              code: { type: 'number', default: 200 },
              message: { type: 'string', default: 'success' },
              items: {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              },
              meta: {
                type: 'any',
                default: {
                  totalItems: 0,
                  totalPages: 1,
                  itemCount: 0,
                  itemsPerPage: 0,
                  currentPage: 1,
                },
              },
              links: {
                type: 'any',
                default: {
                  first: '',
                  previous: '',
                  next: '',
                  last: '',
                },
              },
            },
          },
        ],
      },
    })
  );
};
