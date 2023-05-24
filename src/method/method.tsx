import { useState } from 'react';
import axios from 'axios';
import { useDisclosure } from '@chakra-ui/react';

type Loading = boolean;

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

export const Method = () => {
  const [inputValue, setInputValue] = useState<String | undefined>('');
  const [loading, setLoading] = useState<Loading>(false);
  const [gitHubData, setGitHubData] = useState<GitHubData[] | undefined>(
    undefined
  );
  const [repoData, setRepoData] = useState<GitHubData[] | undefined>(undefined);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const textChange = (e: any) => {
    setInputValue(e.target.value);
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

  return {
    loading,
    gitHubData,
    textChange,
    downEnter,
    inputValue,
    handleRequest,
    handleData,
    repoData,
    isOpen,
    onClose,
  };
};
