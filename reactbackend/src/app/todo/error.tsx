'use client'

export default function Error({error,reset}: {error: Error, reset: () => void})
 {
  return (
    <main className="container">
      <h1>Issue with the server try again</h1>
      <div className="text-danger">{error.message}</div>
    </main>
  );
}