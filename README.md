# Notify - Note Taking App 📝

A simple and elegant note-taking application built with [Expo](https://expo.dev) and React Native.

## Features

- ✨ Create and edit notes
- 📱 Clean, modern UI with dark mode support
- 💾 Local file storage
- 🔄 Real-time updates
- 🗑️ Delete notes easily

## Get Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app with tunnel

   ```bash
   npx expo start --clear --tunnel
   ```

   This command starts the development server with:
   - `--clear`: Clears the bundler cache
   - `--tunnel`: Creates a tunnel for remote testing on physical devices

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Project Structure

```
notify/
├── app/                          # Main application directory (file-based routing)
│   ├── _layout.tsx              # Root layout component
│   ├── modal.tsx                # Welcome/intro modal screen
│   └── (tabs)/                  # Tab-based navigation
│       ├── _layout.tsx          # Tab layout configuration
│       ├── index.tsx            # Home screen - displays note list
│       └── notes.tsx            # Note editor screen
├── assets/                       # Static assets
│   └── images/                  # Image files
├── components/                   # Reusable React components
│   ├── WriterComponent.tsx      # Note writing/editing component
│   ├── themed-text.tsx          # Themed text component
│   ├── themed-view.tsx          # Themed view component
│   └── ui/                      # UI components
│       ├── collapsible.tsx
│       ├── icon-symbol.tsx
│       └── icon-symbol.ios.tsx
├── constants/                    # App constants
│   └── theme.ts                 # Theme colors and fonts
├── hooks/                        # Custom React hooks
│   ├── use-color-scheme.ts      # Color scheme hook
│   ├── use-color-scheme.web.ts  # Web-specific color scheme
│   └── use-theme-color.ts       # Theme color hook
├── scripts/                      # Utility scripts
│   └── reset-project.js         # Project reset script
├── service.ts                    # File system service functions
├── app.json                      # Expo configuration
├── package.json                  # Dependencies and scripts
└── tsconfig.json                # TypeScript configuration
```

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
