# Preview Invoice
This is a Next.js app that generates invoice previews with internationalization support.

## Features
- Generate invoice previews in real-time.
- Support for multiple languages.
- Customizable templates and styles.

## Getting Started

1. Clone this repository.
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Internationalization

This app uses [next-intl](https://next-intl-docs.vercel.app/) routing to support multiple languages. To add a new language, follow these steps:

1. Add the new language to the `locales` array in `middleware.ts`
2. Create a new translation file in the `src/i18n` directory
3. Add translations for all keys in the new translation file

## Customization

- You can customize the invoice templates and styles by editing the files in the `components` and `styles` directories.
- You can also change the `theme` of mui components in `theme/theme.ts`

## Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any ideas or suggestions.
