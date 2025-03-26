import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'

interface Exam {
  subject: string
  date: string
  time: string
  location: string
  professor: string
}

interface ExamSchedule {
  [key: string]: Exam[]
}

const examSchedule: ExamSchedule = {
  'УРТ-23-01': [
    {
      subject: 'Математический анализ',
      date: '2024-01-15',
      time: '09:00',
      location: 'Аудитория 201',
      professor: 'Иванов И.И.',
    },
    {
      subject: 'Физика',
      date: '2024-01-18',
      time: '09:00',
      location: 'Аудитория 301',
      professor: 'Петров П.П.',
    },
    {
      subject: 'Информатика',
      date: '2024-01-22',
      time: '09:00',
      location: 'Компьютерный класс 1',
      professor: 'Сидоров С.С.',
    },
  ],
}

// Генерация метаданных
export function generateMetadata({ params }: { params: { group: string } }): Metadata {
  const groupCode = params.group;
  
  if (!(groupCode in examSchedule)) {
    return {
      title: 'Расписание не найдено',
    };
  }
  
  return {
    title: `Расписание экзаменов группы ${groupCode}`,
    description: `Расписание экзаменов для группы ${groupCode}`,
  };
}

// Функция для генерации статических параметров
export function generateStaticParams() {
  return Object.keys(examSchedule).map(group => ({
    group
  }));
}

export default function GroupSchedule({ params }: { params: { group: string } }) {
  const groupCode = params.group;
  
  // Проверка существования группы
  if (!(groupCode in examSchedule)) {
    notFound();
  }
  
  const schedule = examSchedule[groupCode];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/schedule"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Назад к списку групп
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Расписание экзаменов группы {groupCode}
          </h1>
        </div>

        <div className="mt-8">
          {schedule.map((exam: Exam, index: number) => (
            <div
              key={`${exam.subject}-${exam.date}`}
              className="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {exam.subject}
                  </h3>
                  <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {new Date(exam.date).toLocaleDateString('ru-RU', {
                      day: 'numeric',
                      month: 'long',
                    })}
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Время</p>
                    <p className="mt-1 text-gray-900 dark:text-white">{exam.time}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Аудитория</p>
                    <p className="mt-1 text-gray-900 dark:text-white">{exam.location}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Преподаватель</p>
                    <p className="mt-1 text-gray-900 dark:text-white">{exam.professor}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 