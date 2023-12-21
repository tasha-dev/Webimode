
export type IAllowedLangs = "fa";

interface IAppConfig {
    locale: "fa" | "use_header"
    fallback_locale: "fa"
    allowedLangs: IAllowedLangs[]
}

const AppConfig: IAppConfig = {
    allowedLangs: ['fa'],
    locale: "fa",
    fallback_locale: "fa"
}

export default AppConfig;