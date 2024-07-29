import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="flex-grow flex items-center justify-center w-full">
        <Card className="w-full max-w-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="pb-6">
            <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Vite + React + shadcn/ui</h1>
          </CardHeader>
          <CardContent className="space-y-12 px-8 py-6">
            <div className="flex justify-center items-center space-x-12">
              <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                <img src="/vite.svg" className="h-20" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                <img src="/src/assets/react.svg" className="h-20" alt="React logo" />
              </a>
              <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">
                <img src="/shadcn-ui.svg" className="h-20" alt="Shadcn/ui logo" />
              </a>
            </div>
            <p className="text-center text-lg text-gray-700">
              Edit <code className="bg-gray-200 p-1 rounded font-mono text-sm">src/App.jsx</code> and save to test HMR
            </p>
            <div className="text-center pt-6">
              <Button
                onClick={() => setCount((count) => count + 1)}
                className="px-10 py-6 text-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Count is {count}
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center pt-8 pb-6">
            <p className="text-sm text-center text-gray-600 italic">
              Click on the logos to learn more
            </p>
          </CardFooter>
        </Card>
      </div>
      <footer className="w-full text-center py-4 mt-8">
        <p className="text-gray-600">
          Made with ❤️ by <a href="https://mattpalmer.io" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Matt</a>
        </p>
      </footer>
    </div>
  );
};

export default App;