'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle } from 'lucide-react'

export default function VerifyEmailPage() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const token = searchParams.get('token')
    const email = searchParams.get('email')

    if (!token || !email) {
      setStatus('error')
      setMessage('Invalid verification link')
      return
    }

    // In a real app, you'd verify the token against a database
    // For now, we'll just show a success message
    setTimeout(() => {
      setStatus('success')
      setMessage(`Email verified for ${email}`)
    }, 1000)
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-rose-100/10 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-3xl shadow-2xl p-8 max-w-md w-full border border-primary/20 text-center"
      >
        {status === 'loading' && (
          <>
            <div className="flex justify-center mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full"
              />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Verifying Email</h1>
            <p className="text-muted-foreground">Please wait...</p>
          </>
        )}

        {status === 'success' && (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="flex justify-center mb-6"
            >
              <CheckCircle className="w-16 h-16 text-green-500" />
            </motion.div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Email Verified!</h1>
            <p className="text-muted-foreground mb-6">{message}</p>
            <p className="text-sm text-muted-foreground">Thank you for verifying your email. You can now manage your orders.</p>
          </>
        )}

        {status === 'error' && (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="flex justify-center mb-6"
            >
              <AlertCircle className="w-16 h-16 text-red-500" />
            </motion.div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Verification Failed</h1>
            <p className="text-muted-foreground">{message}</p>
          </>
        )}
      </motion.div>
    </div>
  )
}
