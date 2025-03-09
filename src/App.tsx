import React, { useState } from "react";
import JsonConverterForm from "./components/JsonConverterForm";
import CodeDisplay from "./components/CodeDisplay";
import { JsonConversionRequest, JsonConversionResponse } from "./types";
import { convertJson } from "./services/api";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<JsonConversionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            JSON Converter Tool
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                      Convert JSON to Code
                    </h2>
                    <JsonConverterForm
                      onSubmit={handleSubmit}
                      isLoading={isLoading}
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                      Generated Code
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
                              Enter your JSON and click "Convert JSON" to
                              generate code.
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
            JSON Converter Tool - Convert JSON to C# and Java classes
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
