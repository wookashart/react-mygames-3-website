import React, { Component } from 'react';

// Helpers
import { customStyles } from '../../../styles/select';

// Components
import Select from 'react-select';

interface FormikSelectProps {
  options: Options[];
  value: any;
  onChange: Function;
  onBlur: Function;
  id: string;
  label?: string;
  disabled?: boolean;
}

export interface Options {
  value: string;
  label: string;
}

class FormikSelect extends Component<FormikSelectProps> {
  handleChange = value => {
    this.props.onChange(this.props.id, value);
  };

  handleBlur = () => {
    this.props.onBlur(this.props.id, true);
  };

  render() {
    return (
      <div>
        {this.props.label && this.props.label !== '' && <label>{this.props.label}</label>}
        <Select
          styles={customStyles}
          id={this.props.id}
          options={this.props.options}
          multi={false}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value && this.props.value}
          isDisabled={this.props.disabled}
          isClearable={true}
          placeholder="Wybierz..."
        />
      </div>
    );
  }
}

export default FormikSelect;
