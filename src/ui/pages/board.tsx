import type { NextPage } from 'next';
import Head from 'next/head';
import TriviaBoard from "@/components/trivia-board.tsx";

const Board: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Trivia Board</title>
        <meta name="description" content="Trivia" />
      </Head>
        <main className="py-0">
            <div className="bg-background flex flex-col justify-center items-center">
                <div className="w-full max-w-3xl mb-8 mx-auto p-0 pt-3 bg-card rounded-md relative">
                    <TriviaBoard/>
                </div>
            </div>
        </main>
    </div>
);
};

export default Board;