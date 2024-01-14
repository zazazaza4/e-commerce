export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
    emailjsServiceId: string;
    emailjsTemplateId: string;
    emailjsUserId: string;
}

export interface EmailCredentials {
    serviceId: string;
    templateId: string;
    userId: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
    project: 'storybook' | 'frontend' | 'jest';
    emailjs: EmailCredentials;
}
