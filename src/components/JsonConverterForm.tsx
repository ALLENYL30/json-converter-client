import React, { useState, useEffect } from "react";
import { JsonConversionRequest } from "../types";
import {
  personExample,
  weatherApiExample,
  configExample,
  productCatalogExample,
  userProfileExample,
} from "../data/mockData";

interface JsonConverterFormProps {
  onSubmit: (request: JsonConversionRequest) => void;
  isLoading: boolean;
}

const JsonConverterForm: React.FC<JsonConverterFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const [content, setContent] = useState<string>(
    JSON.stringify(personExample, null, 2)
  );
  const [sourceFormat, setSourceFormat] = useState<string>("JSON");
  const [targetFormat, setTargetFormat] = useState<string>("CSharp");
  const [rootClassName, setRootClassName] = useState<string>("Person");
  const [generateProperties, setGenerateProperties] = useState<boolean>(true);
  const [generateJsonAttributes, setGenerateJsonAttributes] =
    useState<boolean>(true);
  const [usePascalCase, setUsePascalCase] = useState<boolean>(true);
  const [showCodeOptions, setShowCodeOptions] = useState<boolean>(true);
  const [selectedExample, setSelectedExample] = useState<string>("person");

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
    let sampleJson = "";

    switch (selectedExample) {
      case "person":
        sampleJson = JSON.stringify(personExample, null, 2);
        setRootClassName("Person");
        break;
      case "weather":
        sampleJson = JSON.stringify(weatherApiExample, null, 2);
        setRootClassName("WeatherData");
        break;
      case "config":
        sampleJson = JSON.stringify(configExample, null, 2);
        setRootClassName("AppConfiguration");
        break;
      case "product":
        sampleJson = JSON.stringify(productCatalogExample, null, 2);
        setRootClassName("ProductCatalog");
        break;
      case "user":
        sampleJson = JSON.stringify(userProfileExample, null, 2);
        setRootClassName("UserProfile");
        break;
      default:
        sampleJson = JSON.stringify(personExample, null, 2);
        setRootClassName("Person");
    }

    setContent(sampleJson);
    setSourceFormat("JSON");
  };

  const handleSampleXml = () => {
    let sampleXml = "";

    switch (selectedExample) {
      case "person":
        sampleXml = `<?xml version="1.0" encoding="UTF-8"?>
<person>
  <name>John Doe</name>
  <age>30</age>
  <email>john@example.com</email>
  <isActive>true</isActive>
  <address>
    <street>123 Main St</street>
    <city>New York</city>
    <zipCode>10001</zipCode>
  </address>
  <phoneNumbers>
    <item>+1-555-123-4567</item>
    <item>+1-555-987-6543</item>
  </phoneNumbers>
</person>`;
        setRootClassName("Person");
        break;
      case "weather":
        sampleXml = `<?xml version="1.0" encoding="UTF-8"?>
<weatherData>
  <location>
    <name>San Francisco</name>
    <region>California</region>
    <country>USA</country>
    <lat>37.77</lat>
    <lon>-122.42</lon>
    <timezone>America/Los_Angeles</timezone>
  </location>
  <current>
    <temp_c>18.5</temp_c>
    <temp_f>65.3</temp_f>
    <condition>
      <text>Partly cloudy</text>
      <icon>//cdn.weatherapi.com/weather/64x64/day/116.png</icon>
      <code>1003</code>
    </condition>
    <wind_mph>12.5</wind_mph>
    <wind_kph>20.2</wind_kph>
    <wind_dir>WSW</wind_dir>
    <humidity>72</humidity>
    <cloud>25</cloud>
    <feelslike_c>17.8</feelslike_c>
    <feelslike_f>64.0</feelslike_f>
    <uv>4.0</uv>
  </current>
  <forecast>
    <forecastday>
      <item>
        <date>2025-03-15</date>
        <day>
          <maxtemp_c>21.2</maxtemp_c>
          <maxtemp_f>70.2</maxtemp_f>
          <mintemp_c>14.5</mintemp_c>
          <mintemp_f>58.1</mintemp_f>
          <condition>
            <text>Sunny</text>
            <icon>//cdn.weatherapi.com/weather/64x64/day/113.png</icon>
            <code>1000</code>
          </condition>
          <uv>5.0</uv>
        </day>
      </item>
    </forecastday>
  </forecast>
</weatherData>`;
        setRootClassName("WeatherData");
        break;
      case "config":
        sampleXml = `<?xml version="1.0" encoding="UTF-8"?>
<appConfiguration>
  <appSettings>
    <name>MyApp</name>
    <version>1.2.3</version>
    <environment>production</environment>
    <debug>false</debug>
    <features>
      <darkMode>true</darkMode>
      <notifications>true</notifications>
      <analytics>true</analytics>
    </features>
  </appSettings>
  <database>
    <host>db.example.com</host>
    <port>5432</port>
    <username>app_user</username>
    <password>********</password>
    <maxConnections>100</maxConnections>
    <timeout>30000</timeout>
  </database>
  <logging>
    <level>info</level>
    <file>/var/log/myapp.log</file>
    <rotation>
      <maxSize>10MB</maxSize>
      <maxFiles>5</maxFiles>
    </rotation>
  </logging>
</appConfiguration>`;
        setRootClassName("AppConfiguration");
        break;
      default:
        sampleXml = `<?xml version="1.0" encoding="UTF-8"?>
<person>
  <name>John Doe</name>
  <age>30</age>
  <email>john@example.com</email>
  <isActive>true</isActive>
  <address>
    <street>123 Main St</street>
    <city>New York</city>
    <zipCode>10001</zipCode>
  </address>
  <phoneNumbers>
    <item>+1-555-123-4567</item>
    <item>+1-555-987-6543</item>
  </phoneNumbers>
</person>`;
        setRootClassName("Person");
    }

    setContent(sampleXml);
    setSourceFormat("XML");
  };

  const handleSampleYaml = () => {
    let sampleYaml = "";

    switch (selectedExample) {
      case "person":
        sampleYaml = `# Person data
person:
  name: John Doe
  age: 30
  email: john@example.com
  isActive: true
  address:
    street: 123 Main St
    city: New York
    zipCode: '10001'
  phoneNumbers:
    - +1-555-123-4567
    - +1-555-987-6543`;
        setRootClassName("Person");
        break;
      case "weather":
        sampleYaml = `# Weather API data
location:
  name: San Francisco
  region: California
  country: USA
  lat: 37.77
  lon: -122.42
  timezone: America/Los_Angeles
current:
  temp_c: 18.5
  temp_f: 65.3
  condition:
    text: Partly cloudy
    icon: //cdn.weatherapi.com/weather/64x64/day/116.png
    code: 1003
  wind_mph: 12.5
  wind_kph: 20.2
  wind_dir: WSW
  humidity: 72
  cloud: 25
  feelslike_c: 17.8
  feelslike_f: 64.0
  uv: 4.0
forecast:
  forecastday:
    - date: '2025-03-15'
      day:
        maxtemp_c: 21.2
        maxtemp_f: 70.2
        mintemp_c: 14.5
        mintemp_f: 58.1
        condition:
          text: Sunny
          icon: //cdn.weatherapi.com/weather/64x64/day/113.png
          code: 1000
        uv: 5.0
    - date: '2025-03-16'
      day:
        maxtemp_c: 19.8
        maxtemp_f: 67.6
        mintemp_c: 13.9
        mintemp_f: 57.0
        condition:
          text: Cloudy
          icon: //cdn.weatherapi.com/weather/64x64/day/119.png
          code: 1006
        uv: 3.0`;
        setRootClassName("WeatherData");
        break;
      case "config":
        sampleYaml = `# Application configuration
appSettings:
  name: MyApp
  version: 1.2.3
  environment: production
  debug: false
  features:
    darkMode: true
    notifications: true
    analytics: true
database:
  host: db.example.com
  port: 5432
  username: app_user
  password: '********'
  maxConnections: 100
  timeout: 30000
logging:
  level: info
  file: /var/log/myapp.log
  rotation:
    maxSize: 10MB
    maxFiles: 5
api:
  baseUrl: https://api.example.com/v1
  timeout: 5000
  retries: 3
  rateLimit:
    maxRequests: 100
    timeWindow: 60000`;
        setRootClassName("AppConfiguration");
        break;
      default:
        sampleYaml = `# Person data
person:
  name: John Doe
  age: 30
  email: john@example.com
  isActive: true
  address:
    street: 123 Main St
    city: New York
    zipCode: '10001'
  phoneNumbers:
    - +1-555-123-4567
    - +1-555-987-6543`;
        setRootClassName("Person");
    }

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

        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Example Data
          </label>
          <div className="flex flex-wrap gap-2 mb-2">
            <button
              type="button"
              onClick={() => setSelectedExample("person")}
              className={`px-2 py-1 text-xs font-medium rounded ${
                selectedExample === "person"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Person
            </button>
            <button
              type="button"
              onClick={() => setSelectedExample("weather")}
              className={`px-2 py-1 text-xs font-medium rounded ${
                selectedExample === "weather"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Weather API
            </button>
            <button
              type="button"
              onClick={() => setSelectedExample("config")}
              className={`px-2 py-1 text-xs font-medium rounded ${
                selectedExample === "config"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Config
            </button>
            <button
              type="button"
              onClick={() => setSelectedExample("product")}
              className={`px-2 py-1 text-xs font-medium rounded ${
                selectedExample === "product"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Product Catalog
            </button>
            <button
              type="button"
              onClick={() => setSelectedExample("user")}
              className={`px-2 py-1 text-xs font-medium rounded ${
                selectedExample === "user"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              User Profile
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleSampleJson}
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Load JSON Example
            </button>
            <button
              type="button"
              onClick={handleSampleXml}
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Load XML Example
            </button>
            <button
              type="button"
              onClick={handleSampleYaml}
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Load YAML Example
            </button>
          </div>
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
