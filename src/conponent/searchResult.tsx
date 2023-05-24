import { Box, Card, CardBody, Flex, Text } from '@chakra-ui/react';
import { VFC, memo } from 'react';
type Props = {
  gitHubData: any;
  handleData: any;
};
export const SearchResult: VFC<Props> = memo((props) => {
  const { gitHubData, handleData } = props;
  return (
    <>
      {' '}
      {gitHubData ? (
        gitHubData.length > 0 ? (
          <Flex flexWrap={'wrap'}>
            {gitHubData.map((data: any) => (
              <Box p={'10px'} width={'50%'} key={data.id}>
                <Card
                  bg={'blue.100'}
                  width={'100%'}
                  key={data.id}
                  shadow={'md'}
                  onClick={() => {
                    handleData(data);
                  }}
                >
                  <CardBody alignContent={'left'}>
                    <Text>{data.full_name}</Text>
                  </CardBody>
                </Card>
              </Box>
            ))}
          </Flex>
        ) : (
          <Text>検索結果は０件です</Text>
        )
      ) : null}
    </>
  );
});
