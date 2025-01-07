import './App.css';
import PurchasesList from './components/purchases-desktop/purchases-list';
import PurchasesListMobile from './components/purchases-mobile/purchases-mobile';
import { useViewport } from './hooks/use-viewport';

/*
  Approaches considered for rendering U:
    1. Use CSS Media queries to build responsive UI.
    2. Conditional rendering of component based on viewport width.
  Since the use case is to show a completely different designs for each view, i chose to use #2 approach 
  as we cant achieve to render different views by using media queries. Also, having separate components for Mobile
  and Desktop view also makes it easier to maintain code and extend on top of it. 
*/

function App() {
  const { width } = useViewport();
  const breakpoint = 620;

  // Conditional rendering of mobile or desktop view based on the viewport width determined by calling the custom hook.
  return width < breakpoint ? <PurchasesListMobile /> : <PurchasesList />;
}

export default App;
