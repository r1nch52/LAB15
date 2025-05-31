import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

function Section() {
  return (
    <SectionContainer>
      <Image 
        src="https://blog.skillfactory.ru/wp-content/uploads/2023/02/react-icon.svg-9720084.png" 
        alt="Placeholder" 
      />
    </SectionContainer>
  );
}

export default Section;