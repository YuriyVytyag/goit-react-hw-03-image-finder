import { LoadMoreBtn } from './Button.styled';
export const Button = ({ onShow }) => {
  return (
    <LoadMoreBtn onClick={onShow} type="button">
      Load more
    </LoadMoreBtn>
  );
};
