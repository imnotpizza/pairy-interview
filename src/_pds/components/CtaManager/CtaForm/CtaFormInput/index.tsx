import Input from '../../../Input';
import Text from '../../../Text';
import { CtaFormInputProps } from './index.types';

const CtaFormInput = ({
  label,
  placeholder,
  errText,
  isError,
  register,
}: CtaFormInputProps) => {
  return (
    <Text variant="md-semibold" color="zinc_600" as="label">
      {label}
      <Input
        paddingY={16}
        width="100%"
        textVariant="md-semibold"
        placeholder={placeholder}
        {...register}
      />
      {isError && (
        <Text variant="sm-semibold" color="cerise_500" marginTop={4}>
          {errText}
        </Text>
      )}
    </Text>
  );
};

export default CtaFormInput;
