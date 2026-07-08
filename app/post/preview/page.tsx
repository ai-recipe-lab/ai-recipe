"use client";

import { useSearchParams } from "next/navigation";

export default function PreviewPage() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title") || "レシピ名が入ります";
  const tools = searchParams.get("tools") || "使用するAI・ツール";
  const steps = searchParams.get("steps") || "手順が入ります";

  function saveRecipe() {
    const newRecipe = {
      title,
      tools,
      steps,
      createdAt: new Date().toISOString(),
    };

    const savedRecipes = JSON.parse(localStorage.getItem("recipes") || "[]");
    savedRecipes.push(newRecipe);
    localStorage.setItem("recipes", JSON.stringify(savedRecipes));

    alert("投稿を保存しました");
    window.location.href = "/";
  }

  return (
    <main className="min-h-screen bg-[#fafaf8] text-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <button onClick={() => window.history.back()} className="text-sm text-gray-500">
          ← 編集画面へ戻る
        </button>

        <h1 className="mt-10 text-4xl font-bold">投稿プレビュー</h1>

        <article className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm text-orange-700">
            AIレシピ
          </span>

          <h2 className="mt-6 text-3xl font-bold">{title}</h2>

          <div className="mt-8 border-t border-gray-100 pt-6">
            <p className="text-sm font-bold text-gray-400">使用するAI・ツール</p>
            <p className="mt-2 text-gray-700">{tools}</p>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-6">
            <p className="text-sm font-bold text-gray-400">手順</p>
            <p className="mt-3 whitespace-pre-wrap leading-8 text-gray-700">{steps}</p>
          </div>
        </article>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => window.history.back()}
            className="flex-1 rounded-xl border border-gray-300 bg-white px-6 py-4 font-bold"
          >
            修正する
          </button>

          <button
            onClick={saveRecipe}
            className="flex-1 rounded-xl bg-gray-900 px-6 py-4 font-bold text-white"
          >
            この内容で投稿する
          </button>
        </div>
      </div>
    </main>
  );
}