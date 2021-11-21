function LandingPage() {
    return (
        <main className="grid items-center h-screen font-thin text-primary">
        <h1>Stay Focused</h1>
        <p>
          Welcome to the app that can aid in keeping your goals and your life
          mission statement on the top of mind.
        </p>
        <p>
          Writing your goals and reading them every day can help keep you
          focused and stay on the path towards your destination.
        </p>
          <a href='/api/auth/login' className="inline-block bg-gradient-to-br from-cool-blue to-blue-800 rounded-lg w-64 h-12 p-2 m-4 font-normal text-lg text-center justify-self-center">
            Capture My Goals
          </a>
      </main>
    )
}
export default LandingPage