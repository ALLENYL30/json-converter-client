import React, { useState, useEffect } from "react";
import { JsonConversionRequest } from "../types";

interface JsonConverterFormProps {
  onSubmit: (request: JsonConversionRequest) => void;
  isLoading: boolean;
}

const JsonConverterForm: React.FC<JsonConverterFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const [content, setContent] = useState<string>("");
  const [sourceFormat, setSourceFormat] = useState<string>("JSON");
  const [targetFormat, setTargetFormat] = useState<string>("CSharp");
  const [rootClassName, setRootClassName] = useState<string>("RootObject");
  const [generateProperties, setGenerateProperties] = useState<boolean>(true);
  const [generateJsonAttributes, setGenerateJsonAttributes] =
    useState<boolean>(true);
  const [usePascalCase, setUsePascalCase] = useState<boolean>(true);
  const [showCodeOptions, setShowCodeOptions] = useState<boolean>(true);

  useEffect(() => {
    // Show code generation options only for C# and Java
    setShowCodeOptions(targetFormat === "CSharp" || targetFormat === "Java");
  }, [targetFormat]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const request: JsonConversionRequest = {
      content,
      sourceFormat,
      targetFormat,
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
    setContent(sampleJson);
    setSourceFormat("JSON");
  };

  const handleSampleXml = () => {
    const sampleXml = `<?xml version="1.0" encoding="UTF-8"?>
<person>
  <id>1</id>
  <name>John Doe</name>
  <email>john.doe@example.com</email>
  <isActive>true</isActive>
  <age>30</age>
  <address>
    <street>123 Main St</street>
    <city>New York</city>
    <zipCode>10001</zipCode>
  </address>
  <phoneNumbers>
    <phoneNumber>
      <type>home</type>
      <number>212-555-1234</number>
    </phoneNumber>
    <phoneNumber>
      <type>work</type>
      <number>646-555-5678</number>
    </phoneNumber>
  </phoneNumbers>
  <tags>
    <tag>developer</tag>
    <tag>javascript</tag>
    <tag>react</tag>
  </tags>
</person>`;
    setContent(sampleXml);
    setSourceFormat("XML");
  };

  const handleSampleYaml = () => {
    const sampleYaml = `# Sample person data
id: 1
name: John Doe
email: john.doe@example.com
isActive: true
age: 30
address:
  street: 123 Main St
  city: New York
  zipCode: '10001'
phoneNumbers:
  - type: home
    number: 212-555-1234
  - type: work
    number: 646-555-5678
tags:
  - developer
  - javascript
  - react`;
    setContent(sampleYaml);
    setSourceFormat("YAML");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700"
        >
          Content
        </label>
        <div className="mt-1">
          <textarea
            id="content"
            name="content"
            rows={10}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="mt-2 flex space-x-2">
          <button
            type="button"
            onClick={handleSampleJson}
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Load Sample JSON
          </button>
          <button
            type="button"
            onClick={handleSampleXml}
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Load Sample XML
          </button>
          <button
            type="button"
            onClick={handleSampleYaml}
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Load Sample YAML
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="sourceFormat"
            className="block text-sm font-medium text-gray-700"
          >
            Source Format
          </label>
          <select
            id="sourceFormat"
            name="sourceFormat"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={sourceFormat}
            onChange={(e) => setSourceFormat(e.target.value)}
          >
            <option value="JSON">JSON</option>
            <option value="XML">XML</option>
            <option value="YAML">YAML</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="targetFormat"
            className="block text-sm font-medium text-gray-700"
          >
            Target Format
          </label>
          <select
            id="targetFormat"
            name="targetFormat"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={targetFormat}
            onChange={(e) => setTargetFormat(e.target.value)}
          >
            <option value="CSharp">C#</option>
            <option value="Java">Java</option>
            <option value="JSON">JSON</option>
            <option value="XML">XML</option>
            <option value="YAML">YAML</option>
          </select>
        </div>
      </div>

      {showCodeOptions && (
        <>
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
                <p className="text-gray-500">
                  Add JSON serialization attributes
                </p>
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
        </>
      )}

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Converting..." : "Convert"}
        </button>
      </div>
    </form>
  );
};

export default JsonConverterForm;
