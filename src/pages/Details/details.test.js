import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Details from './index';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () =>({id:'MVAF65'})
}));

jest.mock('../../services/searchProducts', () => {
  const {responseProductDetailMock} = require('../../mocks/products.mock');
  return {
    searchProductById: (id) => Promise.resolve({ ...responseProductDetailMock }) // arreglar esto, este es el mock de productos y no de productodetalle
  }
});



describe('Details Component', () => {
  test('renders', () => {
    const { asFragment  } = render(<Details />);
    expect(asFragment()).toMatchSnapshot();
  });

})
