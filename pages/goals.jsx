import Head from 'next/head';
import Image from 'next/image';
import Goal from '../components/Goal';
import GoalList from '../components/GoalList';

function Goals() {
  let name = 'Daniel';
  return (
    <main>
      <Head>
        <title>{name}&apos;s Goals</title>
      </Head>

      <h1 className="text-3xl text-center">
        Focus {name}, Here&apos;s Your Goals!
      </h1>
      <section className=" flex flex-col gap-8 h-screen md:h-96 m-3 border-gray-200 border rounded-xl bg-gradient-to-r from-gray-800 to-secondary overflow-y-scroll md:flex-row">
        <Image
          className="md:object-cover object-scale-down "
          src="/BSon_transp.png"
          alt="Begotten Son"
          height={1000}
          width={600}
        />
        <article className="grid gap-y-3 pr-3 overflow-y-scroll max-w-prose m-3">
          <h3 className='text-center md:text-left'>LIFE MISSION STATEMENT:</h3>
          <p>To Create and Inspire.</p>
          <hr/>
          <h3 className='text-center md:text-left'>FOCUS STATEMENT:</h3>
          <p >
            Yah is my infinite supply and large sums of money com to me quickly
            and easily under the grace of Yah for the highest good. I am happily
            and easily earning, saving and investing $150,000 a year.
          </p>
          <hr/>
          <h3 className='text-center md:text-left'>GOALS:</h3>
          <GoalList />
        </article>
      </section>
    </main>
  );
}

export default Goals;
