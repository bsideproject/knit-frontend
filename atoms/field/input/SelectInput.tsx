import { OptionsType } from 'react-select';
import { Container, CreatableSelect } from './SelectInput.styled';
import { Description } from '~/atoms/description';
import { Error } from '~/atoms/error';
import { Props as InputProps } from './Input';

// Todo Select Component Type
// const Select = ({ creatable, ...rest }: ReactSelectProps & { theme?: Theme }) => {
//   if (creatable) {
//     return <CreatableSelect {...rest} />;
//   }

//   return null;
// };

export interface SelectInputProps extends InputProps {
  description?: string;
  isClearable?: boolean;
  options?: OptionsType<{ label: string; value: string }>;
}

const SelectInput = ({
  placeholder,
  className,
  error,
  name,
  methods,
  description,
  options,
  isClearable = false,
}: SelectInputProps) => {
  let errorMessage;

  if (methods && name) {
    const {
      formState: { errors },
    } = methods;

    if (errors[name]) {
      error = true;
      errorMessage = errors[name].message;
    }
  }

  return (
    <Container className={className}>
      <CreatableSelect
        creatable
        isClearable={isClearable}
        // onChange={handleChange}
        // onInputChange={handleInputChange}
        options={options}
        placeholder={placeholder}
        components={{
          IndicatorSeparator: () => null,
        }}
      />

      {error ? (
        <Error>{errorMessage}</Error>
      ) : (
        description && <Description>{description}</Description>
      )}
    </Container>
  );
};
export default SelectInput;
