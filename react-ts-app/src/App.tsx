import React, { useState } from 'react';
import './App.css';
import {
  ChakraProvider,
  useDisclosure,
  Box,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

import Icon from './conponent/icon';
import { RepoModal } from './conponent/repoModal';
import { TextInput } from './conponent/text';
import { SearchButton } from './conponent/searchButton';
import { SearchResult } from './conponent/searchResult';
import theme from './theme';
import { Method } from './method/method';

function App() {
  const {
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
  } = Method();

  //フィルター機能
  //言語
  //star
  //issue数
  //watcher
  //fork

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
              inputValue={inputValue as string}
            />
          </Box>
        </Box>
        <Menu>
          <MenuButton
            pr={'10px'}
            as={Button}
            rightIcon={<Icon name="下矢印" />}
          >
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>

        <SearchResult gitHubData={gitHubData} handleData={handleData} />

        {isOpen && (
          <RepoModal isOpen={isOpen} onClose={onClose} repoData={repoData} />
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
