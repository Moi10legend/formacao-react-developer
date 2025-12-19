import { posts } from "../../../src/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;

  // 1. Busca o post que tem o slug igual ao da URL
  const post = posts.find((p) => p.slug === slug);

  // 2. Se não encontrar, chama a página de 404 do Next.js
  if (!post) {
    notFound();
  }

  // 3. Renderiza o post
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Botão de Voltar */}
        <div className="p-6 border-b border-gray-100">
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors flex items-center gap-2"
          >
            &larr; Voltar para Home
          </Link>
        </div>

        <article className="p-8 sm:p-12">
          {/* Cabeçalho do Artigo */}
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              {post.title}
            </h1>
            <p className="text-gray-500 text-sm">
              Publicado em {post.date}
            </p>
          </header>

          {/* Conteúdo do Artigo */}
          {/* IMPORTANTE: Como estamos usando HTML puro no mock (ex: <p>...), 
            precisamos usar dangerouslySetInnerHTML. Em um app real com Markdown, 
            faríamos diferente.
          */}
          <div 
            className="prose prose-lg text-gray-700 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
      </div>
    </main>
  );
}