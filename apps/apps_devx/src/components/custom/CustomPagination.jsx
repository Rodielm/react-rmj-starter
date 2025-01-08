import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

const CustomPagination = ({
  currentPage,
  totalResults,
  perPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalResults / perPage);
  const numbers = Array.from(
    { length: Math.min(10, totalPages) },
    (_, i) => i + 1
  );

  return (
    <div className="mt-3">
      <Pagination>
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious
                onClick={() => onPageChange(currentPage - 1)}
              />
            </PaginationItem>
          )}
          {numbers.map((number) => (
            <PaginationItem key={number}>
              <PaginationLink
                isActive={number === currentPage}
                onClick={() => onPageChange(number)}
              >
                {number}
              </PaginationLink>
            </PaginationItem>
          ))}
          {totalPages > 10 && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext onClick={() => onPageChange(currentPage + 1)} />
              </PaginationItem>
            </>
          )}
        </PaginationContent>
      </Pagination>
      <div className="mt-4 text-center text-gray-500">
        Showing {Math.min(perPage, totalResults)} of {totalResults} results
      </div>
    </div>
  );
};

export default CustomPagination;
