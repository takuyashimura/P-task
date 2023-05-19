import { AiOutlineSearch } from 'react-icons/ai';

const Icon = ({ name }: any) => {
  switch (name) {
    case '検索':
      return <AiOutlineSearch />;

    default:
      return null;
  }
};

export default Icon;
