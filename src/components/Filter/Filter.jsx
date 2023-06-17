import propTypes from 'prop-types';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <h3 className="section_title">Find contacts by name</h3>
      <input
        value={value}
        onChange={onChangeFilter}
        className="input"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChangeFilter: propTypes.func.isRequired,
};
