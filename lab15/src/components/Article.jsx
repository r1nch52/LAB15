import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

const ArticleContainer = styled.article`
  padding: 1rem;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
`;

const News = () => (
  <div>
    <h1>Последние новости</h1>
    <p>Здесь будут отображаться последние новости нашего проекта.</p>
  </div>
);

const About = () => (
  <div>
    <h1>Lab15 ЮФУ</h1>
  </div>
);

const Contacts = () => (
  <div>
    <h1>Контакты</h1>
    <p>Телефон: +7 (904) 348-36-91</p>
  </div>
);

const NotFound = () => (
  <div>
    <h1>404 - Страница не найдена</h1>
    <p>Извините, запрашиваемая страница не существует.</p>
  </div>
);

function Article() {
  return (
    <ArticleContainer>
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ArticleContainer>
  );
}

export default Article;