import { AlertCircle } from 'lucide-react'

interface CalloutBoxProps {
  title?: string
  children: React.ReactNode
  type?: 'important' | 'info' | 'tip'
}

export function CalloutBox({ title = 'Important', children, type = 'important' }: CalloutBoxProps) {
  const styles = {
    important: {
      bg: '#FEF2F2',
      border: 'border-l-4 border-red-400',
      icon: 'text-red-500',
      title: 'text-red-800'
    },
    info: {
      bg: '#F0F9FF',
      border: 'border-l-4 border-blue-400',
      icon: 'text-blue-500',
      title: 'text-blue-800'
    },
    tip: {
      bg: '#ECFDF5',
      border: 'border-l-4 border-green-400',
      icon: 'text-green-500',
      title: 'text-green-800'
    }
  }

  const style = styles[type]

  return (
    <div className={`my-8 md:my-10 p-6 md:p-8 rounded-lg ${style.border}`} 
         style={{ backgroundColor: style.bg }}>
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <AlertCircle className={`h-6 w-6 ${style.icon} mt-1`} />
        </div>
        <div className="flex-1">
          {title && (
            <h4 className={`font-semibold ${style.title} mb-2`}>
              {title}
            </h4>
          )}
          <div className="text-foreground/80 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
