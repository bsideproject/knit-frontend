import { ChangeEvent, FC } from 'react';
import styled from '@emotion/styled';
import useComponentId from '~/utils/id/useComponentID';
import { Label, Input } from './Checkbox.styled';

interface Props {
  className?: string;
  checked: boolean;
  onChange: (...args: any) => any;
}

const Checkbox: FC<Props> = ({ className, children, checked, onChange }) => {
  const componentId = useComponentId();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.checked);
  };

  return (
    <Label htmlFor={componentId} className={className}>
      <Input id={componentId} type="checkbox" checked={checked} onChange={handleChange} />
      {children}
    </Label>
  );
};

export default styled(Checkbox)``;
