import React, { useState } from 'react';

import { MultiSelectInput, MultiSelectOption } from './styled_components';

const options = [
  { id: 1, label: 'Afghanistan' },
  { id: 2, label: 'Aland Islands' },
  { id: 3, label: 'Albania' },
  { id: 4, label: 'Algeria' },
  { id: 5, label: 'American Samoa' },
  { id: 6, label: 'Andorra' },
  { id: 7, label: 'Angola' },
  { id: 8, label: 'Anguilla' },
  { id: 9, label: 'Antarctica' },
  { id: 10, label: 'Antigua and Barbuda' },
  { id: 11, label: 'Argentina' },
  { id: 12, label: 'Armenia' },
  { id: 13, label: 'Aruba' },
  { id: 14, label: 'Australia' },
  { id: 15, label: 'Austria' },
  { id: 16, label: 'Azerbaijan' },
  { id: 17, label: 'Bahamas' },
  { id: 18, label: 'Bahrain' },
  { id: 19, label: 'Bangladesh' },
  { id: 20, label: 'Barbados' },
  { id: 21, label: 'Belarus' },
  { id: 22, label: 'Belgium' },
  { id: 23, label: 'Belize' },
  { id: 24, label: 'Benin' },
  { id: 25, label: 'Bermuda' },
  { id: 26, label: 'Bhutan' },
  { id: 27, label: 'Bolivia, Plurinational State of' },
  { id: 28, label: 'Bonaire, Sint Eustatius and Saba' },
  { id: 29, label: 'Bosnia and Herzegovina' },
  { id: 30, label: 'Botswana' },
  { id: 31, label: 'Bouvet Island' },
  { id: 32, label: 'Brazil' },
  { id: 33, label: 'British Indian Ocean Territory' },
  { id: 34, label: 'Brunei Darussalam' }
];

const MultiSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(options);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const isSelected = value =>
    selectedOptions.find(({ label }) => label.toLowerCase() === value.label.toLowerCase());

  const filterSuggestions = ({ target: { value } }) => {
    setSuggestions(
      options.filter(
        ({ label }) => !isSelected(label) && label.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = value => () => {
    if (!isSelected(value)) setSelectedOptions([...selectedOptions, value]);
  };

  return (
    <>
      <div onClick={openMenu}>
        {selectedOptions.map(blah => (
          <span>{blah.label}</span>
        ))}
        <MultiSelectInput onChange={filterSuggestions} />
      </div>
      <div>
        {isOpen &&
          suggestions.map(option => (
            <MultiSelectOption onClick={handleSelect(option)}>{option.label}</MultiSelectOption>
          ))}
      </div>
    </>
  );
};

export default MultiSelect;
