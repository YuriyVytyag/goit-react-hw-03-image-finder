import { Component } from 'react';
import { getPhotos } from '../helpers/Api';
import { Searchbar } from './Searchbar/Searchbar';
import { AppWrapper } from './App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    totalHits: null,
    loading: false,
  };

  componentDidUpdate(_, prevState) {
    const { page, searchQuery, images } = this.state;

    if (prevState.page !== page || prevState.searchQuery !== searchQuery) {
      this.setState({ loading: true });

      getPhotos(searchQuery, page).then(res => {
        if (!res.hits.length) {
          alert(`Please, try another one`);
          this.setState({
            loading: false,
          });
          return;
        }
        this.setState({
          images: [...images, ...res.hits],
          totalHits: res.totalHits,
          loading: false,
        });
      });
    }
  }

  handelSubmit = text => {
    this.setState({
      searchQuery: text,
      images: [],
      page: 1,
      totalHits: null,
    });
  };

  handelLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { handelSubmit, handelLoadMore } = this;
    const { totalHits, loading, images } = this.state;
    return (
      <AppWrapper>
        <Searchbar onSubmit={handelSubmit} />
        {loading && <Loader />}
        {images && <ImageGallery imagesList={images} />}
        {totalHits > 12 && (
          <>
            <Button onShow={handelLoadMore} />
          </>
        )}
      </AppWrapper>
    );
  }
}
