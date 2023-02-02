import { Component } from 'react';
import {
  SearchbarWrapper,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
export class Searchbar extends Component {
  state = {
    query: '',
    page: 1,
  };
  handleNameChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = () => {
    // console.log(event);
    // event.preventDefault();
    const { query } = this.state;
    const { onSubmit } = this.props;

    if (query.trim() === '') {
      return alert('Введите название');
    }
    onSubmit(query);
    this.setState({ query: '' });
  };
  render() {
    const { handleNameChange } = this;
    const { query } = this.state;
    return (
      <SearchbarWrapper>
        <SearchForm
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit();
          }}
        >
          <SearchFormInput
            type="text"
            value={query}
            onChange={handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
        </SearchForm>
      </SearchbarWrapper>
    );
  }
}
