import { Lightbulb } from 'lucide-react'

interface ProTipBoxProps {
  children: React.ReactNode
}

export function ProTipBox({ children }: ProTipBoxProps) {
  return (
    <div className="my-8 md:my-10 p-6 md:p-8 rounded-lg border-l-4 border-primary" 
         style={{ backgroundColor: '#FDF2F8' }}>
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <Lightbulb className="h-6 w-6 text-primary mt-1" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-foreground mb-2">Pro Tip</h4>
          <div className="text-foreground/80 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
