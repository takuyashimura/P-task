import { AiOutlineSearch } from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';

const Icon = ({ name }: any) => {
  switch (name) {
    case '検索':
      return <AiOutlineSearch />;
    case '下矢印':
      return <FiChevronDown />;

    default:
      return null;
  }
};

export default Icon;
