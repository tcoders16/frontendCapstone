

import './global.css';
import UploadImageScreen from './pages/UploadImageScreen';
import { View,Text } from 'react-native';
import { ErrorBoundary } from 'react-error-boundary';
import SpecificationCard from './pages/RecognitionEngine'
export default function App() {
  return (
    <ErrorBoundary fallback={<Text>Something broke</Text>}>
      <SpecificationCard title={'Glasses'} description={'A golden frame round glass '} type={'Glass'} specification={'Scratch on right side '} />
    </ErrorBoundary>
  );
}