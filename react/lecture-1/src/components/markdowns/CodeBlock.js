import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeBlock({ node, inline, className, children, ...props }) {
  // className에서 language 추출 (예: "language-js")
  const match = /language-(\w+)/.exec(className || '');

  // 인라인 코드(`code`)면 그냥 <code>로 렌더
  if (inline) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  // 코드블럭이면 하이라이터 사용
  return (
    <SyntaxHighlighter
      style={coy}
      language={match?.[1] || ''} // 언어 없으면 빈 문자열
      PreTag="div"
      customStyle={{
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '10px',
      }}
      {...props}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
