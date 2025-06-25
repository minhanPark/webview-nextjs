"use client";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-amber-400 flex items-center justify-center flex-col">
      <h1 className="text-2xl">안녕하세요</h1>
      <p>웹뷰입니다.</p>
      <button
        className="bg-emerald-400 p-2"
        onClick={() => console.log("웹 클릭입니다.")}
      >
        웹뷰 버튼
      </button>
    </div>
  );
}
