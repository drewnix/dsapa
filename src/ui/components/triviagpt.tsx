import { useState } from "react";
import FlashCard from "@/components/flashcard.tsx";
import {TopicSelect} from "@/components/topic-select.tsx";

function TriviaGPT() {
    const [selectedTopic, setSelectedTopic] = useState("All");

    return (
        <div className="bg-background flex flex-col justify-center items-center">
            <div className="w-full max-w-3xl mx-auto pt-6 pl-6 bg-card rounded-md relative">
                <div className="flex justify-between items-start">
                    <h4 className="scroll-m-20 text-1 font-extrabold tracking-tight lg:text-2xl">
                        Trivia GPT
                    </h4>
                </div>
                <p className="leading-7 pl-1 [&:not(:first-child)]:mt-2">
                    <strong>Select a topic</strong> &nbsp;
                <TopicSelect selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
                </p>
                <br/>
            </div>
            <FlashCard topic={selectedTopic}/>
        </div>
    )
}

export default TriviaGPT;
