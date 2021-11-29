/* eslint-disable @next/next/no-html-link-for-pages */
function LandingPage() {
    return (
        <main className="md:grid md:justify-items-center flex flex-col gap-5 items-center h-screen font-thin text-primary">
        <h1 className=' text-center text-2xl'>Stay Focused</h1>
        <p className='bg-gray-700 p-2 w-96 rounded-md'>
          Welcome to the app that can aid in keeping your goals and your life
          mission statement on the top of mind.
        </p>
        <p className='bg-gray-700 p-2 w-96 rounded-md'>
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