'use client'

import NextError from 'next/error'
import React, { useEffect } from 'react'
import * as Sentry from '@sentry/nextjs'

const GlobalError = ({
  error
}: {
  error: Error & { digest?: string }
}): JSX.Element => {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <html>
      <body>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <NextError statusCode={undefined as any} />
      </body>
    </html>
  )
}

export default GlobalError
