import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Tag } from "lucide-react"
import { motion } from "framer-motion"

interface NewsCardProps {
  title: string
  description: string
  date: string
  category: string
  image?: string
  link: string
}

export function NewsCard({ title, description, date, category, image, link }: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="h-full relative overflow-hidden transition-all duration-300 hover:shadow-xl">
        {image && (
          <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
            <motion.img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}
        <CardHeader className="relative">
          <div className="flex items-center justify-between mb-2">
            <motion.span 
              className="inline-flex items-center gap-1 text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <Tag className="h-3 w-3" />
              {category}
            </motion.span>
            <motion.span 
              className="inline-flex items-center gap-1 text-sm text-muted-foreground"
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className="h-3 w-3" />
              {date}
            </motion.span>
          </div>
          <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3 group-hover:text-foreground transition-colors duration-300">
            {description}
          </p>
        </CardContent>
        <CardFooter>
          <Button 
            variant="ghost" 
            className="w-full group-hover:bg-primary/10 transition-colors duration-300" 
            asChild
          >
            <a href={link} className="flex items-center justify-center">
              Читать далее
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.div>
            </a>
          </Button>
        </CardFooter>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 translate-x-[-100%] group-hover:translate-x-[100%]" />
      </Card>
    </motion.div>
  )
} 