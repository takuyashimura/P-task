import { VFC, memo } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Box,
  List,
  ListItem,
} from '@chakra-ui/react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  repoData: any;
};

export const RepoModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, repoData } = props;
  console.log('repoData', repoData[0]);

  const toGitHub = () => {
    window.open(repoData[0].clone_url, '_blank');
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{repoData[0].full_name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody display={'flex'}>
          <Box width={'50%'}>
            <Image src={repoData[0].owner.avatar_url} width={'60%'} />
          </Box>
          <List>
            {repoData[0].language === null ? (
              <ListItem>プロジェクト言語：不明</ListItem>
            ) : (
              <ListItem>プロジェクト言語：{repoData[0].language}</ListItem>
            )}
            <ListItem>⭐️:{repoData[0].stargazers_count}</ListItem>
            <ListItem>👀:{repoData[0].watchers_count}</ListItem>
            <ListItem>🍴:{repoData[0].forks_count}</ListItem>
            <ListItem>issue数:{repoData[0].open_issues_count}</ListItem>
          </List>
        </ModalBody>
        <ModalFooter>
          <Button bg={'blue.100'} mr={'5px'} onClick={toGitHub}>
            このGitHubページへ
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});
