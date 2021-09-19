import { Button, Button1 } from './styles';

interface PaginationItemProps {
  number: number,
  isCurrent?: boolean,
  onPageChange: (page: number) => void,
}

export function PaginationItem ({isCurrent = false, number, onPageChange }: PaginationItemProps){
  if (isCurrent) {
    return (
      <Button
        disabled
      >{number}</Button>
    );
  }

  return (
    <Button1 onClick={() => onPageChange(number)}>{number}</Button1>
  );
}
