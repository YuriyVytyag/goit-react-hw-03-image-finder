import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ imagesList }) => {
  console.log('🚀 ~ imageList', imagesList);
  return (
    <ImageGalleryList>
      {imagesList.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        );
      })}
    </ImageGalleryList>
  );
};
