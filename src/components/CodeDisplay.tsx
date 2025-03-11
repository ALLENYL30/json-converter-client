import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeDisplayProps {
  code: string;
  language: string;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({ code, language }) => {
  const getLanguage = (lang: string): string => {
    switch (lang.toLowerCase()) {
      case "csharp":
      case "c#":
        return "csharp";
      case "java":
        return "java";
      case "json":
        return "json";
      case "xml":
        return "xml";
      case "yaml":
      case "yml":
        return "yaml";
      default:
        return "javascript";
    }
  };

  // Format YAML content to ensure proper indentation and line breaks
  const formatContent = (content: string, lang: string): string => {
    if (lang.toLowerCase() === "yaml" || lang.toLowerCase() === "yml") {
      // Ensure YAML content has proper line breaks
      return content.replace(/\\n/g, "\n");
    }
    return content;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    alert("Content copied to clipboard!");
  };

  return (
    <div className="relative">
      <div className="absolute top-2 right-2 z-10">
        <button
          onClick={handleCopyCode}
          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Copy
        </button>
      </div>
      <SyntaxHighlighter
        language={getLanguage(language)}
        style={vscDarkPlus}
        showLineNumbers
        customStyle={{
          borderRadius: "0.375rem",
          padding: "1rem",
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
          maxHeight: "500px",
          overflowY: "auto",
          whiteSpace: "pre-wrap",
        }}
      >
        {formatContent(code, language)}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;
