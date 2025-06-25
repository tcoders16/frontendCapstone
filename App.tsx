

import './global.css';
import UploadImageScreen from './pages/UploadImageScreen';
import { View,Text } from 'react-native';
import { ErrorBoundary } from 'react-error-boundary';

export default function App() {
  return (
    <ErrorBoundary fallback={<Text>Something broke</Text>}>
      <UploadImageScreen />
    </ErrorBoundary>
  );
}