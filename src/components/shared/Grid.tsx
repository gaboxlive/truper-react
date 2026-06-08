import React from "react";

interface GridProps {
  next?: () => void;
  previous?: () => void;
  children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({ children, next, previous }) => {
  return (
    <div className="container mx-auto w-full">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 mx-auto place-items-center">
        {children}
      </div>
      <div className="flex justify-between mt-5">
        {previous && (
          <button onClick={previous} className="text-red-500 px-4 py-2 rounded">
            Anterior
          </button>
        )}
        {next && (
          <button onClick={next} className="text-red-500 px-4 py-2 rounded">
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};
