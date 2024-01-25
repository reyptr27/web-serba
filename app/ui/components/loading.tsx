export default function Loading() {
  return (
    <>
      <div className="flex flex-row gap-4 justify-center  py-20">
        <div className="w-4 h-4 shadow-lg rounded-full bg-green-700 animate-bounce"></div>
        <div className="w-4 h-4 shadow-lg rounded-full bg-green-700 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 shadow-lg rounded-full bg-green-700 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </>
  );
}
