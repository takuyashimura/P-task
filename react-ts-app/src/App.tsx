import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import {
  ChakraProvider,
  Button,
  Input,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { RepoModal } from './conponent/repoModal';

type String = string;

type GitHubData = {
  id: number;
  name: string;
  owner: [];
  language: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
};

function App() {
  const [inputValue, setInputValue] = useState<String | undefined>('');
  const [gitHubData, setGitHubData] = useState<GitHubData[] | undefined>(
    undefined
  );
  const [repoData, setRepoData] = useState<GitHubData[] | undefined>(undefined);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const textChange = (e: any) => {
    setInputValue(e.target.value);
    console.log('inputValue', inputValue);
  };

  const handleRequest = () => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=${inputValue}+in:name&sort=stars`
      )
      .then((res) => {
        setGitHubData(res.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleData = (data: GitHubData) => {
    const updataGitHunData: GitHubData[] = [data];
    setRepoData(updataGitHunData);
    onOpen();
  };

  return (
    <ChakraProvider>
      <div className="App">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => {
            textChange(e);
          }}
        />
        <Button
          type="submit"
          onClick={() => {
            handleRequest();
          }}
        >
          APIリクエスト
        </Button>
        {gitHubData &&
          gitHubData.map((data) => (
            <Card
              key={data.id}
              onClick={() => {
                handleData(data);
              }}
            >
              <CardBody>
                <Text>{data.name}</Text>
              </CardBody>
            </Card>
          ))}{' '}
        {isOpen && (
          <RepoModal isOpen={isOpen} onClose={onClose} repoData={repoData} />
        )}
      </div>
    </ChakraProvider>
  );
}

export default App;
