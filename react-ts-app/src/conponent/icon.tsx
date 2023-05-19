import { AiOutlineSearch } from 'react-icons/ai';

const Icon = ({ name }: any) => {
  switch (name) {
    case 'search':
      return <AiOutlineSearch />;
    default:
      return null;
  }
};
export default Icon;
