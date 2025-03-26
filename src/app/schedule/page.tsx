'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'

type Group = {
  code: string
  name: string
}

type ScheduleData = {
  [key: string]: Group[]
}

const scheduleData: ScheduleData = {
  'I КУРС': [
    { code: 'УРТ-23-01', name: 'Управление в технических системах' },
    { code: 'УРС-23-02', name: 'Системный анализ и управление' },
    { code: 'УГИ-23-03', name: 'Информатика и вычислительная техника' },
    { code: 'УГЦ-23-04', name: 'Цифровые технологии' },
    { code: 'УРБ-23-05', name: 'Безопасность технологических процессов' },
    { code: 'УРГ-23-06', name: 'Геология нефти и газа' },
  ],
  'II КУРС': [
    { code: 'УРБ-22-01', name: 'Бурение нефтяных и газовых скважин' },
    { code: 'УРГ-22-02', name: 'Геология и геофизика нефти и газа' },
    { code: 'УРН-22-03', name: 'Нефтегазовое дело' },
    { code: 'УТП-22-04', name: 'Технологические процессы' },
    { code: 'УТС-22-05', name: 'Системы автоматизации' },
    { code: 'УЭМ-22-06', name: 'Экономика и менеджмент' },
  ],
}

export default function Schedule() {
  const [selectedCourse, setSelectedCourse] = useState('I КУРС')

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Расписание экзаменов
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Выберите курс для просмотра расписания экзаменов
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="flex justify-center space-x-4">
            {Object.keys(scheduleData).map((course) => (
              <Button
                key={course}
                variant={selectedCourse === course ? 'default' : 'outline'}
                onClick={() => setSelectedCourse(course)}
              >
                {course}
              </Button>
            ))}
          </div>

          <motion.div
            key={selectedCourse}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {scheduleData[selectedCourse].map((group) => (
              <Card key={group.code}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {group.code}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {group.name}
                  </p>
                  <Button
                    variant="link"
                    className="mt-4 h-auto p-0 text-primary"
                    asChild
                  >
                    <a href={`/schedule/${group.code}`}>
                      Смотреть расписание
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
} 