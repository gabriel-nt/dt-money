import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';

import logoImg from '../../assets/logo.svg';

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <img src={logoImg} alt="" />
      <NewTransactionButton>Nova transação</NewTransactionButton>
    </HeaderContent>
  </HeaderContainer>
);

export { Header };
