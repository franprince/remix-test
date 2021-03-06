import { render, screen } from "@testing-library/react";
import PersonalData from "../PersonalData";

const mockProps = {
  name: "Francisco Prince",
  location: "La Plata",
  jobTitle: "Frontend developer",
  availability: "No disponible",
  picture: {
    alt: "test",
    src: "test.web",
  },
};

describe("Personal Data component", () => {
  it("Should display content", () => {
    render(<PersonalData {...mockProps} />);
    const name = screen.getByText(mockProps.name);
    const location = screen.getByText(mockProps.location);
    const jobTitle = screen.getByText(mockProps.jobTitle);
    const availability = screen.getByText(mockProps.availability);
    const pictureAlt = screen.getByAltText(mockProps.picture.alt);
    const pictureSrc = screen.getByRole("img");
    expect(name).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(jobTitle).toBeInTheDocument();
    expect(availability).toBeInTheDocument();
    expect(pictureAlt).toBeInTheDocument();
    expect(pictureSrc).toHaveAttribute("src", mockProps.picture.src);

  });

  it("Should use default values", () => {
    render(<PersonalData {...{ ...mockProps, picture: undefined }} />);
    const pictureAlt = screen.getByAltText(/profile picture/i);
    const pictureSrc = screen.getByRole("img");
    expect(pictureAlt).toBeInTheDocument();
    expect(pictureSrc).toHaveAttribute(
      "src",
      "https://dummyimage.com/300x300/000/ffffff.png&text=Profile+picture"
    );
  });
});
