import { Button, Input } from '@chakra-ui/react';
import axios from 'axios';
import { VFC, memo, useState } from 'react';

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
