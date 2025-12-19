export interface Post {
  id: number;
  title: string;
  content: string;
  excerpt: string; // Um resumo do post
  date: string;
  slug: string; // A parte da URL (ex: meu-primeiro-post)
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Introdução ao Next.js 15",
    excerpt: "Descubra as novas funcionalidades do framework React mais popular.",
    content: "<p>O Next.js 15 traz estabilidade e performance. Uma das grandes mudanças é o suporte aprimorado a React Server Components e o compilador Turbopack...</p><p>Isso permite builds muito mais rápidos.</p>",
    date: "2024-12-19",
    slug: "introducao-ao-nextjs",
  },
  {
    id: 2,
    title: "Por que usar TypeScript?",
    content: "<p>TypeScript não é apenas sobre tipos, é sobre documentação viva do seu código. Ao definir interfaces, você garante que objetos tenham o formato esperado em toda a aplicação.</p>",
    excerpt: "Entenda como a tipagem estática pode salvar seu projeto de bugs.",
    date: "2024-12-18",
    slug: "porque-usar-typescript",
  },
  {
    id: 3,
    title: "Tailwind CSS: Estilização Rápida",
    excerpt: "Como criar layouts bonitos sem sair do seu HTML/JSX.",
    content: "<p>Esqueça os arquivos .css separados. Com Tailwind, você estiliza diretamente nas classes, o que acelera o desenvolvimento e facilita a manutenção do design system.</p>",
    date: "2024-12-17",
    slug: "tailwind-css-rapido",
  },
];