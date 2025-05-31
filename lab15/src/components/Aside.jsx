import styled from 'styled-components';

const AsideContainer = styled.aside`
  padding: 1rem;
`;

function Aside() {
  return (
    <AsideContainer>
      <h2>Иванова Анна Сергеевна</h2>
    </AsideContainer>
  );
}

export default Aside;