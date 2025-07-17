import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function BirthdayGiftSite() {
  const [showMessages, setShowMessages] = useState(false);
  const [showGames, setShowGames] = useState(false);

  const messages = [
    "Happy Birthday, my love! ❤️",
    "I made this little site just for you.",
    "Hope it makes you smile today and always.",
  ];

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-pink-600 mb-6 text-center"
      >
        Happy Birthday ❤️
      </motion.h1>
      <div className="flex flex-col gap-4">
        <Button onClick={() => setShowMessages(!showMessages)}>
          {showMessages ? "Hide Messages" : "See Messages"}
        </Button>
        <Button onClick={() => setShowGames(!showGames)}>
          {showGames ? "Hide Games" : "Play Games"}
        </Button>
      </div>

      {showMessages && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 max-w-md w-full"
        >
          {messages.map((msg, index) => (
            <Card key={index} className="mb-4 bg-white shadow-xl rounded-2xl">
              <CardContent className="p-4 text-center text-lg text-pink-500">
                {msg}
              </CardContent>
            </Card>
          ))}
        </motion.div>
      )}

      {showGames && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 max-w-md w-full grid grid-cols-1 gap-4"
        >
          <Card>
            <CardContent className="p-4 text-center">
              <p className="mb-2">Tic Tac Toe (Coming Soon)</p>
              <Button disabled>Play</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="mb-2">Memory Match (Coming Soon)</p>
              <Button disabled>Play</Button>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}