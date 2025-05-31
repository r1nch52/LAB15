import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>Сайт создан 29 мая 2025 года</p>
      <p>Автор: Иванова Анна Сергеевна</p>
    </FooterContainer>
  );
}

export default Footer;