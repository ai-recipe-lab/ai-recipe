"use client";

import { useSearchParams } from "next/navigation";

export default function PreviewPage() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title") || "レシピ名が入ります";
  const tools = searchParams.get("tools") || "使用するAI・ツール";
  const steps = searchParams.get("steps") || "手順が入ります";

  return (
    <main className="min-h-screen bg-[#fafaf8] text-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <button
          onClick={() => window.history.back()}
          className="text-sm text-gray-500 hover:text-gray-900"
        >
          ← 編集画面へ戻る
        </button>

        <div className="mt-10 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-orange-600">
              PREVIEW
            </p>
            <h1 className="mt-2 text-3xl font-bold">
              投稿プレビュー
            </h1>
          </div>

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
            公開前
          </span>
        </div>

        <article className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="p-8 md:p-10">
            <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
              AIレシピ
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight">
              {title}
            </h2>

            <div className="mt-8 border-t border-gray-100 pt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                使用するAI・ツール
              </p>
              <p className="mt-2 text-base font-medium text-gray-700">
                {tools}
              </p>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                手順
              </p>
              <p className="mt-3 whitespace-pre-wrap text-base leading-8 text-gray-700">
                {steps}
              </p>
            </div>
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
            onClick={() => alert("次の開発で本当の投稿保存機能を追加します")}
            className="flex-1 rounded-xl bg-gray-900 px-6 py-4 font-bold text-white"
          >
            この内容で投稿する
          </button>
        </div>
      </div>
    </main>
  );
}