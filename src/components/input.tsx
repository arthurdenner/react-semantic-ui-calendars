import React from 'react';
import { Form, Input, FormInputProps } from 'semantic-ui-react';
import { SemanticDatepickerProps } from '../types';
import CustomIcon from './icon';

type InputProps = FormInputProps & {
  clearIcon: SemanticDatepickerProps['clearIcon'];
  icon: SemanticDatepickerProps['icon'];
  isClearIconVisible: boolean;
};

const inputData = {
  'data-testid': 'datepicker-input',
};

const CustomInput = React.forwardRef<Input, InputProps>((props, ref) => {
  const {
    clearIcon,
    icon,
    isClearIconVisible,
    label,
    onClear,
    onFocus,
    required,
    value,
    ...rest
  } = props;

  return (
    <Form.Field required={required}>
      {label && <label htmlFor={rest.id as string | undefined}>{label}</label>}
      <Input
        {...rest}
        ref={ref}
        required={required}
        icon={
          <CustomIcon
            clearIcon={clearIcon}
            icon={icon}
            isClearIconVisible={isClearIconVisible}
            onClear={onClear}
          />
        }
        input={inputData}
        onFocus={onFocus}
        value={value}
      />
    </Form.Field>
  );
});

export default CustomInput;
