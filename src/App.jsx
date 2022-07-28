import { Background } from './components/Background/Background';
import { GlobalStyle, PageContainer } from './style/GlobalStyle';
import { FeedbackForm } from './components/Form/Form';
import { Footer } from 'components/Footer/Footer';

function App() {
  return (
    <PageContainer>
      <GlobalStyle />
      <FeedbackForm />
      <Footer />
      <Background />
    </PageContainer>
  );
}

export default App;
