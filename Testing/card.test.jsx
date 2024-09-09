import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card
 from '../src/components/card';
describe('Card Component', () => {
  const mockProps = {
    title: '2012, Maruti Suzuki Wagon R 1.0 LXi',
    year: 2012,
    imageUrl: 'https://imgd.aeplcdn.com/300x225/cw/ucp/stockApiImg/XMOMEMK_1908159_1_16655119.jpg',
    km: 45000,
    price: '3,00,000'
  };

  it('should render the Card component with the correct details', () => {
    const { getByText, getByAltText } = render(<Card {...mockProps} />);

    // Check that the title is rendered
    expect(getByText(mockProps.title)).toBeInTheDocument();

    // Check that the price is rendered
    expect(getByText(`Rs. ${mockProps.price}`)).toBeInTheDocument();

    // Check that the year and km are rendered
    expect(getByText((content, element) => {
      return content.includes(`Year: ${mockProps.year}`) && content.includes(`Km: ${mockProps.km}`);
    })).toBeInTheDocument();
    // Check that the image is rendered with the correct src and alt
    expect(getByAltText(mockProps.title)).toHaveAttribute('src', mockProps.imageUrl);
  });

  it('should render the default image if no imageUrl is provided', () => {
    const { getByAltText } = render(<Card {...mockProps} imageUrl={null} />);

    const noImageUrl = 'https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg';

    // Check that the default image is rendered if no imageUrl is provided
    expect(getByAltText(mockProps.title)).toHaveAttribute('src', noImageUrl);
  });
});
