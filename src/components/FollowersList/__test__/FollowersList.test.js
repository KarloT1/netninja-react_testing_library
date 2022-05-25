import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  )
}

describe("FollowersList", () => {

  beforeEach(() => {
    console.log("Running before each test")
  })

  beforeAll(() => {
    console.log("Running once before all tests")
  })

  afterEach(() => {
    console.log("Running after each test")
  })

  afterAll(() => {
    console.log("Running once after all tests")
  })

  it('should render follower item', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    screen.debug()
    expect(followerDivElement).toBeInTheDocument();
  });

  it('should render follower item', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    screen.debug()
    expect(followerDivElement).toBeInTheDocument();
  });

  it('should render follower item', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    screen.debug()
    expect(followerDivElement).toBeInTheDocument();
  });

  // it('should render multiple follower items', async () => {
  //   render(<MockFollowersList />);
  //   const followerDivElements = await screen.findAllByTestId(/follower-item/i);
  //   expect(followerDivElements.length).toBe(5);
  // });
})