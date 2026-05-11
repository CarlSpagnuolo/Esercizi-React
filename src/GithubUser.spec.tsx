import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GithubUser } from "./GithubUser";

describe("<GithubUser />", () => {
  it("shows info about a user from Github", async () => {
    render(<GithubUser username="billy" />);

    const name = await screen.findByText("Billy");
    const login = await screen.findByText("billy");
    expect(name).toBeInTheDocument();
    expect(login).toBeInTheDocument();
    const image = await screen.findByRole("img");
    expect(image).toHaveAttribute("src", "https://avatar.com/billy.png");
  });
});
