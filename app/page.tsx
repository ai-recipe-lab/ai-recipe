"use client";

import { useEffect, useState } from "react";

type Recipe = {
  title: string;
  tools: string;
  steps: string;
  createdAt?: string;
};

const defaultRecipes = [
  {
    icon: "🌐",
    category: "ホームページ",
    title: "AIで初めてホームページを作る",
    description:
      "専門知識ゼロでも大丈夫。AIと会話しながら、自分のホームページを作る手順。",
    tools: "ChatGPT × VS Code",
    level: "はじめて",
    href: "/recipes/homepage",
  },
  {
    icon: "📝",
    category: "文章・仕事",
    title: "AIで伝わる文章を作る",
    description:
      "何を書けばいいか分からない時に、AIと一緒に文章を完成させる方法。",
    tools: "ChatGPT",
    level: "かんたん",
    href: "#",
  },
  {
    icon: "🎨",
    category: "画像・デザイン",
    title: "AIでSNS画像を作る",
    description:
      "デザイン経験がなくても、AIを使って投稿画像のアイデアを形にする方法。",
    tools: "ChatGPT × Gemini",
    level: "かんたん",
    href: "#",
  },
];

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [postedRecipes, setPostedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recipes") || "[]");
    setPostedRecipes(saved);
  }, []);

  const userRecipes = postedRecipes.map((recipe) => ({
    icon: "✨",
    category: "投稿レシピ",
    title: recipe.title,
    description: recipe.steps,
    tools: recipe.tools,
    level: "ユーザー投稿",
    href: "#",
  }));

  const filteredDefaultRecipes = defaultRecipes.filter((recipe) =>
    `${recipe.title} ${recipe.category} ${recipe.description} ${recipe.tools}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  const filteredUserRecipes = userRecipes.filter((recipe) =>
    `${recipe.title} ${recipe.category} ${recipe.description} ${recipe.tools}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#fafaf8] text-gray-900">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-xl font-bold">世界一優しいAIレシピ</div>
          <a
            href="/post"
            className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white"
          >
            レシピを投稿
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <div className="mb-5 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
          AI初心者のためのやさしい情報共有サービス
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          むずかしいAIを、
          <br />
          だれでも使えるレシピに。
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-600">
          ChatGPT、Gemini、ClaudeなどのAI活用法を、
          <br className="hidden md:block" />
          初心者でも真似できる手順にして共有します。
        </p>

        <div className="mx-auto mt-10 flex max-w-2xl items-center rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
          <span className="pl-4 text-gray-400">🔍</span>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="やりたいことを検索..."
            className="w-full bg-transparent px-4 py-3 outline-none"
          />
          <button className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-medium text-white">
            検索
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <p className="text-sm font-medium text-orange-600">POPULAR RECIPES</p>
        <h2 className="mt-2 text-3xl font-bold">人気のAIレシピ</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {filteredDefaultRecipes.map((recipe) => (
            <a
              key={recipe.title}
              href={recipe.href}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">{recipe.icon}</div>
              <div className="mt-6 flex items-center gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  {recipe.category}
                </span>
                <span className="text-xs text-gray-400">{recipe.level}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold leading-7">
                {recipe.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                {recipe.description}
              </p>
              <div className="mt-6 border-t border-gray-100 pt-4 text-sm font-medium text-gray-500">
                {recipe.tools}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <p className="text-sm font-medium text-orange-600">NEW RECIPES</p>
        <h2 className="mt-2 text-3xl font-bold">新着レシピ</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {filteredUserRecipes.map((recipe) => (
            <a
              key={recipe.title}
              href={recipe.href}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">{recipe.icon}</div>
              <div className="mt-6 flex items-center gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  {recipe.category}
                </span>
                <span className="text-xs text-gray-400">{recipe.level}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold leading-7">
                {recipe.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                {recipe.description}
              </p>
              <div className="mt-6 border-t border-gray-100 pt-4 text-sm font-medium text-gray-500">
                {recipe.tools}
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}