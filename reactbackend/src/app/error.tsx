'use client'

export default function Error({error,reset}: {error: Error, reset: () => void})
 {
  return (
    <main className="container">
      <h1>Houston We got a problem</h1>
      <div className="text-danger">{error.message}
      
      </div>
    </main>
  );
}