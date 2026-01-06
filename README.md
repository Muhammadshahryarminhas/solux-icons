# Solux Icons

[![npm version](https://badge.fury.io/js/%40soluxicons%2Ficons.svg)](https://badge.fury.io/js/%40soluxicons%2Ficons)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

A modern, comprehensive SVG icon library for **React Native**, **React JS**, and **Next.js**. Beautiful, customizable icons with TypeScript support and optimized performance across all platforms.

## ✨ Features

- 🎨 **Modern SVG Icons** - Clean, scalable vector graphics
- 📱 **Cross-Platform** - Works seamlessly with React Native, React JS, and Next.js
- 🔷 **TypeScript Support** - Full type safety with `IconName` types
- ⚡ **Optimized** - Tree-shakable and performant
- 🎯 **Customizable** - Size, color, and stroke width control
- 📦 **Lightweight** - No external dependencies for icons themselves

## 🚀 Installation

```bash
npm install @soluxicons/icons react-native-svg
# or
yarn add @soluxicons/icons react-native-svg
```

### React Native Setup

For React Native, you also need `react-native-svg`:

```bash
npm install react-native-svg
cd ios && pod install
```

## 📖 Usage

### Basic Usage

```tsx
import { Icon, IconName } from '@soluxicons/icons';

function MyComponent() {
  return (
    <Icon
      name="circleExclamation"
      size={24}
      color="#FF6B6B"
      strokeWidth={2}
    />
  );
}
```

### React Native Example

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from '@soluxicons/icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Icon name="heart" size={32} color="#FF6B6B" />
      <Icon name="star" size={24} color="#FFD93D" strokeWidth={1.5} />
      <Icon name="checkCircle" size={28} color="#6BCF7F" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
});
```

### React Web Example

```tsx
import React from 'react';
import { Icon } from '@soluxicons/icons';

export default function MyComponent() {
  return (
    <div>
      <Icon name="user" size={20} color="#333" />
      <Icon name="settings" size={16} color="#666" />
    </div>
  );
}
```

## 🎨 Icon Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `IconName` | **required** | The icon name from available icons |
| `size` | `number` | `24` | Icon size in pixels |
| `color` | `string` | `"#000"` | Icon color (stroke color) |
| `strokeWidth` | `number` | `2` | Stroke width of the icon |

## 📋 Available Icons

The library includes hundreds of icons across multiple categories:

- **Alerts** - warning, error, success, info icons
- **Arrows** - directional and navigation arrows
- **Business** - commerce and finance icons
- **Communication** - chat, email, social media icons
- **Editing** - text formatting and tools
- **People** - user and profile related icons
- **Security** - locks, shields, authentication icons
- **Time** - clocks, calendars, scheduling icons
- And many more...

## 🔧 Development

### Building the Library

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Normalize SVG files (if adding new icons)
npm run normalize:svgs
```

### Project Structure

```
src/
├── icons/           # Core icon components and SVG exports
│   ├── Icon.tsx    # Main Icon component
│   ├── index.ts    # Icon exports and types
│   └── svgs/       # Individual SVG icon files
├── web/            # Web-specific implementation
├── native/         # React Native-specific implementation
└── index.ts        # Main library exports
```

### Adding New Icons

1. Add your SVG file to the appropriate category folder in `src/icons/svgs/`
2. Run `npm run normalize:svgs` to standardize the SVG format
3. The build script will automatically include new icons

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons designed with modern aesthetics in mind
- Built with TypeScript for better developer experience
- Optimized for performance across all platforms
