import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import JsonConverterForm from "./components/JsonConverterForm";
import CodeDisplay from "./components/CodeDisplay";
import HomePage from "./components/HomePage";
import Logo from "./components/Logo";
import { JsonConversionRequest, JsonConversionResponse } from "./types";
import { convertJson } from "./services/api";
import SampleConversion from "./components/SampleConversion";
import { allExamples } from "./data/mockData";

const ConverterPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<JsonConversionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showExamples, setShowExamples] = useState<boolean>(false);

  const handleSubmit = async (request: JsonConversionRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await convertJson(request);
      setResponse(result);

      if (!result.success) {
        setError(result.errorMessage || "An unknown error occurred");
      }
    } catch (err) {
      setError("Failed to connect to the server");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getFormatDisplayName = (format: string): string => {
    switch (format.toLowerCase()) {
      case "csharp":
        return "C#";
      case "json":
        return "JSON";
      case "xml":
        return "XML";
      case "yaml":
        return "YAML";
      default:
        return format;
    }
  };

  const toggleExamples = () => {
    setShowExamples(!showExamples);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Logo size="medium" />
          <div className="flex space-x-4">
            <button
              onClick={toggleExamples}
              className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              {showExamples ? "Hide Examples" : "Show Examples"}
            </button>
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {showExamples && (
            <div className="px-4 py-5 mb-6 sm:px-0">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Example Data Formats
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Below are examples of different data formats that you can
                    convert between. Click on the tabs to see the same data
                    represented in different formats.
                  </p>
                  <SampleConversion />

                  <div className="mt-6">
                    <h3 className="text-md font-medium text-gray-900 mb-2">
                      Available Example Data
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {Object.entries(allExamples).map(([key, value]) => (
                        <div key={key} className="bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium text-gray-800 mb-1 capitalize">
                            {key}
                          </h4>
                          <p className="text-xs text-gray-600 mb-2">
                            {key === "person" &&
                              "Basic person information with contact details"}
                            {key === "productCatalog" &&
                              "Product catalog with multiple items and details"}
                            {key === "weatherApi" &&
                              "Weather API response with forecast data"}
                            {key === "config" &&
                              "Application configuration settings"}
                            {key === "userProfile" &&
                              "User profile with preferences and subscription details"}
                          </p>
                          <button
                            onClick={() => {
                              const jsonForm = document.getElementById(
                                "content"
                              ) as HTMLTextAreaElement;
                              if (jsonForm) {
                                jsonForm.value = JSON.stringify(value, null, 2);
                                // Trigger change event
                                const event = new Event("input", {
                                  bubbles: true,
                                });
                                jsonForm.dispatchEvent(event);
                              }
                            }}
                            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200"
                          >
                            Load Example
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                      Convert Between Formats
                    </h2>
                    <JsonConverterForm
                      onSubmit={handleSubmit}
                      isLoading={isLoading}
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                      {response && response.success
                        ? `Generated ${getFormatDisplayName(response.language)}`
                        : "Output"}
                    </h2>
                    {error && (
                      <div className="rounded-md bg-red-50 p-4 mb-4">
                        <div className="flex">
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">
                              Error
                            </h3>
                            <div className="mt-2 text-sm text-red-700">
                              <p>{error}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {response && response.success && response.generatedCode && (
                      <CodeDisplay
                        code={response.generatedCode}
                        language={response.language}
                      />
                    )}
                    {!response && !error && (
                      <div className="rounded-md bg-blue-50 p-4">
                        <div className="flex">
                          <div className="ml-3">
                            <p className="text-sm text-blue-700">
                              Enter your content and select the source and
                              target formats, then click "Convert" to generate
                              the output.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            Format Converter Tool - Convert between JSON, XML, YAML, C#, and
            Java
          </p>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/converter" element={<ConverterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
