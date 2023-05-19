import { Button } from '@chakra-ui/react';
import { VFC, memo } from 'react';
import Icon from './icon';
type Props = {
  handleRequest: any;
  loading: boolean;
  inputValue: string | undefined;
};

export const SearchButton: VFC<Props> = memo((props) => {
  const { handleRequest, loading, inputValue } = props;
  return (
    <>
      {loading ? (
        <Button
          isLoading
          bg={'red.200'}
          _hover={{
            opacity: 0.8,
          }}
          _active={{
            color: 'red.200',
          }}
        >
          <Icon name="検索" />{' '}
        </Button>
      ) : inputValue !== '' ? (
        <Button
          type="submit"
          bg={'red.200'}
          _hover={{
            opacity: 0.8,
          }}
          _active={{
            color: 'red.200',
          }}
          onClick={() => {
            handleRequest();
          }}
        >
          <Icon name="検索" />{' '}
        </Button>
      ) : (
        <Button
          _hover={{
            opacity: 1,
          }}
          _active={{
            opacity: 1,
          }}
        >
          <Icon name="検索" />{' '}
        </Button>
      )}
    </>
  );
});
