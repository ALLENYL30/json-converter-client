import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowsRightLeftIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";
import Logo from "./Logo";
import SampleConversion from "./SampleConversion";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Logo size="medium" />
            </div>
            <div className="flex items-center">
              <Link
                to="/converter"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Try Converter
              </Link>
              <a
                href="#features"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                How It Works
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Format Converter Tool
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            The all-in-one solution for converting between JSON, XML, YAML, and
            generating code.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <Link
              to="/converter"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Start Converting
            </Link>
            <a
              href="#features"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Learn More
            </a>
          </div>
          <div className="max-w-4xl mx-auto">
            <SampleConversion />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Conversion Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your data between multiple formats with just a few clicks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-blue-600 mb-4 flex justify-center">
              <ArrowsRightLeftIcon className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
              Format Conversion
            </h3>
            <p className="text-gray-600 text-center">
              Convert between JSON, XML, and YAML formats seamlessly
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-blue-600 mb-4 flex justify-center">
              <CodeBracketIcon className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
              Code Generation
            </h3>
            <p className="text-gray-600 text-center">
              Generate C# and Java classes from your JSON data
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-blue-600 mb-4 flex justify-center">
              <DocumentTextIcon className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
              Syntax Highlighting
            </h3>
            <p className="text-gray-600 text-center">
              View your converted code with beautiful syntax highlighting
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-blue-600 mb-4 flex justify-center">
              <DocumentIcon className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
              Easy to Use
            </h3>
            <p className="text-gray-600 text-center">
              Simple interface with instant conversion and customization options
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-lg shadow-md"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Converting between formats has never been easier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Select Formats
            </h3>
            <p className="text-gray-600">
              Choose your source and target formats from the dropdown menu
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Paste Your Content
            </h3>
            <p className="text-gray-600">
              Enter or paste your content in the input field
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Get Results
            </h3>
            <p className="text-gray-600">
              View and copy your converted content with proper formatting
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/converter"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Try It Now
          </Link>
        </div>
      </section>

      {/* Testimonials/Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Use Cases</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our tool helps developers and data professionals in various
            scenarios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              API Development
            </h3>
            <p className="text-gray-600">
              Convert between JSON and XML formats when working with different
              APIs and data sources.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Configuration Management
            </h3>
            <p className="text-gray-600">
              Transform configuration files between YAML and JSON for different
              environments and tools.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Code Generation
            </h3>
            <p className="text-gray-600">
              Generate C# or Java classes from JSON data to speed up development
              and reduce errors.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-blue-600 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:py-16 md:px-12 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Ready to convert your data?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Start using our Format Converter Tool today and simplify your data
              transformation tasks.
            </p>
            <Link
              to="/converter"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Format Converter Tool
            </h3>
            <p className="text-gray-300">
              The all-in-one solution for converting between JSON, XML, YAML,
              and generating code.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-gray-300">
              <li>JSON to XML Conversion</li>
              <li>XML to JSON Conversion</li>
              <li>JSON to YAML Conversion</li>
              <li>YAML to JSON Conversion</li>
              <li>C# Code Generation</li>
              <li>Java Code Generation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/docs" className="hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/api" className="hover:text-white">
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/your-repo/format-converter"
                  className="hover:text-white"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>
            © {new Date().getFullYear()} Format Converter Tool. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
