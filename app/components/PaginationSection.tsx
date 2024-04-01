'use client';
import React, {useState} from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';

export default function PaginationSection({maxPage}: {maxPage: number}) {
  const pathname = usePathname();
  const {replace} = useRouter();
  const searchParams = useSearchParams();
  const [pageNum, setPageNum] = useState(0);

  const nextPage = () => {
    if (pageNum + 2 > maxPage) return;
    setPageNum((prev) => prev + 2);
    const params = new URLSearchParams(searchParams);
    params.set('page', (pageNum + 2).toString());
    replace(`${pathname}?${params}`);
  };

  const previousPage = () => {
    if (pageNum < 1) return;
    setPageNum((prev) => prev - 2);
    const params = new URLSearchParams(searchParams);
    params.set('page', (pageNum - 2).toString());
    replace(`${pathname}?${params}`);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={pageNum === 0}
            onClick={previousPage}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>{pageNum}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={nextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
