import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import CodeCopyButton from './CodeCopyButton';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-white mb-6 mt-8">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-white mb-4 mt-8 border-b border-indigo-800 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-indigo-200 mb-3 mt-6">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-indigo-300 mb-2 mt-4">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-indigo-100 leading-relaxed mb-4">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-indigo-100">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-indigo-100">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="ml-4">{children}</li>,
    code: ({ children, className }) => {
      const isInline = !className;
      
      if (isInline) {
        return (
          <code className="bg-indigo-950 text-cyan-300 px-2 py-1 rounded font-mono text-sm">
            {children}
          </code>
        );
      }
      
      return (
        <code className={`${className} font-mono text-sm`}>
          {children}
        </code>
      );
    },
    pre: ({ children, ...props }: any) => {
      const code = children?.props?.children || '';
      const codeString = typeof code === 'string' ? code : '';
      
      return (
        <div className="relative group">
          <pre className="bg-indigo-950 border border-indigo-800 rounded-lg p-4 overflow-x-auto mb-6 font-mono text-sm" {...props}>
            {children}
          </pre>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <CodeCopyButton code={codeString.trim()} />
          </div>
        </div>
      );
    },
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-cyan-400 bg-indigo-950/50 pl-4 py-2 my-4 italic text-indigo-200">
        {children}
      </blockquote>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-indigo-800 rounded-lg overflow-hidden">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-indigo-900">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-indigo-800">{children}</tbody>
    ),
    tr: ({ children }) => <tr>{children}</tr>,
    th: ({ children }) => (
      <th className="px-4 py-3 text-left text-white font-semibold">{children}</th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 text-indigo-200">{children}</td>
    ),
    hr: () => <hr className="border-indigo-800 my-8" />,
    strong: ({ children }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-indigo-200">{children}</em>
    ),
    Image: (props: any) => <Image {...props} className="rounded-lg my-6" />,
    ...components,
  };
}

