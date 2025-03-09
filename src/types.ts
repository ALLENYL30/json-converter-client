export interface JsonConversionRequest {
  jsonContent: string;
  targetLanguage: string;
  rootClassName: string;
  generateProperties: boolean;
  generateJsonAttributes: boolean;
  usePascalCase: boolean;
}

export interface JsonConversionResponse {
  success: boolean;
  generatedCode?: string;
  errorMessage?: string;
  language: string;
}
