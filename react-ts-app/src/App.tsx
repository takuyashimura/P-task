import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { ChakraProvider, useDisclosure, Box } from '@chakra-ui/react';
import { RepoModal } from './conponent/repoModal';
import { TextInput } from './conponent/text';
import { SearchButton } from './conponent/searchButton';
import { SearchResult } from './conponent/searchResult';
import theme from './theme';

type String = string;

type GitHubData = {
  id: number;
  full_name: string;
  owner: [];
  language: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
};

type Loading = boolean;

function App() {
  const [inputValue, setInputValue] = useState<String | undefined>('');
  const [gitHubData, setGitHubData] = useState<GitHubData[] | undefined>(
    undefined
  );

  console.log('TextInput', TextInput);

  const [repoData, setRepoData] = useState<GitHubData[] | undefined>(undefined);
  const [loading, setLoading] = useState<Loading>(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const textChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleRequest = () => {
    setLoading(true);
    axios
      .get(
        `https://api.github.com/search/repositories?q=${inputValue}+in:name&sort=stars`
      )
      .then((res) => {
        setGitHubData(res.data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const handleData = (data: GitHubData) => {
    const updataGitHunData: GitHubData[] = [data];
    setRepoData(updataGitHunData);
    onOpen();
  };

  const downEnter = (e: any) => {
    if (inputValue === '') {
      return;
    }
    if (e.key === 'Enter') {
      setLoading(true);
      axios
        .get(
          `https://api.github.com/search/repositories?q=${inputValue}+in:name&sort=stars`
        )
        .then((res) => {
          setGitHubData(res.data.items);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  };

  console.log('gitHubData', gitHubData);

  return (
    <ChakraProvider theme={theme}>
      <Box className="App">
        <Box display={'flex'} justifyContent={'center'}>
          <Box width={'80%'} display={'flex'} m={'5px'}>
            <TextInput
              inputValue={inputValue}
              textChange={textChange}
              downEnter={downEnter}
            />
            <SearchButton
              handleRequest={handleRequest}
              loading={loading}
              inputValue={inputValue}
            />
          </Box>
        </Box>

        <SearchResult gitHubData={gitHubData} handleData={handleData} />

        {isOpen && (
          <RepoModal isOpen={isOpen} onClose={onClose} repoData={repoData} />
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
