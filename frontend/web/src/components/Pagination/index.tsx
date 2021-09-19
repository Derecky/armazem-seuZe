import { PaginationItem } from './PaginationItem';
import {
  Container,
  Field,
  Text,
  PaginationContainer,
  Text1,
} from './styles';

interface PaginationProps {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage ?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray( from: number, to: number){
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0)
}

export function Pagination({ 
  totalCountOfRegisters,
  registerPerPage = 12,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {

  const lastPage = Math.ceil(totalCountOfRegisters / registerPerPage);

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []


  return (
    <Container>
      <Field>
        <Text>
          {currentPage == 1? currentPage : ((currentPage - 1) * 10) + 1 }
        </Text> 
         - 
        <Text>{currentPage * 10}</Text>
          de 
        <Text>{totalCountOfRegisters}</Text>
      </Field>

      <PaginationContainer>
        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1}/>
            {currentPage > (2 + siblingsCount) && (
              <Text1>...</Text1>
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}

        <PaginationItem  onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage && (
              <Text1>...</Text1>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage}/>
          </>         
          
        )}

      </PaginationContainer>
    </Container>
  );
}