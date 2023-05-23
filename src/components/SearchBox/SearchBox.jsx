import { Form, Input, Button } from './SearchBox.styled';
import PropTypes from 'prop-types';

export const SearchBox = ({ onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" onChange={onChange} />

      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
