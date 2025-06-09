interface PaginationOptions {
  page?: number;
  limit?: number;
}

interface PaginationResult<T> {
  data: T[];
  pagination: {
    total: number;
    currentPage: number;
    totalPages: number;
    limit: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

/**
 * Función para paginar resultados de consultas
 * @param data Array de datos a paginar
 * @param options Opciones de paginación (página y límite)
 * @returns Objeto con datos paginados y metadatos de paginación
 */
export const paginate = <T>(
  data: T[],
  options: PaginationOptions = {}
): PaginationResult<T> => {
  const page = options.page || 1;
  const limit = options.limit || 10;
  
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  
  const total = data.length;
  const totalPages = Math.ceil(total / limit);
  
  return {
    data: data.slice(startIndex, endIndex),
    pagination: {
      total,
      currentPage: page,
      totalPages,
      limit,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1
    }
  };
};