import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReactConfetti from "react-confetti";

const Confetti = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const toggleConfetti = () => {
    setIsConfettiActive((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Confetti Celebration</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Button onClick={toggleConfetti} className="mb-4">
            {isConfettiActive ? "Stop Confetti" : "Start Confetti"}
          </Button>
          {isConfettiActive && (
            <ReactConfetti
              width={window.innerWidth}
              height={window.innerHeight}
              recycle={false}
              numberOfPieces={200}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Confetti;
