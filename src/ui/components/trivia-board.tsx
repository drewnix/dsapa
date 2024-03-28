// import { useState } from "react";
import {Button} from "@/components/ui/button";
import {getTopics, getFlashcard} from "@/apiService.ts";
import {useEffect, useState} from "react";
import FlashcardDialog from "@/components/flashcard-dialog";

const amounts = [200, 400, 600, 800, 1000];

function TriviaBoard() {
    // const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [topics, setTopics] = useState(['All'])
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [selectedFlashcard, setSelectedFlashcard] = useState(null);
    const [open, setOpen] = useState(false);

    const handleCellClick = async (topic: string) => {
        setIsLoading(true);
        try {
            const flashcard = await getFlashcard(topic);
            setSelectedFlashcard(flashcard);
            setOpen(true);
        } catch (error) {
            console.error("Error fetching flashcard:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchTopics = async () => {
        setIsLoading(true); // Start loading

        try {
            const data = await getTopics();
            setTopics(['All', ...data]);
        } catch (error) {
            console.error('Error fetching flashcard:', error);
        } finally {
            setIsLoading(false); // End loading
        }
    };

    const selectRandomTopics = () => {
        const shuffledTopics = [...topics].sort(() => 0.5 - Math.random());
        const selected = shuffledTopics.slice(0, 6);
        setSelectedTopics(selected);
    };

    useEffect(() => {
        fetchTopics();
    }, []);


    useEffect(() => {
        if (topics.length > 0) {
            selectRandomTopics();
        }
    }, [topics]);


    return (
        <>
            <div className="w-full max-w-3xl mx-auto pt-2 pl-6 bg-card rounded-md relative">
                <div className="flex justify-between items-start">
                    <h4 className="scroll-m-20 text-1 mb-2 font-extrabold tracking-tight lg:text-2xl">
                        Trivia Board
                    </h4>
                </div>
            </div>
            <div className="grid grid-cols-6 gap-1 bor pt-2">
                {selectedTopics.map((topic, index) => (
                    <div key={index} className="col-span-1">
                        <div className="mb-2">
                            <h3 className="text-m font-bold text-center">{topic}</h3>
                        </div>
                        <div className="space-y-4">
                            {amounts.map((amount, amountIndex) => (
                                <Button
                                    key={amountIndex}
                                    variant="outline"
                                    className="w-full h-20 text-2xl font-bold rounded-md"
                                    onClick={() => handleCellClick(topic)}
                                >
                                    ${amount}
                                </Button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <FlashcardDialog
                open={open}
                onOpenChange={setOpen}
                flashcard={selectedFlashcard}
            />
        </>
    );
}

export default TriviaBoard;