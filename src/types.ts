export interface JsonConversionRequest {
  content: string;
  sourceFormat: string;
  targetFormat: string;
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
