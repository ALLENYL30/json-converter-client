import React, { useState } from "react";
import { JsonConversionRequest } from "../types";

interface JsonConverterFormProps {
  onSubmit: (request: JsonConversionRequest) => void;
  isLoading: boolean;
}

const JsonConverterForm: React.FC<JsonConverterFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const [jsonContent, setJsonContent] = useState<string>("");
  const [targetLanguage, setTargetLanguage] = useState<string>("CSharp");
  const [rootClassName, setRootClassName] = useState<string>("RootObject");
  const [generateProperties, setGenerateProperties] = useState<boolean>(true);
  const [generateJsonAttributes, setGenerateJsonAttributes] =
    useState<boolean>(true);
  const [usePascalCase, setUsePascalCase] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const request: JsonConversionRequest = {
      jsonContent,
      targetLanguage,
      rootClassName,
      generateProperties,
      generateJsonAttributes,
      usePascalCase,
    };

    onSubmit(request);
  };

  const handleSampleJson = () => {
    const sampleJson = `{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "isActive": true,
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zipCode": "10001"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212-555-1234"
    },
    {
      "type": "work",
      "number": "646-555-5678"
    }
  ],
  "tags": ["developer", "javascript", "react"]
}`;
    setJsonContent(sampleJson);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="jsonContent"
          className="block text-sm font-medium text-gray-700"
        >
          JSON Content
        </label>
        <div className="mt-1">
          <textarea
            id="jsonContent"
            name="jsonContent"
            rows={10}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            value={jsonContent}
            onChange={(e) => setJsonContent(e.target.value)}
            required
          />
        </div>
        <button
          type="button"
          onClick={handleSampleJson}
          className="mt-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Load Sample JSON
        </button>
      </div>

      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="targetLanguage"
            className="block text-sm font-medium text-gray-700"
          >
            Target Language
          </label>
          <select
            id="targetLanguage"
            name="targetLanguage"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            <option value="CSharp">C#</option>
            <option value="Java">Java</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="rootClassName"
            className="block text-sm font-medium text-gray-700"
          >
            Root Class Name
          </label>
          <input
            type="text"
            name="rootClassName"
            id="rootClassName"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={rootClassName}
            onChange={(e) => setRootClassName(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="generateProperties"
              name="generateProperties"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              checked={generateProperties}
              onChange={(e) => setGenerateProperties(e.target.checked)}
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="generateProperties"
              className="font-medium text-gray-700"
            >
              Generate Properties
            </label>
            <p className="text-gray-500">
              Generate getters and setters for fields
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="generateJsonAttributes"
              name="generateJsonAttributes"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              checked={generateJsonAttributes}
              onChange={(e) => setGenerateJsonAttributes(e.target.checked)}
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="generateJsonAttributes"
              className="font-medium text-gray-700"
            >
              Generate JSON Attributes
            </label>
            <p className="text-gray-500">Add JSON serialization attributes</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="usePascalCase"
              name="usePascalCase"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              checked={usePascalCase}
              onChange={(e) => setUsePascalCase(e.target.checked)}
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="usePascalCase"
              className="font-medium text-gray-700"
            >
              Use PascalCase
            </label>
            <p className="text-gray-500">
              Convert property names to PascalCase
            </p>
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Converting..." : "Convert JSON"}
        </button>
      </div>
    </form>
  );
};

export default JsonConverterForm;
