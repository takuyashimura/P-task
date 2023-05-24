import { Input } from '@chakra-ui/react';
import { VFC, memo } from 'react';

type Props = {
  inputValue: any;
  textChange: any;
  downEnter: any;
};

export const TextInput: VFC<Props> = memo((props) => {
  const { inputValue, textChange, downEnter } = props;

  return (
    <>
      {' '}
      <Input
        bg={'white'}
        mr={'10px'}
        placeholder="入力してください"
        type="text"
        value={inputValue}
        onKeyDown={(e) => {
          downEnter(e);
        }}
        onChange={(e) => {
          textChange(e);
        }}
      />
    </>
  );
});
