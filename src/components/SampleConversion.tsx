import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  personExample,
  weatherApiExample,
  configExample,
} from "../data/mockData";

const SampleConversion: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "json" | "yaml" | "xml" | "csharp"
  >("json");

  const [activeExample, setActiveExample] = useState<
    "person" | "weather" | "config"
  >("person");

  // JSON examples
  const jsonExamples = {
    person: JSON.stringify(personExample, null, 2),
    weather: JSON.stringify(weatherApiExample, null, 2),
    config: JSON.stringify(configExample, null, 2),
  };

  // YAML examples (pre-converted for display)
  const yamlExamples = {
    person: `person:
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
    - +1-555-987-6543`,
    weather: `location:
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
        uv: 3.0`,
    config: `appSettings:
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
    timeWindow: 60000`,
  };

  // XML examples (pre-converted for display)
  const xmlExamples = {
    person: `<person>
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
</person>`,
    weather: `<location>
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
</forecast>`,
    config: `<appSettings>
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
</logging>`,
  };

  // C# class examples
  const csharpExamples = {
    person: `public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Email { get; set; }
    public bool IsActive { get; set; }
    public Address Address { get; set; }
    public List<string> PhoneNumbers { get; set; }
}

public class Address
{
    public string Street { get; set; }
    public string City { get; set; }
    public string ZipCode { get; set; }
}`,
    weather: `public class WeatherData
{
    public Location Location { get; set; }
    public CurrentWeather Current { get; set; }
    public Forecast Forecast { get; set; }
}

public class Location
{
    public string Name { get; set; }
    public string Region { get; set; }
    public string Country { get; set; }
    public double Lat { get; set; }
    public double Lon { get; set; }
    public string Timezone { get; set; }
}

public class CurrentWeather
{
    public double TempC { get; set; }
    public double TempF { get; set; }
    public WeatherCondition Condition { get; set; }
    public double WindMph { get; set; }
    public double WindKph { get; set; }
    public string WindDir { get; set; }
    public int Humidity { get; set; }
    public int Cloud { get; set; }
    public double FeelslikeC { get; set; }
    public double FeelslikeF { get; set; }
    public double Uv { get; set; }
}

public class WeatherCondition
{
    public string Text { get; set; }
    public string Icon { get; set; }
    public int Code { get; set; }
}

public class Forecast
{
    public List<ForecastDay> ForecastDay { get; set; }
}

public class ForecastDay
{
    public string Date { get; set; }
    public Day Day { get; set; }
}

public class Day
{
    public double MaxtempC { get; set; }
    public double MaxtempF { get; set; }
    public double MintempC { get; set; }
    public double MintempF { get; set; }
    public WeatherCondition Condition { get; set; }
    public double Uv { get; set; }
}`,
    config: `public class AppConfiguration
{
    public AppSettings AppSettings { get; set; }
    public Database Database { get; set; }
    public Logging Logging { get; set; }
    public Api Api { get; set; }
}

public class AppSettings
{
    public string Name { get; set; }
    public string Version { get; set; }
    public string Environment { get; set; }
    public bool Debug { get; set; }
    public Features Features { get; set; }
}

public class Features
{
    public bool DarkMode { get; set; }
    public bool Notifications { get; set; }
    public bool Analytics { get; set; }
}

public class Database
{
    public string Host { get; set; }
    public int Port { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
    public int MaxConnections { get; set; }
    public int Timeout { get; set; }
}

public class Logging
{
    public string Level { get; set; }
    public string File { get; set; }
    public Rotation Rotation { get; set; }
}

public class Rotation
{
    public string MaxSize { get; set; }
    public int MaxFiles { get; set; }
}

public class Api
{
    public string BaseUrl { get; set; }
    public int Timeout { get; set; }
    public int Retries { get; set; }
    public RateLimit RateLimit { get; set; }
}

public class RateLimit
{
    public int MaxRequests { get; set; }
    public int TimeWindow { get; set; }
}`,
  };

  const getLanguage = (tab: string): string => {
    switch (tab) {
      case "json":
        return "json";
      case "yaml":
        return "yaml";
      case "xml":
        return "xml";
      case "csharp":
        return "csharp";
      default:
        return "json";
    }
  };

  const getContent = (tab: string): string => {
    switch (tab) {
      case "json":
        return jsonExamples[activeExample];
      case "yaml":
        return yamlExamples[activeExample];
      case "xml":
        return xmlExamples[activeExample];
      case "csharp":
        return csharpExamples[activeExample];
      default:
        return jsonExamples[activeExample];
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex border-b">
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "json"
              ? "bg-blue-50 text-blue-700 border-b-2 border-blue-500"
              : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
          }`}
          onClick={() => setActiveTab("json")}
        >
          JSON
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "yaml"
              ? "bg-blue-50 text-blue-700 border-b-2 border-blue-500"
              : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
          }`}
          onClick={() => setActiveTab("yaml")}
        >
          YAML
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "xml"
              ? "bg-blue-50 text-blue-700 border-b-2 border-blue-500"
              : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
          }`}
          onClick={() => setActiveTab("xml")}
        >
          XML
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "csharp"
              ? "bg-blue-50 text-blue-700 border-b-2 border-blue-500"
              : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
          }`}
          onClick={() => setActiveTab("csharp")}
        >
          C#
        </button>
      </div>

      <div className="flex border-b bg-gray-50">
        <button
          className={`px-4 py-2 text-xs font-medium ${
            activeExample === "person"
              ? "bg-gray-100 text-blue-700 border-b-2 border-blue-500"
              : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
          }`}
          onClick={() => setActiveExample("person")}
        >
          Person
        </button>
        <button
          className={`px-4 py-2 text-xs font-medium ${
            activeExample === "weather"
              ? "bg-gray-100 text-blue-700 border-b-2 border-blue-500"
              : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
          }`}
          onClick={() => setActiveExample("weather")}
        >
          Weather API
        </button>
        <button
          className={`px-4 py-2 text-xs font-medium ${
            activeExample === "config"
              ? "bg-gray-100 text-blue-700 border-b-2 border-blue-500"
              : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
          }`}
          onClick={() => setActiveExample("config")}
        >
          Config
        </button>
      </div>

      <div className="p-1 bg-gray-800">
        <SyntaxHighlighter
          language={getLanguage(activeTab)}
          style={vscDarkPlus}
          customStyle={{ margin: 0, borderRadius: "0.25rem" }}
          showLineNumbers
        >
          {getContent(activeTab)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default SampleConversion;
