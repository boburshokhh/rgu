import { notFound } from 'next/navigation'
import { Metadata } from 'next'

const newsData = {
  1: {
    title: 'Открыт набор на 2024-2025 учебный год',
    content: `
      <p>Филиал РГУ нефти и газа объявляет о начале приема документов на новый учебный год.</p>
      <p>Прием документов будет осуществляться с 1 июня по 31 июля 2024 года.</p>
      <p>Для поступления необходимо предоставить следующие документы:</p>
      <ul>
        <li>Аттестат о среднем образовании</li>
        <li>Паспорт</li>
        <li>Фотографии 3x4</li>
        <li>Медицинская справка</li>
      </ul>
    `,
    date: '2024-01-10',
    category: 'Абитуриентам',
    author: 'Приемная комиссия',
  },
  2: {
    title: 'Международная научная конференция',
    content: `
      <p>В филиале пройдет международная конференция по инновациям в нефтегазовой отрасли.</p>
      <p>Конференция состоится 15-17 марта 2024 года.</p>
      <p>В мероприятии примут участие ведущие специалисты из России, Узбекистана и других стран.</p>
      <p>Основные темы конференции:</p>
      <ul>
        <li>Современные технологии добычи нефти и газа</li>
        <li>Экологические аспекты нефтегазовой отрасли</li>
        <li>Цифровизация нефтегазового производства</li>
      </ul>
    `,
    date: '2024-01-15',
    category: 'Наука',
    author: 'Научный отдел',
  },
  3: {
    title: 'Встреча с представителями индустрии',
    content: `
      <p>Ведущие специалисты нефтегазовой отрасли проведут мастер-классы для студентов.</p>
      <p>Встреча состоится 20 января 2024 года в актовом зале университета.</p>
      <p>В программе мероприятия:</p>
      <ul>
        <li>Презентация компании</li>
        <li>Мастер-классы по современным технологиям</li>
        <li>Встреча с HR-специалистами</li>
        <li>Обсуждение возможностей стажировки</li>
      </ul>
    `,
    date: '2024-01-20',
    category: 'Карьера',
    author: 'Центр карьеры',
  },
}

// Функция для генерации динамических метаданных
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const newsId = Number(params.id);
  const news = newsId in newsData ? newsData[newsId as keyof typeof newsData] : null;
  
  if (!news) {
    return {
      title: 'Новость не найдена',
    };
  }
  
  return {
    title: news.title,
    description: news.content.substring(0, 160).replace(/<[^>]*>/g, ''),
  };
}

// Функция для генерации статических параметров
export function generateStaticParams() {
  return Object.keys(newsData).map(id => ({
    id: id.toString()
  }));
}

// Серверная страница вместо клиентской
export default function NewsPage({ params }: { params: { id: string } }) {
  const newsId = Number(params.id);
  
  // Проверяем, есть ли новость с таким ID
  if (!(newsId in newsData)) {
    notFound();
  }
  
  const news = newsData[newsId as keyof typeof newsData];

  // Форматируем дату
  const formattedDate = new Date(news.date).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gray-50 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <article className="bg-white shadow-xl dark:bg-gray-800">
          <div className="px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {news.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {formattedDate}
                </span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {news.author}
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {news.title}
            </h1>
            <div
              className="prose prose-lg mt-8 max-w-none text-gray-600 dark:prose-invert dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
} 