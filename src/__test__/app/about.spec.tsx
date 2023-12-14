import AboutPage from "@/app/about/page";
import LayoutAbout from "@/app/about/layout";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";

describe("About Page", () => {
  it("should render", () => {
    const page = render(
      <LayoutAbout>
        <AboutPage />
      </LayoutAbout>
    );
    expect(page).toMatchSnapshot();
  });
});
