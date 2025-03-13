// Mock data examples for the Format Converter Tool

// Simple person example
export const personExample = {
  person: {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    isActive: true,
    address: {
      street: "123 Main St",
      city: "New York",
      zipCode: "10001",
    },
    phoneNumbers: ["+1-555-123-4567", "+1-555-987-6543"],
  },
};

// Product catalog example
export const productCatalogExample = {
  catalog: {
    name: "Summer Collection 2025",
    lastUpdated: "2025-03-15T14:30:00Z",
    products: [
      {
        id: "P001",
        name: "Lightweight Summer T-Shirt",
        price: 19.99,
        category: "Clothing",
        inStock: true,
        colors: ["White", "Blue", "Black"],
        sizes: ["S", "M", "L", "XL"],
        details: {
          material: "100% Cotton",
          care: "Machine wash cold",
          origin: "Made in USA",
        },
      },
      {
        id: "P002",
        name: "Beach Sandals",
        price: 24.99,
        category: "Footwear",
        inStock: true,
        colors: ["Tan", "Black"],
        sizes: ["6", "7", "8", "9", "10"],
        details: {
          material: "Synthetic leather",
          care: "Wipe with damp cloth",
          origin: "Imported",
        },
      },
      {
        id: "P003",
        name: "Sun Hat",
        price: 15.99,
        category: "Accessories",
        inStock: false,
        colors: ["Beige", "White"],
        sizes: ["One Size"],
        details: {
          material: "Straw",
          care: "Spot clean only",
          origin: "Imported",
        },
      },
    ],
  },
};

// Weather API response example
export const weatherApiExample = {
  location: {
    name: "San Francisco",
    region: "California",
    country: "USA",
    lat: 37.77,
    lon: -122.42,
    timezone: "America/Los_Angeles",
  },
  current: {
    temp_c: 18.5,
    temp_f: 65.3,
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
      code: 1003,
    },
    wind_mph: 12.5,
    wind_kph: 20.2,
    wind_dir: "WSW",
    humidity: 72,
    cloud: 25,
    feelslike_c: 17.8,
    feelslike_f: 64.0,
    uv: 4.0,
  },
  forecast: {
    forecastday: [
      {
        date: "2025-03-15",
        day: {
          maxtemp_c: 21.2,
          maxtemp_f: 70.2,
          mintemp_c: 14.5,
          mintemp_f: 58.1,
          condition: {
            text: "Sunny",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
            code: 1000,
          },
          uv: 5.0,
        },
      },
      {
        date: "2025-03-16",
        day: {
          maxtemp_c: 19.8,
          maxtemp_f: 67.6,
          mintemp_c: 13.9,
          mintemp_f: 57.0,
          condition: {
            text: "Cloudy",
            icon: "//cdn.weatherapi.com/weather/64x64/day/119.png",
            code: 1006,
          },
          uv: 3.0,
        },
      },
    ],
  },
};

// Configuration file example
export const configExample = {
  appSettings: {
    name: "MyApp",
    version: "1.2.3",
    environment: "production",
    debug: false,
    features: {
      darkMode: true,
      notifications: true,
      analytics: true,
    },
  },
  database: {
    host: "db.example.com",
    port: 5432,
    username: "app_user",
    password: "********",
    maxConnections: 100,
    timeout: 30000,
  },
  logging: {
    level: "info",
    file: "/var/log/myapp.log",
    rotation: {
      maxSize: "10MB",
      maxFiles: 5,
    },
  },
  api: {
    baseUrl: "https://api.example.com/v1",
    timeout: 5000,
    retries: 3,
    rateLimit: {
      maxRequests: 100,
      timeWindow: 60000,
    },
  },
};

// User profile example
export const userProfileExample = {
  user: {
    id: "u123456",
    username: "jsmith",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    dateJoined: "2023-05-12T09:24:17Z",
    isVerified: true,
    preferences: {
      theme: "dark",
      language: "en-US",
      notifications: {
        email: true,
        push: true,
        sms: false,
      },
      privacy: {
        profileVisibility: "public",
        showOnlineStatus: true,
      },
    },
    subscription: {
      plan: "premium",
      startDate: "2024-01-15T00:00:00Z",
      endDate: "2025-01-14T23:59:59Z",
      autoRenew: true,
      paymentMethod: {
        type: "credit_card",
        lastFour: "1234",
        expiryMonth: 12,
        expiryYear: 2026,
      },
    },
    address: {
      street: "456 Park Avenue",
      city: "Boston",
      state: "MA",
      zipCode: "02108",
      country: "USA",
    },
    socialProfiles: [
      {
        platform: "twitter",
        handle: "@janesmith",
        url: "https://twitter.com/janesmith",
      },
      {
        platform: "linkedin",
        handle: "jane-smith-dev",
        url: "https://linkedin.com/in/jane-smith-dev",
      },
    ],
  },
};

// All examples in one object for easy access
export const allExamples = {
  person: personExample,
  productCatalog: productCatalogExample,
  weatherApi: weatherApiExample,
  config: configExample,
  userProfile: userProfileExample,
};
