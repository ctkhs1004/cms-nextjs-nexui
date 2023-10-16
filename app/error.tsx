'use client'

import { useEffect } from 'react'

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error | string | { message: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    // Extract error message depending on error type
    let errorMessage: string;
    if (typeof error === "string") {
        errorMessage = error;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === "object" && "message" in error) {
        errorMessage = error.message;
    } else {
        errorMessage = "An unknown error occurred.";
    }

    return (
        <div>
            <h2>Something went wrong!</h2>
            <p>{errorMessage}</p>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}
