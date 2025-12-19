import Link from "next/link";
import { Post } from "../lib/posts"; // Importamos o tipo que criamos

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`} 
      className="block p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-50 transition duration-200"
    >
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {post.title}
      </h2>
      <p className="mb-3 font-normal text-gray-700">
        {post.excerpt}
      </p>
      <div className="flex items-center text-sm text-gray-500">
        <span>{post.date}</span>
        <span className="mx-2">•</span>
        <span className="text-blue-600 font-medium">Ler mais &rarr;</span>
      </div>
    </Link>
  );
}