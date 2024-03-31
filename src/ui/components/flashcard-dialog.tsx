import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Flashcard {
  topic: string;
  title: string;
  description: string;
  answer: string;
}

interface FlashcardDialogProps {
  open: boolean;  onOpenChange: (open: boolean) => void;
  flashcard: Flashcard | null;
}

function FlashcardDialog({ open, onOpenChange, flashcard }: FlashcardDialogProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger />
      <DialogContent className="w-full border-2 max-w-3xl">
        <DialogHeader>
          <DialogTitle>Flashcard</DialogTitle>
          <DialogDescription>{flashcard && flashcard.topic}</DialogDescription>
        </DialogHeader>
        {flashcard && (
          <Card className="w-full border-2 max-w-3xl mb-2 mx-auto p-6 bg-card rounded-md shadow relative">
            <CardHeader>
              <CardTitle>{flashcard.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`card-content ${isFlipped ? "is-flipped" : ""}`}>
                <div className="card-front rounded">
                  <p>{flashcard.description}</p>
                </div>
                <div className="card-back rounded">
                  <p>{flashcard.answer}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={flipCard}>Flip</Button>
            </CardFooter>
          </Card>
        )}
        <DialogFooter>
          <Button onClick={() => onOpenChange(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FlashcardDialog;