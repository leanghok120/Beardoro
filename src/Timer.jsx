function Timer() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <button className="text-black font-bold bg-white px-4 py-2 rounded-full text-lg pointer hover:bg-white">
          pomodoro
        </button>
        <button className="text-black font-bold bg-white px-4 py-2 rounded-full text-lg pointer hover:bg-white">
          short break
        </button>
        <button className="text-black font-bold bg-white px-4 py-2 rounded-full text-lg pointer hover:bg-white">
          long break
        </button>
      </div>
      <h1 className="font-bold text-white text-center text-9xl mt-8">50:00</h1>
    </div>
  );
}

export default Timer;
